import { Children, createElement } from "react";
import type { ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5";

export type RenderHeadingContentProps = {
    title?: string;
    children?: ReactNode;
    tag: HeadingTag;
    className?: string;
};

const isTextOnlyChildren = (children: ReactNode) => {
    const nodes = Children.toArray(children);

    return (
        nodes.length > 0 &&
        nodes.every((node) => typeof node === "string" || typeof node === "number")
    );
};

export const renderHeadingContent = ({ title, children, tag, className }: RenderHeadingContentProps) => {
    // When both title and children are provided, flex them with title on left and children on right
    if (title && children) {
        return createElement(
            "div",
            { className: "flex items-center justify-between gap-4" },
            createElement(tag, { className }, title),
            children
        );
    }

    if (title) {
        return createElement(tag, { className }, title);
    }

    if (isTextOnlyChildren(children)) {
        return createElement(tag, { className }, children);
    }

    return children;
};

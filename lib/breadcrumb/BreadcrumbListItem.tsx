import React from "react";
import { classNames } from "~/utils";

/**
 * Individual breadcrumb item containing a link or active page indicator.
 * 
 * @component
 * @category Layout
 * @accessibility Active page should use span with className="active" and aria-current="page". For icon-only links, the component automatically discovers icon labels via static properties and applies aria-label to the link element. Provide an explicit label prop to override the automatic behavior.
 * @since 0.2.6
 * @see {@link https://crafted-ui.com/docs/layout/breadcrumb}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-layout-breadcrumb}
 * 
 * @param props.label - Optional label for links. Overrides automatically discovered icon labels and text content. Applied as aria-label when the link contains only icons.
 */
export type BreadcrumbListItemProps = React.ComponentProps<"li"> & {
    label?: string;
}

export const BreadcrumbListItem = ({ label, className, children, ...props }: BreadcrumbListItemProps) => {
    
    const derivedLabel = React.useMemo(() => {
        if (label) return label;
        
        const extractLabelFromChildren = (child: React.ReactNode): string | undefined => {
            if (typeof child === 'string') return child;
            if (React.isValidElement(child)) {
                if ((child.type as any)?.label) return (child.type as any).label;
                const childProps = child.props as { children?: React.ReactNode };
                if (childProps.children) {
                    const nestedLabel = React.Children.toArray(childProps.children)
                        .map(extractLabelFromChildren)
                        .find(l => l);
                    if (nestedLabel) return nestedLabel;
                }
            }
            return undefined;
        };
        
        return React.Children.toArray(children)
            .map(extractLabelFromChildren)
            .find(l => l);
    }, [label, children]);

    const processedChildren = React.useMemo(() => {
        if (!derivedLabel) return children;
        
        return React.Children.map(children, child => {
            if (React.isValidElement(child) && (child.type === 'a' || (child.type as any)?.displayName === 'Link')) {
                const childProps = child.props as { children?: React.ReactNode };
                const hasTextContent = React.Children.toArray(childProps.children).some(
                    c => typeof c === 'string' && c.trim().length > 0
                );
                
                if (!hasTextContent) {
                    return React.cloneElement(child, { 
                        'aria-label': derivedLabel,
                        ...(childProps as any)
                    } as any);
                }
            }
            return child;
        });
    }, [children, derivedLabel]);

    return (
        <li className={classNames(
                        "text-muted-foreground", 
                        "has-[.active]:text-primary has-[.active]:font-bold",
                        "[&>a]:hover:text-foreground",
                        className)} { ...props }>
            { processedChildren }
        </li>
    )
}

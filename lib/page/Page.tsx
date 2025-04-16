import { classNames } from "~/utils";

export type PageProps = React.ComponentProps<"div">

export const Page = ({ className, children, ...props }: PageProps) => {

    return (
        <div className={classNames("max-w-container mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8", className)} { ...props }>
            { children }
        </div>
    )
}

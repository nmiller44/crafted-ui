import { classNames } from "../utils.js";

export type ContainerProps = React.ComponentProps<"div">;

export const Container = ({ className, children, ...props }: ContainerProps) => {
    return (
        <div className={classNames("mx-auto max-w-container px-4 sm:px-6 lg:px-8", className)} { ...props }>
            { children }
        </div>
    )
}

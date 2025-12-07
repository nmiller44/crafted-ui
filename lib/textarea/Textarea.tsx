import { classNames } from "~/utils";

export type TextareaProps = React.ComponentProps<"textarea">

export const Textarea = ({ className, children, ...props }: TextareaProps) => {

    return (
        <textarea className={classNames(
                                            "relative",
                                            "mt-1 block w-full py-2 px-3",
                                            "rounded-md border-0 ring-1 ring-inset ring-border shadow-sm",
                                            "aria-[invalid=true]:ring-danger",
                                            "text-sm text-foreground placeholder:text-muted-foreground", 
                                            "focus:ring-2 focus:ring-inset focus:border-foreground focus:outline-none focus:ring-foreground",
                                            "disabled:opacity-50 disabled:cursor-not-allowed",
                                            "resize-y",
                                            className
                )} {...props}>{children}</textarea>
    )
}

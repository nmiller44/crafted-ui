import { Input as InputPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

export type InputProps = React.ComponentProps<typeof InputPrimitive>

export const Input = ({ type = "text", className, children, ...props }: InputProps) => {

    return (
        <InputPrimitive type={ type } className={classNames(
                                            "relative",
                                            "mt-1 block w-full px-3 py-2",

                                            "has-[~_.inset-left]:pl-6",
                                            "has-[~_.inset-right]:pr-6",
                                            "rounded-md border-0 ring-1 ring-inset ring-border shadow-sm",
                                            "aria-[invalid=true]:ring-danger",
                                            "text-sm text-foreground placeholder:text-muted-foreground", 
                                            "focus:ring-2 focus:ring-inset focus:border-foreground focus:outline-none focus:ring-foreground",
                                            "disabled:opacity-50 disabled:cursor-not-allowed",
                                            className
                )} {...props} />
    )
}


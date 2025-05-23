import { Input as InputPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

export type InputProps = React.ComponentProps<typeof InputPrimitive>

export const Input = ({ type = "text", className, children, ...props }: InputProps) => {

    return (
        <InputPrimitive type={ type } className={classNames(
                                            "relative",
                                            "mt-1 block w-full py-2 px-3",
                                            // hasLeftInsetChild ? "pl-7" : "pl-3",
                                            // hasRightInsetChild ? "pr-7" : "pr-3",
                                            "rounded-md border-0 ring-1 ring-inset ring-neutral-300 shadow-sm",
                                            "aria-[invalid=true]:ring-red-600",
                                            "text-sm text-neutral-900 placeholder:text-neutral-400", 
                                            "focus:ring-2 focus:ring-inset focus:border-neutral-800 focus:outline-none focus:ring-neutral-800",
                                            "disabled:opacity-50 disabled:cursor-not-allowed",
                                            className
                )} {...props} />
    )
}


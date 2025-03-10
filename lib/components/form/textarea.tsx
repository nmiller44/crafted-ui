import { TextareaHTMLAttributes } from "react"
import { classNames } from "../../utils.js"; 





export const Textarea = ({
    className,
    ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {

    return (
        <textarea className={classNames(
            "mt-1 block w-full py-2 px-3",
            "rounded-md border-0 ring-1 ring-inset ring-neutral-300 shadow-sm",
            "invalid:ring-red-600",
            "text-sm text-neutral-900 placeholder:text-neutral-400", 
            "focus:ring-2 focus:ring-inset focus:border-neutral-800 focus:outline-none focus:ring-neutral-800"
        )} />
    )
}
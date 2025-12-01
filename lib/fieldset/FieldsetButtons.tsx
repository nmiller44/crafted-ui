import { classNames } from "~/utils";

export type FieldsetButtonsProps = React.ComponentProps<"div"> & {
    align?: 'left' | 'center' | 'right';  
}

export const FieldsetButtons = ({ 
        align = 'right', 
        className, 
        children, 
        ...props 
    }: FieldsetButtonsProps) => {

    return (
        <div className={classNames(
                            "flex space-x-4",
                            align === 'right' ? "justify-end" : align === 'center' ? "justify-center" : "justify-start",
                            "col-span-full",
                            className
                        )} { ...props }>
            { children}
        </div> 
    )
};
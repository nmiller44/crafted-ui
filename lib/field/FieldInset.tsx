import { classNames } from "~/utils";

export type FieldInsetProps = React.ComponentProps<"div"> & {
    text?: string;
    position?: "left" | "right";
}

export const FieldInset = ({ text, position = "right", className, children, ...props }: FieldInsetProps) => {

    return (
        <div className={classNames(                    
                            "pointer-events-none absolute top-[1.75rem] h-[2.5rem] flex items-center",
                            position === "left" ? "left-0 pl-3 inset-left" : "right-0 pr-3 inset-right", 
                            className
                        )} { ...props }>
            { !!text
                ? <span className="text-muted-foreground text-sm">{ text }</span>
                : children
            }
        </div>
    )
}

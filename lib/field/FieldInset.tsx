import { classNames } from "~/utils";

export type FieldInsetProps = React.ComponentProps<"div"> & {
    text?: string;
    position?: "left" | "right";
}

export const FieldInset = ({ text, position = "right", className, children, ...props }: FieldInsetProps) => {

    return (
        <div className={classNames(                    
                            "pointer-events-none absolute inset-y-0 flex items-end pb-[9px]",
                            position === "left" ? "left-0 pl-3" : "right-0 pr-3", 
                            className
                        )} { ...props }>
            { !!text
                ? <span className="text-muted-foreground text-sm">{ text }</span>
                : children
            }
        </div>
    )
}

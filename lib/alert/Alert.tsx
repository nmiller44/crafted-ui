import { Heading5 } from "~/heading";
import { classNames } from "~/utils";

export type AlertProps = React.ComponentProps<"div"> & {
    status?: 'warning' | 'danger' | 'success' | 'info', 
    title?: string,  
}

export const Alert = ({ status = 'warning', title, className, children, ...props }: AlertProps) => {

    const colors = {
        warning: 'bg-warning/10 border-warning/50 text-warning',
        danger: 'bg-danger/10 border-danger/50 text-danger',
        success: 'bg-success/10 border-success/50 text-success',
        info: 'bg-info/10 border-info/50 text-info',
      };

    return (
        <div className={classNames(
                            "p-4 border rounded-md",
                            "flex flex-col gap-2",
                            "text-sm", 
                            colors[status], 
                            className
                )} { ...props }>
            { !!title &&
                <Heading5 title={ title } />
            }
            { children }
        </div> 
    )
};
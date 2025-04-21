import { Heading5 } from "~/heading";
import { classNames } from "~/utils";

export type AlertProps = React.ComponentProps<"div"> & {
    status?: 'warning' | 'error' | 'success' | 'info', 
    title: string,  
}

export const Alert = ({ status = 'warning', title, className, children, ...props }: AlertProps) => {

    const colors = {
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-700',
        error: 'bg-red-50 border-red-200 text-red-700',
        success: 'bg-green-50 border-green-200 text-green-700',
        info: 'bg-blue-50 border-blue-200 text-blue-700',
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
import { Heading1 } from "~/heading/Heading1";
import { classNames } from "~/utils";

export type PageHeaderProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
    wrapperClassName?: string;
}

export const PageHeader = ({ title, subtitle, className, children, wrapperClassName, ...props }: PageHeaderProps) => {

    return (
        <div className={classNames(
                    "pb-10", 
                    (!!title && !!children) ? "md:flex md:items-center md:justify-between" : "",
                    wrapperClassName
                )} { ...props }>
        { !!title
            ?   <>
                    <div>
                        <Heading1 title={title} subtitle={subtitle} className={ className } />
                    </div>
                    { !!children &&
                    <div>
                        { children }
                    </div>
                    }
                </>
            :   children 
        }
        </div>
    )
}

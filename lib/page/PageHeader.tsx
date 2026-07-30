import { Heading1 } from "~/heading/Heading1";
import { classNames } from "~/utils";

export type PageHeaderProps = React.ComponentProps<"header"> & {
    title?: string;
    subtitle?: string;
    wrapperClassName?: string;
}

export const PageHeader = ({ title, subtitle, className, children, wrapperClassName, ...props }: PageHeaderProps) => {

    return (
        <header className={classNames(
                    "md:flex md:items-start md:justify-between",
                    wrapperClassName
                )} { ...props }>
        { !!(title || subtitle)
            ?   <>
                    <Heading1 title={title} subtitle={subtitle} className={ className } />
                    { !!children &&
                    <div className="flex gap-2">
                        { children }
                    </div>
                    }
                </>
            :   children
        }
        </header>
    )
}

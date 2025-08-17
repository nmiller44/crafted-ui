import { Heading1 } from "~/heading/Heading1";
import { classNames } from "~/utils";
import { pageWrapperClass } from "./Page";

export type PageHeaderProps = React.ComponentProps<"header"> & {
    title?: string;
    subtitle?: string;
    wrapperClassName?: string;
}

export const PageHeader = ({ title, subtitle, className, children, wrapperClassName, ...props }: PageHeaderProps) => {

    return (
        <header className={classNames(
                    (!!title && !!children) ? "md:flex md:items-center md:justify-between" : "",
                    pageWrapperClass,
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
        </header>
    )
}

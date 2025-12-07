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
                    "max-w-container mx-auto",
                    "px-6 lg:px-8",
                    (!!title && !!children) ? "space-y-6 md:flex md:items-top md:justify-between" : "",
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

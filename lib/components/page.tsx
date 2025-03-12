import { classNames } from "../utils.js"; 
import { Heading1 } from "./heading.js";



export type PageProps = {
    children?: React.ReactNode
}

export const Page = ({ children }: PageProps) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            { children }
        </div>
    )
}

export type PageHeaderProps = {
    title?: string;
    subtitle?: string;
    className?: string;
    wrapperClassName?: string;
    children?: React.ReactNode;
}

export const PageHeader = ({ title, subtitle, className, wrapperClassName, children }: PageHeaderProps) => {

    return (
        <div className={classNames(
                            "pb-10", 
                            (!!title && !!children) ? "md:flex md:items-center md:justify-between" : "",
                            wrapperClassName
                        )}>
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

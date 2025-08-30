import { Heading2 } from "~/heading/Heading2";
import { classNames } from "~/utils";

export type SectionHeaderProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
    lined?: boolean;
    wrapperClassName?: string;
}

export const SectionHeader = ({ title, subtitle, lined = false, className, children, wrapperClassName, ...props }: SectionHeaderProps) => {

    return (
        <div className={classNames(
                            !!lined ? "border-b border-border pb-3" : "",
                            (!!title && !!children) ? "md:flex md:items-center md:justify-between" : "",
                            wrapperClassName
                        )} { ...props }>
            { !!title 
                ?   <>
                        <div>
                            <Heading2 title={ title } subtitle={ subtitle } className={ className } />
                        </div>
                        { !!children &&
                        <div>
                            { children }
                        </div>
                        }
                    </>
                : children 
            }
        </div>
    )
}

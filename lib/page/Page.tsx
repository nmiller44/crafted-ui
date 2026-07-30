import { PageHeader } from "./PageHeader";
import { classNames } from "~/utils";
export type PageProps = React.ComponentProps<"div"> & {
    title?: string,
    subtitle?: string,
}

export const Page = ({ title, subtitle, className, children, ...props }: PageProps) => {

    return (
        <>
            { (title || subtitle) &&
                <PageHeader
                    title={ title }
                    subtitle={ subtitle }
                />
            }
            <div className={ classNames("space-y-8", className) } { ...props }>
                { children }
            </div>
        </>
    )
}

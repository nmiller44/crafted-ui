import { classNames } from "~/utils";
import { PageHeader } from "./PageHeader";

export type PageProps = React.ComponentProps<"div"> & {
    title?: string,
    subtitle?: string,
}

export const pageWrapperClass = classNames(
    "max-w-container mx-auto",
    "px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
);

export const Page = ({ title, subtitle, className, children, ...props }: PageProps) => {

    return (
        <>
            { !!title &&
                <PageHeader title={ title } 
                            subtitle={ subtitle } />
            }
            <div className={classNames(
                    pageWrapperClass,
                    "space-y-12",
                    className)} { ...props }>
                { children }
            </div>
        </>
    )
}

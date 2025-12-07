import { classNames } from "~/utils";
import { PageHeader } from "./PageHeader";

export type PageProps = React.ComponentProps<"div"> & {
    title?: string,
    subtitle?: string,
}

export const Page = ({ title, subtitle, className, children, ...props }: PageProps) => {

    return (
        <main className="grow py-6 lg:py-8 space-y-10">
            { !!title &&
                <PageHeader title={ title } 
                            subtitle={ subtitle } />
            }
            <div className={classNames(
                    "max-w-container mx-auto",
                    "px-6 lg:px-8",
                    "space-y-12",
                    className)} { ...props }>
                { children }
            </div>
        </main>
    )
}

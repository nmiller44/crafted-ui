import { classNames } from "~/utils";
import { SectionHeader } from "./SectionHeader";

export type SectionProps = React.ComponentProps<"section"> & {
    title?: string;
    subtitle?: string;
}

export const Section = ({ title, subtitle, className, children, ...props }: SectionProps) => {

    return (
        <section className={classNames(
                    "[&:not(:first-child)]:mt-12 space-y-8", 
                    className)} { ...props }>
            { !!title &&
                <SectionHeader title={ title } subtitle={ subtitle } />
            }
            { children }
        </section>
    )
}
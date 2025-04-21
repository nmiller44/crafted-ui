import { classNames } from "~/utils";
import { SectionHeader } from "./SectionHeader";

export type SectionProps = React.ComponentProps<"section"> & {
    title?: string;
    subtitle?: string;
}

export const Section = ({ title, subtitle, className, children, ...props }: SectionProps) => {

    return (
        <section className={classNames("[&:not(:first-of-type)]:mt-12", className)} { ...props }>
            { !!title &&
                <SectionHeader title={ title } subtitle={ subtitle } />
            }
            { children }
        </section>
    )
}
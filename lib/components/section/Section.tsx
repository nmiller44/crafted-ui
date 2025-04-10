import { classNames } from "@/utils.js";

export type SectionProps = React.ComponentProps<"section">

export const Section = ({ className, children, ...props }: SectionProps) => {

    return (
        <section className={classNames("[&:not(:first-of-type)]:mt-12", className)} { ...props }>
            { children }
        </section>
    )
}

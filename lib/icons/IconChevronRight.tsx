import { classNames } from "~/utils";

/**
 * Right chevron icon for navigation.
 * 
 * @param props.label - Semantic label for accessibility contexts. Defaults to "Next".
 */
export type IconChevronRightProps = React.ComponentProps<"svg"> & {
  label?: string;
};

export const IconChevronRight = ({ label = "Next", className, ...props }: IconChevronRightProps) => (
  <svg 
    className={classNames("size-5", className)} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

IconChevronRight.label = "Next";

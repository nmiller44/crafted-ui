import { classNames } from "~/utils";

/**
 * Left chevron icon for navigation.
 * 
 * @param props.label - Semantic label for accessibility contexts. Defaults to "Previous".
 */
export type IconChevronLeftProps = React.ComponentProps<"svg"> & {
  label?: string;
};

export const IconChevronLeft = ({ label = "Previous", className, ...props }: IconChevronLeftProps) => (
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
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

IconChevronLeft.label = "Previous";

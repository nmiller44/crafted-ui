import { classNames } from "~/utils";

/**
 * Downward chevron icon for expanding content.
 * 
 * @param props.label - Semantic label for accessibility contexts. Defaults to "Expand".
 */
export type IconChevronDownProps = React.ComponentProps<"svg"> & {
  label?: string;
};

export const IconChevronDown = ({ label = "Expand", className, ...props }: IconChevronDownProps) => (
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
    <path d="M6 9l6 6 6-6" />
  </svg>
);

IconChevronDown.label = "Expand";

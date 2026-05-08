import { classNames } from "~/utils";

/**
 * Calendar icon.
 * 
 * @param props.label - Semantic label for accessibility contexts. Defaults to "Calendar".
 */
export type IconCalendarProps = React.ComponentProps<"svg"> & {
  label?: string;
};

export const IconCalendar = ({ label = "Calendar", className, ...props }: IconCalendarProps) => (
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
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

IconCalendar.label = "Calendar";

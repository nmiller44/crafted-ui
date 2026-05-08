import { classNames } from "~/utils";

/**
 * Check/checkmark icon.
 * 
 * @param props.label - Semantic label for accessibility contexts. Defaults to "Check".
 */
export type IconCheckProps = React.ComponentProps<"svg"> & {
  label?: string;
};

export const IconCheck = ({ label = "Check", className, ...props }: IconCheckProps) => (
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
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

IconCheck.label = "Check";

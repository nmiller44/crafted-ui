import { classNames } from "~/utils";

/**
 * X/close icon.
 * 
 * @param props.label - Semantic label for accessibility contexts. Defaults to "Close".
 */
export type IconXProps = React.ComponentProps<"svg"> & {
  label?: string;
};

export const IconX = ({ label = "Close", className, ...props }: IconXProps) => (
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
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

IconX.label = "Close";

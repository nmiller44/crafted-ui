import { classNames } from "~/utils";

/**
 * Minus icon for removing or decreasing.
 * 
 * @param props.label - Semantic label for accessibility contexts. Defaults to "Remove".
 */
export type IconMinusProps = React.ComponentProps<"svg"> & {
  label?: string;
};

export const IconMinus = ({ label = "Remove", className, ...props }: IconMinusProps) => (
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
    <path d="M5 12h14" />
  </svg>
);

IconMinus.label = "Remove";

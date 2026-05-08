import { classNames } from "~/utils";

/**
 * Plus icon for adding or increasing.
 * 
 * @param props.label - Semantic label for accessibility contexts. Defaults to "Add".
 */
export type IconPlusProps = React.ComponentProps<"svg"> & {
  label?: string;
};

export const IconPlus = ({ label = "Add", className, ...props }: IconPlusProps) => (
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
    <path d="M12 5v14M5 12h14" />
  </svg>
);

IconPlus.label = "Add";

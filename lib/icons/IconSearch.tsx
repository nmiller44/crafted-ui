import { classNames } from "~/utils";

/**
 * Search/magnifying glass icon.
 * 
 * @param props.label - Semantic label for accessibility contexts. Defaults to "Search".
 */
export type IconSearchProps = React.ComponentProps<"svg"> & {
  label?: string;
};

export const IconSearch = ({ label = "Search", className, ...props }: IconSearchProps) => (
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
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

IconSearch.label = "Search";

import { classNames } from "~/utils";

export type IconChevronUpProps = React.ComponentProps<"svg">;

export const IconChevronUp = ({ className, ...props }: IconChevronUpProps) => (
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
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

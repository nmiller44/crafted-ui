import { classNames } from "~/utils";

export type IconShareProps = React.ComponentProps<"svg">;

export const IconShare = ({ className, ...props }: IconShareProps) => (
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
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.5 13.5l7 3M8.5 10.5l7-3" />
  </svg>
);

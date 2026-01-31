import { classNames } from "~/utils";

export type IconArrowLeftProps = React.ComponentProps<"svg">;

export const IconArrowLeft = ({ className, ...props }: IconArrowLeftProps) => (
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
    <path d="M19 12H5M5 12l6-6M5 12l6 6" />
  </svg>
);

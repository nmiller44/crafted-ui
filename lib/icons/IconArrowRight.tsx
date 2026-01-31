import { classNames } from "~/utils";

export type IconArrowRightProps = React.ComponentProps<"svg">;

export const IconArrowRight = ({ className, ...props }: IconArrowRightProps) => (
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
    <path d="M5 12h14M19 12l-6-6M19 12l-6 6" />
  </svg>
);

import { classNames } from "~/utils";

export type IconPencilProps = React.ComponentProps<"svg">;

export const IconPencil = ({ className, ...props }: IconPencilProps) => (
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
    <path d="M17 3l4 4L7 21H3v-4L17 3z" />
  </svg>
);

import { classNames } from "~/utils";

export type IconMenuProps = React.ComponentProps<"svg">;

export const IconMenu = ({ className, ...props }: IconMenuProps) => (
  <svg
    className={classNames("size-5", className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

import type { ComponentProps, ReactElement } from "react";
import { classNames } from "~/utils";

export type IconSettingsProps = ComponentProps<"svg"> & {
  label?: string;
};

export const IconSettings = ({ label = "Settings", className, ...props }: IconSettingsProps): ReactElement => (
  <svg
    className={classNames("size-5", className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label={label}
    {...props}
  >
    <path d="m9 3-.5 2.5-2 1.2L4 6l-2 3.5 2 1.7v2.3l-2 1.7L4 18l2.5-.7 2 1.2L9 21h6l.5-2.5 2-1.2 2.5.7 2-2.8-2-1.7v-2.3l2-1.7L20 6l-2.5.7-2-1.2L15 3Z" />
    <circle cx={12} cy={12} r={3} />
  </svg>
);

IconSettings.label = "Settings";

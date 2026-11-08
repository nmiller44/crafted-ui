import { classNames } from "~/utils";

/**
 * Location/map pin icon.
 * 
 * @param props.label - Semantic label for accessibility contexts. Defaults to "Location".
 * @param props.size - Icon size variant.
 */
export type IconLocationProps = React.ComponentProps<"svg"> & {
  label?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const sizeMapper = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-8",
};

export const IconLocation = ({ 
  label = "Location",
  size = "md", 
  className,
  ...props 
}: IconLocationProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      fillRule="evenodd"
      className={classNames(sizeMapper[size], className)}
      {...props}
    >
      <path d="M12 2.5A7.5 7.5 0 0 0 4.5 10c0 4.74 5.34 10.62 7.5 12.5 2.16-1.88 7.5-7.76 7.5-12.5A7.5 7.5 0 0 0 12 2.5zm0 10.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
};

IconLocation.label = "Location";

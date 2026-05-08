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
      className={classNames(sizeMapper[size], className)}
      {...props}
    >
      <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 9 13 9 13s9-7.75 9-13c0-4.97-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
    </svg>
  );
};

IconLocation.label = "Location";

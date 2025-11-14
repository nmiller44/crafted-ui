import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

export type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & {
    title?: string;
    subtitle?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    children?: React.ReactNode;
    className?: string;
}

const sizeMapper = {
    "xs": "size-2",
    "sm": "size-3",
    "md": "size-4",
    "lg": "size-5",
    "xl": "size-6",
}

const checkSizeMapper = {
    "xs": "size-1",
    "sm": "size-2",
    "md": "size-3",
    "lg": "size-4",
    "xl": "size-5",
}

const checkAlignMapper = {
    "xs": "mt-1.5",
    "sm": "mt-1",
    "md": "mt-0.75",
    "lg": "",
    "xl": "-mt-0.25",
}

export const Checkbox = ({ 
    size = "md",
    title,
    subtitle,
    children, 
    className, 
    ...props 
}: CheckboxProps) => {
    return (
      <CheckboxPrimitive.Root
        className={classNames("flex gap-2 cursor-pointer group", className)}
        {...props}
      >
        <div className={classNames(
                "text-foreground",
                sizeMapper[size],
                checkAlignMapper[size], // align the check icon vertically instead of items-center
                "flex-shrink-0",
                "rounded-sm border-0 ring-1 ring-inset ring-border shadow-sm", 
                "flex items-center justify-center", 
                "group-data-[checked]:border-2 group-data-[checked]:border-primary", 
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2", 
                "transition-colors duration-200")}>
            <CheckboxPrimitive.Indicator className="flex data-[unchecked]:hidden">
                <CheckIcon className={classNames(checkSizeMapper[size], "text-primary")} />
            </CheckboxPrimitive.Indicator>
        </div>
        <div className="text-left text-sm select-none flex-col space-y-1">
            { !!title
                ? title
                : children
            }
            { !!subtitle && <p className="text-xs text-muted-foreground">{ subtitle }</p> }
        </div>
      </CheckboxPrimitive.Root>
    );
};

function CheckIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="currentcolor" width="10" height="10" viewBox="0 0 10 10" {...props}>
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}

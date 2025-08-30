
import { Avatar as AvatarPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils"

export type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> & {
    size?: "sm" | "md" | "lg" | "xl"
    fallback?: string;
    src?: string;
    height?: string;
    width?: string;
    imgClassName?: string;
    delay?: number;
}

export const Avatar = ({ 
        size = "md", 
        fallback,
        src,
        height,
        width,
        imgClassName,
        delay = 600, 
        className, 
        children, 
        ...props}: AvatarProps) => {

    const sizeClass = {
        sm: "size-10",
        md: "size-12",
        lg: "size-14 text-lg",
        xl: "size-16 text-xl font-semibold"
    }[size]

    return (
        <AvatarPrimitive.Root className={classNames(
                                sizeClass,
                                "inline-flex items-center justify-center overflow-hidden", 
                                "rounded-full align-middle", 
                                "bg-primary text-primary-foreground",
                                "select-none",
                                className
                            )} { ...props }>
            { !!src && 
                <AvatarPrimitive.Image
                    src={src}
                    width={width || 48}
                    height={height || 48}
                    className={classNames("size-full object-cover bg-border", imgClassName)}
                />
            }
            { children }
            { !!fallback &&
                <AvatarPrimitive.Fallback delay={ delay } className="flex size-full items-center justify-center">
                    { fallback }
                </AvatarPrimitive.Fallback>
            }
        </AvatarPrimitive.Root>
    )
}
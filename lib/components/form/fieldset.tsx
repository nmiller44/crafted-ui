import { Fieldset as FieldsetPrimitive } from "@base-ui-components/react"
import { classNames } from "../../utils.js"; 
import { Heading3 } from "../heading";

export const Fieldset = ({ 
    className,
    children 
}: { 
    className?: string;
    children?: React.ReactNode; 
}) => (
    <FieldsetPrimitive.Root className={ className }>
        { children }
    </FieldsetPrimitive.Root>
)

export const FieldsetLegend = ({ 
    title,
    subtitle,
    className,
    children 
}: { 
    title?: string;
    subtitle?: string;
    className?: string;
    children?: React.ReactNode; 
}) => (
    <FieldsetPrimitive.Legend className={ className }>
        { !!title 
            ?
            <div className="pb-3 border-b border-gray-200">
                <Heading3 title={title} subtitle={subtitle} />
            </div>
            :
            children
        }
    </FieldsetPrimitive.Legend>
)

export const FieldsetList = ({
    className,
    children 
}: { 
    className?: string;
    children?: React.ReactNode; 
}) => (
    <Fieldset className={ classNames("space-y-8", className) }>
        { children }
    </Fieldset>
)

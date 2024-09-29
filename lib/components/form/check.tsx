import { classNames } from "../../utils.js";

export type FormCheckProps = {
    id?: string;
    checked?: boolean;
    strike?: boolean
    readonly?: boolean;
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormCheck = (props: FormCheckProps) => {
    const id = props.id || "";
    const checked = props.checked || false;
    const strike = props.strike || false;
    const readonly = props.readonly || false;
    const children = props.children;
    const onChange = props.onChange;

    return (
        <div className="">
            <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                <input
                    id={id}
                    name={id}
                    type="checkbox"
                    onChange={onChange}
                    className={classNames(
                        "h-4 w-4",
                        "mt-1 block w-full py-2 px-3",
                        // "rounded-md border-0 ring-1 ring-inset ring-neutral-300 shadow-sm",
                        "rounded border-neutral-300",
                        "text-sm text-neutral-600 placeholder:text-neutral-400", 
                        // "focus:ring-2 focus:ring-inset focus:border-neutral-800 focus:outline-none focus:ring-neutral-800"
                        "focus:ring-neutral-600"
                    )}
                    { ...(checked && (readonly || !!onChange) ? {checked: checked} : {defaultChecked: checked}) }
                />
                </div>
                <div className={classNames("mt-[3px]",
                    checked && strike ? "line-through text-neutral-400 *:text-neutral-400 *:font-normal" : "")    
                }>
                    { children }
                </div>
            </div>
        </div>
    )
}
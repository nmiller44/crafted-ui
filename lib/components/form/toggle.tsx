import { Switch } from "@headlessui/react";

export type FormToggleProps = {
    id: string;
    name?: string;
    value?: string;
    checked?: boolean;
    submit?: boolean;
    onChange?: any;
}

export const FormToggle = (props: FormToggleProps) => {
    const id = props.id || "";
    const name = props.name || "";
    const value = props.value;
    const checked = props.checked || false;
    const type = props.submit ? "submit" : "button";
    const onChange = props.onChange;

    const switchColor = checked ? 'bg-indigo-600' : 'bg-gray-200';

    return (
        <Switch.Group>
            <div className="flex items-center p-2 pt-4">
                <Switch
                    id={id}
                    name={id}
                    checked={checked}
                    type={type}
                    { ...(value && {value: value})}
                    { ...(onChange && {onChange: onChange})}
                    className={`${
                        checked ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                    <span className="sr-only">Enable</span>
                    <span
                        className={`${
                            checked ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                </Switch>
                <Switch.Label className="ml-3">{ name }</Switch.Label>
            </div>
        </Switch.Group>
    )
}
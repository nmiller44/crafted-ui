import { Alert, type AlertProps } from "~/alert";

export type FormAlertValue =
    | string
    | {
        message: string;
        status?: AlertProps["status"];
        title?: string;
    };

/**
 * Displays form-level feedback when present.
 * Automatically rendered by Form component when errors._form is provided.
 * 
 * Supports both shorthand and explicit forms:
 * - string: treated as a danger alert with title "Error"
 * - object: supports custom status, title, and message
 * 
 * @component
 * @category Forms
 * @since 0.2.7
 * @related Form - Automatically renders FormAlert when errors._form exists
 */
export type FormAlertProps = {
    feedback?: FormAlertValue;
    className?: string;
}

export const FormAlert = ({ feedback, className }: FormAlertProps) => {
    if (!feedback) return null;

    const normalized = typeof feedback === "string"
        ? { message: feedback, status: "danger" as const, title: "Error" }
        : {
            message: feedback.message,
            status: feedback.status ?? "danger",
            title: feedback.title ?? (feedback.status === "warning" ? "Warning" : "Error"),
        };

    if (!normalized.message) return null;

    return (
        <Alert status={normalized.status} title={normalized.title} className={className}>
            {normalized.message}
        </Alert>
    );
};
export const classNames = (...classes: (string | ((state: any) => string) | undefined)[]) => {
    return classes.filter(Boolean).join(' ')
}

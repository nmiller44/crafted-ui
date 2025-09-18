export const craftedSelectItems = (list: any[], label: string, value: string | number) => {
    return list.map((item) => ({
        value: `${item[value]}`,
        label: item[label],
    }));
}
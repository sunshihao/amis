export type SelectOption = {
    value: string;
    text: string;
};
export declare class Select<ValueType extends string> {
    element: HTMLSelectElement;
    constructor(container: HTMLElement, options: Array<{
        value: ValueType;
        text: string;
    }>, defaultValue: ValueType, onChange: (value: string) => void);
    setValue(value: string): void;
    getValue(): ValueType;
}

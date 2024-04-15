/**
 * radio 的简单封装
 */
export declare class Radio<ValueType extends string> {
    element: HTMLDivElement;
    constructor(container: HTMLElement, options: Array<{
        value: ValueType;
        text: string;
    }>, defaultValue: ValueType, onChange?: (value: string) => void);
    getValue(): ValueType;
}

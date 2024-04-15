export type CheckBoxOption = {
    value: string;
    text: string;
    checked: boolean;
};
export declare class CheckBox {
    checkboxContainer: HTMLDivElement;
    checkbox: HTMLInputElement;
    option: CheckBoxOption;
    constructor(container: HTMLElement, option: CheckBoxOption, onChange: (checked: boolean, option: CheckBoxOption) => void);
    getText(): string;
    setChecked(checked: boolean): void;
    isChecked(): boolean;
    show(): void;
    hide(): void;
}

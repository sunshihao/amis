/**
 * 简单的 input 组件 封装
 */
export declare class Input {
    input: HTMLInputElement;
    constructor(args: {
        container: HTMLElement;
        placeholder?: string;
        value?: string;
        onChange: (value: string) => void;
        onEnter?: (value: string) => void;
        style?: 'normal' | 'borderLess';
        options?: string[];
    });
    getElement(): HTMLInputElement;
    getValue(): string;
    setValue(text: string): void;
    force(): void;
}

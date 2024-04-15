import { RendererProps } from 'amis';
import React from 'react';
import type { Schema } from 'amis';
interface ClassNameControlProps extends RendererProps {
    schema: Schema;
}
interface ClassNameControlState {
    isFocused: boolean;
    isOpened: boolean;
}
export declare class ClassNameControl extends React.Component<ClassNameControlProps, ClassNameControlState> {
    state: {
        isFocused: boolean;
        isOpened: boolean;
    };
    values: Array<string>;
    open(): void;
    close(): void;
    toggle(): void;
    handleFocus(e: any): void;
    handleBlur(e: any): void;
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    getParent(): Element | Text | null;
    getTarget(): HTMLElement;
    handlePopOverChange(option: any): void;
    renderGroup(option: any, index: number): React.JSX.Element;
    renderOptions(options: Array<any>, index: number): React.JSX.Element[];
    renderPopover(): React.JSX.Element;
    render(): React.JSX.Element;
}
export {};

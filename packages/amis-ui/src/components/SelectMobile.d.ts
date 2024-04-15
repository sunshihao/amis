import React from 'react';
import { Option, SelectProps } from './Select';
interface SelectState {
    isFocused: boolean;
    inputValue: string;
    itemHeight: number;
    selection: Array<Option>;
}
interface Props extends SelectProps {
    isOpen: boolean;
    highlightedIndex: any;
    selectedItem: any;
    visibleItemCount?: number;
    getInputProps: (...params: any) => any;
    getItemProps: (...params: any) => any;
    onClose: () => void;
}
export default class SelectMobile extends React.Component<Props, SelectState> {
    input: HTMLInputElement;
    target: HTMLElement;
    constructor(props: Props);
    handleChange([item]: any): void;
    handleInputChange(evt: React.ChangeEvent<HTMLInputElement>): void;
    getTarget(): HTMLElement;
    inputRef(ref: HTMLInputElement): void;
    toggleCheckAll(): void;
    handleAddClick(): void;
    handleEditClick(e: Event, item: any): void;
    handleDeleteClick(e: Event, item: any): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    focus(): void;
    blur(): void;
    clearSearchValue(): void;
    onConfirm(): void;
    render(): React.JSX.Element;
}
export {};

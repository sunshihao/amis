/**
 * @file ThemeSelect.tsx
 * @description 可选择、可联想的输入框
 */
import React from 'react';
import type { FormControlProps } from 'amis-core';
interface Option {
    label: any;
    value: string;
    realValue?: string;
    html?: any;
}
interface ThemeSelectProps {
    options?: Option[];
    value?: string;
    extraUnit?: Array<string>;
    onChange: (value: string | undefined) => void;
    disabled?: boolean;
    data?: any;
    state?: string;
    itemName?: string;
    menuTpl?: string;
    inheritValue?: string;
    placeholder?: string;
    editorThemePath?: any;
    isEditorTpl?: boolean;
}
declare function ThemeSelect(props: ThemeSelectProps): React.JSX.Element;
export default ThemeSelect;
export declare class ThemeSelectRenderer extends React.Component<FormControlProps> {
    render(): React.JSX.Element;
}

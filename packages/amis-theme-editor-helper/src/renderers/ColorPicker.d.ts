/**
 * @file 颜色选择器
 * @description 设置颜色
 */
import React from 'react';
import type { FormControlProps } from 'amis-core';
interface ColorPickerProps {
    imageType?: 'image-manager' | 'input-image';
    receiver?: string;
    labelMode?: 'default' | 'input';
    needGradient?: boolean;
    needImage?: boolean;
    needTheme?: boolean;
    needCustom?: boolean;
    value?: string;
    options?: any;
    data?: any;
    onChange?: any;
    itemName?: string;
    state?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    editorInheritValue?: string;
}
declare function ColorPicker(props: ColorPickerProps): React.JSX.Element;
export default ColorPicker;
export declare class ColorPickerRenderer extends React.Component<FormControlProps> {
    render(): React.JSX.Element;
}

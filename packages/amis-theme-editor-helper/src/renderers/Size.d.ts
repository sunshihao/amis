/**
 * @file Size.tsx
 * @description 设置尺寸
 */
import React from 'react';
import type { FormControlProps } from 'amis-core';
interface SizeEditorProps extends FormControlProps {
    hideWidth?: boolean;
    hideHeight?: boolean;
    hideMinWidth?: boolean;
}
declare function SizeEditor(props: SizeEditorProps): React.JSX.Element;
declare const _default: typeof SizeEditor;
export default _default;
export declare class SizeEditorRenderer extends React.Component<SizeEditorProps> {
    render(): React.JSX.Element;
}

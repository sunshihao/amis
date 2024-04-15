/**
 * @file Shadow.tsx
 * @description 设置阴影
 */
import React from 'react';
import type { FormControlProps } from 'amis-core';
interface ShadowEditorProps extends FormControlProps {
}
declare function ShadowEditor(props: ShadowEditorProps): React.JSX.Element;
declare const _default: typeof ShadowEditor;
export default _default;
export declare class ShadowEditorRenderer extends React.Component<ShadowEditorProps> {
    render(): React.JSX.Element;
}

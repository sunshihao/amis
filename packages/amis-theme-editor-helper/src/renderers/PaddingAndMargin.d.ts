/**
 * 主题内外边距
 */
import type { FormControlProps } from 'amis-core';
import React from 'react';
interface PaddingAndMarginProps extends FormControlProps {
    custom: boolean;
}
export default class PaddingAndMarginDialogRender extends React.Component<PaddingAndMarginProps> {
    render(): React.JSX.Element;
}
export {};

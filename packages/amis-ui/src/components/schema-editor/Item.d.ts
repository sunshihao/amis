import React from 'react';
import { LocaleProps, ThemeProps } from 'amis-core';
import { SchemaEditorItemCommonProps } from './Common';
export interface SchemaEditorItemProps extends SchemaEditorItemCommonProps, LocaleProps, ThemeProps {
}
export declare class SchemaEditorItem extends React.Component<SchemaEditorItemProps> {
    render(): React.JSX.Element;
}

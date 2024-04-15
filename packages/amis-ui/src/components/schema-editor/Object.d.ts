import React from 'react';
import { JSONSchema } from 'amis-core';
import { SchemaEditorItemCommon } from './Common';
import type { SchemaEditorItemCommonProps } from './Common';
import { UseFormReturn } from 'react-hook-form';
export interface SchemaEditorItemObjectState {
    members: Array<{
        id: string;
        key: string;
        hasError?: boolean;
        required?: boolean;
        schema: JSONSchema;
    }>;
    collapsed: boolean;
}
export declare class SchemaEditorItemObject extends SchemaEditorItemCommon<SchemaEditorItemCommonProps, SchemaEditorItemObjectState> {
    state: {
        members: {
            id: string;
            key: string;
            hasError?: boolean | undefined;
            required?: boolean | undefined;
            schema: JSONSchema;
        }[];
        collapsed: boolean;
    };
    lastValue: any;
    componentDidUpdate(prevProps: SchemaEditorItemCommonProps): void;
    propsToMembers(props: SchemaEditorItemCommonProps): {
        id: string;
        key: string;
        hasError?: boolean | undefined;
        required?: boolean | undefined;
        schema: JSONSchema;
    }[];
    pipeOut(): void;
    handleAdd(): void;
    handleAddProppertyConfirm({ key, isRequired: required, ...value }: any): void;
    handleEditProppertyConfirm(index: number, value: any): void;
    handlePropKeyChange(index: number, key: string): void;
    handlePropTitleChange(index: number, title: string): void;
    handlePropRemove(index: number): void;
    handlePropChange(index: number, { key, isRequired: required, ...item }: any): void;
    handlePropRequiredChange(index: number, required: boolean): void;
    toggleCollapsed(): void;
    renderFormPrefix(methods: UseFormReturn & {
        onSubmit: (value: any) => void;
    }): React.JSX.Element;
    rendererProps(): React.JSX.Element;
    render(): React.JSX.Element;
}

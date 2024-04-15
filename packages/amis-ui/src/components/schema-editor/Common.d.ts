import React from 'react';
import { LocaleProps, ThemeProps, JSONSchema } from 'amis-core';
import { UseFormReturn } from 'react-hook-form';
export declare const schemaEditorItemPlaceholder: {
    key: string;
    title: string;
    description: string;
    default: string;
    empty: string;
};
export type SchemaEditorItemPlaceholder = Partial<typeof schemaEditorItemPlaceholder>;
export interface SchemaEditorItemCommonProps extends LocaleProps, ThemeProps {
    label?: string;
    value?: JSONSchema;
    onChange: (value: JSONSchema) => void;
    types: Array<{
        label: string;
        value: string;
        [propName: string]: any;
    }>;
    onTypeChange?: (type: string, value: JSONSchema, origin?: JSONSchema) => JSONSchema | void;
    disabled?: boolean;
    required?: boolean;
    onRequiredChange?: (value: boolean) => void;
    typeMutable?: boolean;
    showInfo?: boolean;
    addButtonText?: string;
    renderExtraProps?: (value: JSONSchema, onChange: (value: JSONSchema) => void) => JSX.Element;
    renderModalProps?: (value: JSONSchema, onChange: (value: JSONSchema) => void) => JSX.Element;
    prefix?: JSX.Element;
    affix?: JSX.Element;
    enableAdvancedSetting?: boolean;
    /** 各属性输入控件的placeholder */
    placeholder?: SchemaEditorItemPlaceholder;
    popOverContainer?: any;
    mobileUI?: boolean;
    mini?: boolean;
    formMode?: boolean;
    formRef?: any;
    onFormConfirm?: (value: any) => void | Promise<any>;
    expandMembers?: boolean;
    formPrefixRender?: (methods: UseFormReturn & {
        onSubmit: (value: any) => void;
    }) => JSX.Element | null;
    formAffixRender?: (methods: UseFormReturn & {
        onSubmit: (value: any) => void;
    }) => JSX.Element | null;
}
export declare class SchemaEditorItemCommon<P extends SchemaEditorItemCommonProps = SchemaEditorItemCommonProps, S = any> extends React.Component<P, S> {
    handleTypeChange(type: any): void;
    handlePropsChange(newValue: JSONSchema): Promise<void>;
    handleBeforeSubmit(form: any): any;
    renderCommon(): React.JSX.Element;
    handleFormChange(values: any): void;
    renderForm(props?: Partial<SchemaEditorItemCommonProps>): React.JSX.Element;
    render(): React.JSX.Element;
}

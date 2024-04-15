/**
 * @file Checkbox
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { TestIdBuilder, ThemeProps } from 'amis-core';
interface CheckboxProps extends ThemeProps {
    type: 'checkbox' | 'radio';
    size?: 'sm' | 'lg' | 'small' | 'large';
    label?: string;
    labelClassName?: string;
    className?: string;
    onChange?: (value: any, shift?: boolean) => void;
    value?: boolean | string | number;
    inline?: boolean;
    trueValue?: boolean | string | number;
    falseValue?: boolean | string | number;
    disabled?: boolean;
    readOnly?: boolean;
    checked?: boolean;
    name?: string;
    description?: string;
    partial?: boolean;
    optionType?: 'default' | 'button';
    children?: React.ReactNode | Array<React.ReactNode>;
    testIdBuilder?: TestIdBuilder;
}
export declare class Checkbox extends React.Component<CheckboxProps, any> {
    static defaultProps: Pick<CheckboxProps, 'trueValue' | 'falseValue' | 'type'>;
    handleCheck(e: React.ChangeEvent<any>): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<CheckboxProps, keyof ThemeProps>, "label" | "description" | "disabled" | "name" | "labelClassName" | "value" | "onChange" | "children" | "testIdBuilder" | "size" | "readOnly" | "inline" | "checked" | "partial" | "optionType"> & {
        type?: "checkbox" | "radio" | undefined;
        trueValue?: string | number | boolean | undefined;
        falseValue?: string | number | boolean | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CheckboxProps, keyof ThemeProps>, "label" | "description" | "disabled" | "name" | "labelClassName" | "value" | "onChange" | "children" | "testIdBuilder" | "size" | "readOnly" | "inline" | "checked" | "partial" | "optionType"> & {
            type?: "checkbox" | "radio" | undefined;
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<CheckboxProps, keyof ThemeProps>, "label" | "description" | "disabled" | "name" | "labelClassName" | "value" | "onChange" | "children" | "testIdBuilder" | "size" | "readOnly" | "inline" | "checked" | "partial" | "optionType"> & {
            type?: "checkbox" | "radio" | undefined;
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CheckboxProps, keyof ThemeProps>, "label" | "description" | "disabled" | "name" | "labelClassName" | "value" | "onChange" | "children" | "testIdBuilder" | "size" | "readOnly" | "inline" | "checked" | "partial" | "optionType"> & {
            type?: "checkbox" | "radio" | undefined;
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CheckboxProps, keyof ThemeProps>, "label" | "description" | "disabled" | "name" | "labelClassName" | "value" | "onChange" | "children" | "testIdBuilder" | "size" | "readOnly" | "inline" | "checked" | "partial" | "optionType"> & {
            type?: "checkbox" | "radio" | undefined;
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<CheckboxProps, keyof ThemeProps>, "label" | "description" | "disabled" | "name" | "labelClassName" | "value" | "onChange" | "children" | "testIdBuilder" | "size" | "readOnly" | "inline" | "checked" | "partial" | "optionType"> & {
            type?: "checkbox" | "radio" | undefined;
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CheckboxProps, keyof ThemeProps>, "label" | "description" | "disabled" | "name" | "labelClassName" | "value" | "onChange" | "children" | "testIdBuilder" | "size" | "readOnly" | "inline" | "checked" | "partial" | "optionType"> & {
            type?: "checkbox" | "radio" | undefined;
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CheckboxProps, keyof ThemeProps>, "label" | "description" | "disabled" | "name" | "labelClassName" | "value" | "onChange" | "children" | "testIdBuilder" | "size" | "readOnly" | "inline" | "checked" | "partial" | "optionType"> & {
            type?: "checkbox" | "radio" | undefined;
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<CheckboxProps, keyof ThemeProps>, "label" | "description" | "disabled" | "name" | "labelClassName" | "value" | "onChange" | "children" | "testIdBuilder" | "size" | "readOnly" | "inline" | "checked" | "partial" | "optionType"> & {
            type?: "checkbox" | "radio" | undefined;
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CheckboxProps, keyof ThemeProps>, "label" | "description" | "disabled" | "name" | "labelClassName" | "value" | "onChange" | "children" | "testIdBuilder" | "size" | "readOnly" | "inline" | "checked" | "partial" | "optionType"> & {
            type?: "checkbox" | "radio" | undefined;
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Checkbox>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Checkbox, {}> & {
    ComposedComponent: typeof Checkbox;
};
export default _default;

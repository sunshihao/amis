/**
 * @file Switch
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn, TestIdBuilder } from 'amis-core';
interface SwitchProps {
    id?: string;
    size?: 'sm' | 'md' | 'lg' | 'middle' | 'large';
    level?: 'info' | 'primary' | 'danger';
    className?: string;
    classPrefix: string;
    classnames: ClassNamesFn;
    onChange?: (checked: boolean | string | number) => void;
    value?: boolean | string | number;
    inline?: boolean;
    trueValue?: boolean | string | number;
    falseValue?: boolean | string | number;
    disabled?: boolean;
    readOnly?: boolean;
    onText?: React.ReactNode;
    offText?: React.ReactNode;
    checked?: boolean;
    loading?: boolean;
    loadingConfig?: {
        root?: string;
        show?: boolean;
    };
    testIdBuilder?: TestIdBuilder;
}
export declare class Switch extends React.PureComponent<SwitchProps, any> {
    static defaultProps: {
        trueValue: boolean;
        falseValue: boolean;
    };
    constructor(props: SwitchProps);
    hanldeCheck(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<SwitchProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "value" | "onChange" | "testIdBuilder" | "loadingConfig" | "size" | "loading" | "readOnly" | "inline" | "checked" | "level" | "onText" | "offText"> & {
        trueValue?: string | number | boolean | undefined;
        falseValue?: string | number | boolean | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SwitchProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "value" | "onChange" | "testIdBuilder" | "loadingConfig" | "size" | "loading" | "readOnly" | "inline" | "checked" | "level" | "onText" | "offText"> & {
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<SwitchProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "value" | "onChange" | "testIdBuilder" | "loadingConfig" | "size" | "loading" | "readOnly" | "inline" | "checked" | "level" | "onText" | "offText"> & {
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SwitchProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "value" | "onChange" | "testIdBuilder" | "loadingConfig" | "size" | "loading" | "readOnly" | "inline" | "checked" | "level" | "onText" | "offText"> & {
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SwitchProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "value" | "onChange" | "testIdBuilder" | "loadingConfig" | "size" | "loading" | "readOnly" | "inline" | "checked" | "level" | "onText" | "offText"> & {
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<SwitchProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "value" | "onChange" | "testIdBuilder" | "loadingConfig" | "size" | "loading" | "readOnly" | "inline" | "checked" | "level" | "onText" | "offText"> & {
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SwitchProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "value" | "onChange" | "testIdBuilder" | "loadingConfig" | "size" | "loading" | "readOnly" | "inline" | "checked" | "level" | "onText" | "offText"> & {
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SwitchProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "value" | "onChange" | "testIdBuilder" | "loadingConfig" | "size" | "loading" | "readOnly" | "inline" | "checked" | "level" | "onText" | "offText"> & {
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<SwitchProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "value" | "onChange" | "testIdBuilder" | "loadingConfig" | "size" | "loading" | "readOnly" | "inline" | "checked" | "level" | "onText" | "offText"> & {
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SwitchProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "value" | "onChange" | "testIdBuilder" | "loadingConfig" | "size" | "loading" | "readOnly" | "inline" | "checked" | "level" | "onText" | "offText"> & {
            trueValue?: string | number | boolean | undefined;
            falseValue?: string | number | boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Switch>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Switch, {}> & {
    ComposedComponent: typeof Switch;
};
export default _default;

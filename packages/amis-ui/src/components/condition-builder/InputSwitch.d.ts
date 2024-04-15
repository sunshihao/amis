/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
export interface InputSwitchProps extends ThemeProps {
    options: Array<any>;
    disabled?: boolean;
    popOverContainer?: any;
    value: any;
    onChange: (value: any) => void;
}
export declare function InputSwitch({ options, value, onChange, classnames: cx, disabled, popOverContainer }: InputSwitchProps): React.JSX.Element;
declare const _default: {
    new (props: Omit<InputSwitchProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<InputSwitchProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<InputSwitchProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<InputSwitchProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<InputSwitchProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<InputSwitchProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<InputSwitchProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<InputSwitchProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<InputSwitchProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<InputSwitchProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof InputSwitch>;
} & import("hoist-non-react-statics").NonReactStatics<typeof InputSwitch, {}> & {
    ComposedComponent: typeof InputSwitch;
};
export default _default;

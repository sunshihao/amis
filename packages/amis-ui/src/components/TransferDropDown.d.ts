/// <reference types="hoist-non-react-statics" />
import { Transfer, TransferProps } from './Transfer';
import React from 'react';
import { OverlayAlignType, PopOverOverlay } from './PopOverContainer';
import type { TooltipObject } from './TooltipWrapper';
export interface TransferDropDownProps extends TransferProps {
    multiple?: boolean;
    borderMode?: 'full' | 'half' | 'none';
    popOverContainer?: any;
    itemRender: (value: any) => JSX.Element | string;
    maxTagCount?: number;
    overflowTagPopover?: TooltipObject;
    overlayAlign?: OverlayAlignType;
    overlayWidth?: string;
    overlay?: PopOverOverlay;
}
export declare class TransferDropDown extends Transfer<TransferDropDownProps> {
    constructor(props: TransferDropDownProps);
    componentDidUpdate(prevProps: TransferDropDownProps): void;
    handleAfterPopoverHide(): void;
    handleChange(value: any, onClose: () => void): void;
    onConfirm(): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Omit<any, keyof import("amis-core").LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    } & import("amis-core").ThemeProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Omit<any, keyof import("amis-core").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & import("amis-core").ThemeProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Omit<any, keyof import("amis-core").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & import("amis-core").ThemeProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Omit<any, keyof import("amis-core").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & import("amis-core").ThemeProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Omit<any, keyof import("amis-core").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & import("amis-core").ThemeProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Omit<any, keyof import("amis-core").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & import("amis-core").ThemeProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<any, keyof import("amis-core").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & import("amis-core").ThemeProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<any, keyof import("amis-core").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & import("amis-core").ThemeProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Omit<any, keyof import("amis-core").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & import("amis-core").ThemeProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Omit<any, keyof import("amis-core").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & import("amis-core").ThemeProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<React.ComponentType<Omit<any, keyof import("amis-core").LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    } & import("amis-core").ThemeProps> & {
        themeKey?: string | undefined;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<React.ComponentType<Omit<any, keyof import("amis-core").LocaleProps> & {
    locale?: string | undefined;
    translate?: ((str: string, ...args: any[]) => string) | undefined;
} & import("amis-core").ThemeProps> & {
    themeKey?: string | undefined;
}, {}> & {
    ComposedComponent: React.ComponentType<Omit<any, keyof import("amis-core").LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    } & import("amis-core").ThemeProps> & {
        themeKey?: string | undefined;
    };
};
export default _default;

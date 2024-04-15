/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { LocaleProps, ThemeProps } from 'amis-core';
export interface ConfirmBoxProps extends LocaleProps, ThemeProps {
    show?: boolean;
    disabled?: boolean;
    closeOnEsc?: boolean;
    beforeConfirm?: (bodyRef?: any) => any;
    onConfirm?: (data: any) => void;
    onCancel?: () => void;
    title?: string;
    showTitle?: boolean;
    showFooter?: boolean;
    children?: JSX.Element | ((methods: {
        loading?: boolean;
        bodyRef: React.MutableRefObject<{
            submit: () => Promise<Record<string, any>>;
        } | undefined>;
        popOverContainer: () => HTMLElement | null | undefined;
        onConfirm: () => void;
    }) => JSX.Element);
    popOverContainer?: any;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    position?: 'top' | 'right' | 'bottom' | 'left';
    resizable?: boolean;
    type: 'dialog' | 'drawer';
    className?: string;
    headerClassName?: string;
    bodyClassName?: string;
    footerClassName?: string;
}
export declare function ConfirmBox({ type, size, closeOnEsc, show, onCancel, title, showTitle, headerClassName, translate: __, children, showFooter, onConfirm, beforeConfirm, popOverContainer, position, resizable, classnames: cx, className, bodyClassName, footerClassName, mobileUI, disabled }: ConfirmBoxProps): React.JSX.Element;
export declare namespace ConfirmBox {
    var defaultProps: {
        type: "dialog";
        position: "right";
    };
}
declare const _default: {
    new (props: Omit<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
        type?: "dialog" | "drawer" | undefined;
        position?: "right" | "left" | "top" | "bottom" | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ConfirmBox>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ConfirmBox, {}> & {
        ComposedComponent: typeof ConfirmBox;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
        type?: "dialog" | "drawer" | undefined;
        position?: "right" | "left" | "top" | "bottom" | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof ConfirmBox>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ConfirmBox, {}> & {
    ComposedComponent: typeof ConfirmBox;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
            type?: "dialog" | "drawer" | undefined;
            position?: "right" | "left" | "top" | "bottom" | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ConfirmBoxProps, keyof ThemeProps>, "disabled" | "children" | "headerClassName" | "footerClassName" | "showFooter" | "title" | "size" | "resizable" | "popOverContainer" | "bodyClassName" | "show" | "locale" | "translate" | "onConfirm" | "closeOnEsc" | "beforeConfirm" | "onCancel" | "showTitle"> & {
                type?: "dialog" | "drawer" | undefined;
                position?: "right" | "left" | "top" | "bottom" | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ConfirmBox>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ConfirmBox, {}> & {
        ComposedComponent: typeof ConfirmBox;
    };
};
export default _default;

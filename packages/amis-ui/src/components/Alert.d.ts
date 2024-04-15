/**
 * @file Alert
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
import type { PlainObject } from 'amis-core';
export interface AlertProps extends ThemeProps, LocaleProps {
    container?: any;
    confirmText?: string;
    cancelText?: string;
    title?: string;
    confirmBtnLevel?: string;
    alertBtnLevel?: string;
    isolate?: boolean;
    children?: React.ReactElement;
    closeOnEsc?: boolean;
    size?: '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    cancelBtnLevel?: string;
}
interface ConfirmOptions {
    className?: string;
    closeOnEsc?: AlertProps['closeOnEsc'];
    size?: AlertProps['size'];
    confirmBtnLevel?: AlertProps['confirmBtnLevel'];
    cancelBtnLevel?: AlertProps['cancelBtnLevel'];
    confirmText?: AlertProps['confirmText'];
    cancelText?: AlertProps['cancelText'];
}
export interface AlertState {
    show: boolean;
    title?: string;
    content: string | React.ReactNode;
    confirm: boolean;
    prompt?: boolean;
    controls?: any;
    value?: any;
    confirmText?: string;
    cancelText?: string;
    closeOnEsc?: AlertProps['closeOnEsc'];
    size?: AlertProps['size'];
    confirmBtnLevel?: AlertProps['confirmBtnLevel'];
    cancelBtnLevel?: AlertProps['cancelBtnLevel'];
    className?: string;
}
export declare class Alert extends React.Component<AlertProps, AlertState> {
    static instance: any;
    static getInstance(): Promise<any>;
    _resolve: (value: any) => void;
    _modal: any;
    _body: any;
    state: AlertState;
    originInstance: Alert | null;
    unmount: boolean;
    constructor(props: AlertProps);
    static defaultProps: {
        confirmText: string;
        cancelText: string;
        title: string;
        alertBtnLevel: string;
        confirmBtnLevel: string;
        cancelBtnLevel: string;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: AlertProps, prevState: AlertState): void;
    componentWillUnmount(): void;
    schemaSope: any;
    scopeRef(schemaSope: any): void;
    handleConfirm(): void;
    handleCancel(): void;
    close(confirmed: boolean): void;
    alert(content: string, title?: string, className?: string): void;
    confirm(content: string | React.ReactNode, title?: string, optionsOrCofnrimText?: string | ConfirmOptions, cancelText?: string): Promise<unknown>;
    prompt(controls: any, defaultValue?: any, title?: string, confirmText?: string): Promise<unknown>;
    modalRef(ref: any): void;
    handleFormSubmit(values: any): void;
    render(): React.JSX.Element;
}
export type renderSchemaFn = (controls: Array<any>, value: PlainObject, callback?: (values: PlainObject) => void, scopeRef?: (value: any) => void, theme?: string) => JSX.Element;
export declare function setRenderSchemaFn(fn: renderSchemaFn): void;
export declare const alert: (content: string, title?: string, className?: string) => Promise<void>;
export declare const confirm: (content: string | React.ReactNode, title?: string, optionsOrCofnrimText?: string | ConfirmOptions, cancelText?: string) => Promise<any>;
export declare const prompt: (controls: any, defaultvalue?: any, title?: string, confirmText?: string) => Promise<any>;
export declare const FinnalAlert: {
    new (props: Omit<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
        title?: string | undefined;
        confirmText?: string | undefined;
        cancelText?: string | undefined;
        confirmBtnLevel?: string | undefined;
        cancelBtnLevel?: string | undefined;
        alertBtnLevel?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Alert>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Alert, {}> & {
        ComposedComponent: typeof Alert;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
        title?: string | undefined;
        confirmText?: string | undefined;
        cancelText?: string | undefined;
        confirmBtnLevel?: string | undefined;
        cancelBtnLevel?: string | undefined;
        alertBtnLevel?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Alert>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Alert, {}> & {
    ComposedComponent: typeof Alert;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
            title?: string | undefined;
            confirmText?: string | undefined;
            cancelText?: string | undefined;
            confirmBtnLevel?: string | undefined;
            cancelBtnLevel?: string | undefined;
            alertBtnLevel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "size" | "container" | "isolate" | "mobileUI" | "classnames" | "classPrefix" | "closeOnEsc"> & {
                title?: string | undefined;
                confirmText?: string | undefined;
                cancelText?: string | undefined;
                confirmBtnLevel?: string | undefined;
                cancelBtnLevel?: string | undefined;
                alertBtnLevel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Alert>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Alert, {}> & {
        ComposedComponent: typeof Alert;
    };
};
export default FinnalAlert;

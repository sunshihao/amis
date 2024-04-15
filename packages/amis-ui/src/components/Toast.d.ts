/**
 * @file Toast
 * @description toast提示组件, 单例模式，App级别只需要一个ToastComponent，引入了多个会兼容，也只有第一个生效
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn, ThemeProps } from 'amis-core';
import { LocaleProps, TranslateFn } from 'amis-core';
interface Config {
    closeButton?: boolean;
    timeout?: number;
}
export type ToastLevel = 'info' | 'success' | 'error' | 'warning';
/** Toast配置 */
export type ToastConf = Partial<Pick<ToastComponentProps, 'position' | 'closeButton' | 'showIcon' | 'timeout' | 'errorTimeout' | 'className' | 'items' | 'mobileUI'>>;
interface ToastComponentProps extends ThemeProps, LocaleProps {
    position: 'top-right' | 'top-center' | 'top-left' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'center';
    closeButton: boolean;
    showIcon?: boolean;
    timeout: number;
    errorTimeout: number;
    className?: string;
    items?: Array<Item>;
}
interface Item extends Config {
    title?: string | React.ReactNode;
    body: string | React.ReactNode;
    level: ToastLevel;
    id: string;
    className?: string;
    onDissmiss?: () => void;
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'center';
    showIcon?: boolean;
    mobileUI?: boolean;
}
interface ToastComponentState {
    items: Array<Item>;
    mobileUI?: boolean;
}
export declare class ToastComponent extends React.Component<ToastComponentProps, ToastComponentState> {
    static defaultProps: Pick<ToastComponentProps, 'position' | 'closeButton' | 'timeout' | 'errorTimeout' | 'items'>;
    static themeKey: string;
    hasRendered: boolean;
    state: ToastComponentState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    notifiy(level: string, content: any, config?: any): void;
    success(content: string, config?: any): void;
    error(content: string, config?: any): void;
    info(content: string, config?: any): void;
    warning(content: string, config?: any): void;
    handleDismissed(index: number): void;
    render(): React.JSX.Element[] | null;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
        items?: Item[] | undefined;
        position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
        timeout?: number | undefined;
        closeButton?: boolean | undefined;
        errorTimeout?: number | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ToastComponent>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ToastComponent, {}> & {
        ComposedComponent: typeof ToastComponent;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
        items?: Item[] | undefined;
        position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
        timeout?: number | undefined;
        closeButton?: boolean | undefined;
        errorTimeout?: number | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof ToastComponent>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ToastComponent, {}> & {
    ComposedComponent: typeof ToastComponent;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
            items?: Item[] | undefined;
            position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
            timeout?: number | undefined;
            closeButton?: boolean | undefined;
            errorTimeout?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ToastComponentProps, keyof LocaleProps>, "style" | "className" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "showIcon"> & {
                items?: Item[] | undefined;
                position?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | undefined;
                timeout?: number | undefined;
                closeButton?: boolean | undefined;
                errorTimeout?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ToastComponent>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ToastComponent, {}> & {
        ComposedComponent: typeof ToastComponent;
    };
};
export default _default;
interface ToastMessageProps {
    title?: string | React.ReactNode;
    body: string | React.ReactNode;
    level: ToastLevel;
    timeout: number;
    closeButton?: boolean;
    showIcon?: boolean;
    position: 'top-right' | 'top-center' | 'top-left' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'center';
    onDismiss?: () => void;
    classnames: ClassNamesFn;
    translate: TranslateFn;
    allowHtml: boolean;
    className?: string;
    mobileUI?: boolean;
}
interface ToastMessageState {
    visible: boolean;
}
export declare class ToastMessage extends React.Component<ToastMessageProps, ToastMessageState> {
    static defaultProps: {
        timeout: number;
        classPrefix: string;
        position: string;
        allowHtml: boolean;
        level: string;
    };
    state: {
        visible: boolean;
    };
    timer: ReturnType<typeof setTimeout>;
    mounted: boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    handleEntered(): void;
    close(): void;
    render(): React.JSX.Element;
}
export declare const toast: {
    container: any;
    success: (content: string, conf?: any) => void;
    error: (content: string, conf?: any) => void;
    info: (content: string, conf?: any) => void;
    warning: (content: string, conf?: any) => void;
};

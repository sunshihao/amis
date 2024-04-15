/**
 * @file PopUp
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
export interface PopUpPorps extends ThemeProps, LocaleProps {
    title?: string;
    className?: string;
    style?: {
        [styleName: string]: string;
    };
    overlay?: boolean;
    onHide?: () => void;
    isShow?: boolean;
    container?: any;
    showConfirm?: boolean;
    onConfirm?: (value: any) => void;
    showClose?: boolean;
    placement?: 'left' | 'center' | 'right';
    header?: JSX.Element;
    children?: React.ReactNode | Array<React.ReactNode>;
}
export declare class PopUp extends React.PureComponent<PopUpPorps> {
    scrollTop: number;
    static defaultProps: {
        className: string;
        overlay: boolean;
        isShow: boolean;
        container: HTMLElement;
        showClose: boolean;
        onConfirm: () => void;
    };
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    handleClick(e: React.MouseEvent): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
        className?: string | undefined;
        container?: any;
        overlay?: boolean | undefined;
        onConfirm?: ((value: any) => void) | undefined;
        isShow?: boolean | undefined;
        showClose?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof PopUp>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof PopUp, {}> & {
        ComposedComponent: typeof PopUp;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
        className?: string | undefined;
        container?: any;
        overlay?: boolean | undefined;
        onConfirm?: ((value: any) => void) | undefined;
        isShow?: boolean | undefined;
        showClose?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof PopUp>;
} & import("hoist-non-react-statics").NonReactStatics<typeof PopUp, {}> & {
    ComposedComponent: typeof PopUp;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
            className?: string | undefined;
            container?: any;
            overlay?: boolean | undefined;
            onConfirm?: ((value: any) => void) | undefined;
            isShow?: boolean | undefined;
            showClose?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "style" | "theme" | "children" | "title" | "header" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "onHide" | "showConfirm"> & {
                className?: string | undefined;
                container?: any;
                overlay?: boolean | undefined;
                onConfirm?: ((value: any) => void) | undefined;
                isShow?: boolean | undefined;
                showClose?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof PopUp>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof PopUp, {}> & {
        ComposedComponent: typeof PopUp;
    };
};
export default _default;

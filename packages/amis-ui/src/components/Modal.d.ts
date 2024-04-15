/**
 * @file Modal
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
import { type DraggableBounds, type DraggableData, type DraggableEvent } from 'react-draggable';
export declare const getContainerWithFullscreen: (container?: () => HTMLElement | HTMLElement | null) => () => HTMLElement | null;
export interface ModalProps extends ThemeProps, LocaleProps {
    className?: string;
    contentClassName?: string;
    size?: any;
    width?: any;
    height?: any;
    overlay?: boolean;
    onHide: (e: any) => void;
    closeOnEsc?: boolean;
    closeOnOutside?: boolean;
    container?: any;
    show?: boolean;
    disabled?: boolean;
    onExited?: () => void;
    onEntered?: () => void;
    children?: React.ReactNode | Array<React.ReactNode>;
    modalClassName?: string;
    modalMaskClassName?: string;
    draggable?: boolean;
}
export interface ModalState {
    bounds?: DraggableBounds;
    dragPos?: {
        x: number;
        y: number;
    };
}
export declare class Modal extends React.Component<ModalProps, ModalState> {
    static defaultProps: {
        container: HTMLElement;
        size: string;
        overlay: boolean;
        draggable: boolean;
    };
    isRootClosed: boolean;
    modalDom: HTMLElement;
    static Header: {
        new (props: Omit<Omit<ThemeProps & LocaleProps & {
            className?: string | undefined;
            showCloseButton?: boolean | undefined;
            onClose?: (() => void) | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Omit<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Omit<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<{
            new (props: Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }): {
                ref: any;
                childRef(ref: any): void;
                getWrappedInstance(): any;
                render(): React.JSX.Element;
                context: unknown;
                setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>;
                state: Readonly<{}>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, nextState: Readonly<{}>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, prevState: Readonly<{}>): any;
                componentDidUpdate?(prevProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, prevState: Readonly<{}>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, nextState: Readonly<{}>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, nextState: Readonly<{}>, nextContext: any): void;
            };
            displayName: string;
            contextType: React.Context<string>;
            ComposedComponent: React.ComponentType<({ classnames: cx, className, showCloseButton, onClose, children, classPrefix, translate: __, forwardedRef, ...rest }: ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element>;
        } & import("hoist-non-react-statics").NonReactStatics<({ classnames: cx, className, showCloseButton, onClose, children, classPrefix, translate: __, forwardedRef, ...rest }: ThemeProps & LocaleProps & {
            className?: string | undefined;
            showCloseButton?: boolean | undefined;
            onClose?: (() => void) | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element, {}> & {
            ComposedComponent: ({ classnames: cx, className, showCloseButton, onClose, children, classPrefix, translate: __, forwardedRef, ...rest }: ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
        }>;
    } & import("hoist-non-react-statics").NonReactStatics<{
        new (props: Omit<ThemeProps & LocaleProps & {
            className?: string | undefined;
            showCloseButton?: boolean | undefined;
            onClose?: (() => void) | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<({ classnames: cx, className, showCloseButton, onClose, children, classPrefix, translate: __, forwardedRef, ...rest }: ThemeProps & LocaleProps & {
            className?: string | undefined;
            showCloseButton?: boolean | undefined;
            onClose?: (() => void) | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element>;
    } & import("hoist-non-react-statics").NonReactStatics<({ classnames: cx, className, showCloseButton, onClose, children, classPrefix, translate: __, forwardedRef, ...rest }: ThemeProps & LocaleProps & {
        className?: string | undefined;
        showCloseButton?: boolean | undefined;
        onClose?: (() => void) | undefined;
        children?: React.ReactNode;
        forwardedRef?: any;
    } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element, {}> & {
        ComposedComponent: ({ classnames: cx, className, showCloseButton, onClose, children, classPrefix, translate: __, forwardedRef, ...rest }: ThemeProps & LocaleProps & {
            className?: string | undefined;
            showCloseButton?: boolean | undefined;
            onClose?: (() => void) | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
    }, {}> & {
        ComposedComponent: {
            new (props: Omit<ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }): {
                ref: any;
                childRef(ref: any): void;
                getWrappedInstance(): any;
                render(): React.JSX.Element;
                context: unknown;
                setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>;
                state: Readonly<{}>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, nextState: Readonly<{}>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, prevState: Readonly<{}>): any;
                componentDidUpdate?(prevProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, prevState: Readonly<{}>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, nextState: Readonly<{}>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & LocaleProps & {
                    className?: string | undefined;
                    showCloseButton?: boolean | undefined;
                    onClose?: (() => void) | undefined;
                    children?: React.ReactNode;
                    forwardedRef?: any;
                } & React.HTMLAttributes<HTMLDivElement>, keyof LocaleProps> & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }>, nextState: Readonly<{}>, nextContext: any): void;
            };
            displayName: string;
            contextType: React.Context<string>;
            ComposedComponent: React.ComponentType<({ classnames: cx, className, showCloseButton, onClose, children, classPrefix, translate: __, forwardedRef, ...rest }: ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element>;
        } & import("hoist-non-react-statics").NonReactStatics<({ classnames: cx, className, showCloseButton, onClose, children, classPrefix, translate: __, forwardedRef, ...rest }: ThemeProps & LocaleProps & {
            className?: string | undefined;
            showCloseButton?: boolean | undefined;
            onClose?: (() => void) | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element, {}> & {
            ComposedComponent: ({ classnames: cx, className, showCloseButton, onClose, children, classPrefix, translate: __, forwardedRef, ...rest }: ThemeProps & LocaleProps & {
                className?: string | undefined;
                showCloseButton?: boolean | undefined;
                onClose?: (() => void) | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
        };
    };
    static Title: {
        new (props: Omit<ThemeProps & {
            className?: string | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<({ classnames: cx, className, children, classPrefix, forwardedRef, ...rest }: ThemeProps & {
            className?: string | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element>;
    } & import("hoist-non-react-statics").NonReactStatics<({ classnames: cx, className, children, classPrefix, forwardedRef, ...rest }: ThemeProps & {
        className?: string | undefined;
        children?: React.ReactNode;
        forwardedRef?: any;
    } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element, {}> & {
        ComposedComponent: ({ classnames: cx, className, children, classPrefix, forwardedRef, ...rest }: ThemeProps & {
            className?: string | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
    };
    static Body: {
        new (props: Omit<ThemeProps & {
            className?: string | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<({ classnames: cx, className, children, classPrefix, forwardedRef, ...rest }: ThemeProps & {
            className?: string | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element>;
    } & import("hoist-non-react-statics").NonReactStatics<({ classnames: cx, className, children, classPrefix, forwardedRef, ...rest }: ThemeProps & {
        className?: string | undefined;
        children?: React.ReactNode;
        forwardedRef?: any;
    } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element, {}> & {
        ComposedComponent: ({ classnames: cx, className, children, classPrefix, forwardedRef, ...rest }: ThemeProps & {
            className?: string | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
    };
    static Footer: {
        new (props: Omit<ThemeProps & {
            className?: string | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<ThemeProps & {
                className?: string | undefined;
                children?: React.ReactNode;
                forwardedRef?: any;
            } & React.HTMLAttributes<HTMLDivElement>, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<({ classnames: cx, className, children, classPrefix, forwardedRef, ...rest }: ThemeProps & {
            className?: string | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element>;
    } & import("hoist-non-react-statics").NonReactStatics<({ classnames: cx, className, children, classPrefix, forwardedRef, ...rest }: ThemeProps & {
        className?: string | undefined;
        children?: React.ReactNode;
        forwardedRef?: any;
    } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element, {}> & {
        ComposedComponent: ({ classnames: cx, className, children, classPrefix, forwardedRef, ...rest }: ThemeProps & {
            className?: string | undefined;
            children?: React.ReactNode;
            forwardedRef?: any;
        } & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
    };
    state: Readonly<ModalState>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleEnter: () => void;
    handleEntered: () => void;
    handleExited: () => void;
    modalRef: (ref: any) => void;
    handleRootMouseDownCapture(e: MouseEvent): void;
    handleRootMouseUpCapture(e: MouseEvent): void;
    handleRootMouseUp(e: MouseEvent): void;
    handleDragStart: (_event: DraggableEvent, uiData: DraggableData) => void;
    handleDrag: (e: DraggableEvent, { deltaX, deltaY }: DraggableData) => void;
    handleDragStop: (e: DraggableEvent) => void;
    getDragStyle: () => React.CSSProperties;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
        draggable?: boolean | undefined;
        size?: any;
        container?: any;
        overlay?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Modal>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Modal, {}> & {
        ComposedComponent: typeof Modal;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
        draggable?: boolean | undefined;
        size?: any;
        container?: any;
        overlay?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Modal>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Modal, {}> & {
    ComposedComponent: typeof Modal;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
            draggable?: boolean | undefined;
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ModalProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "height" | "show" | "mobileUI" | "classnames" | "classPrefix" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "contentClassName" | "modalClassName" | "modalMaskClassName"> & {
                draggable?: boolean | undefined;
                size?: any;
                container?: any;
                overlay?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Modal>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Modal, {}> & {
        ComposedComponent: typeof Modal;
    };
} & {
    Header: typeof Modal.Header;
    Title: typeof Modal.Title;
    Body: typeof Modal.Body;
    Footer: typeof Modal.Footer;
};
export default _default;

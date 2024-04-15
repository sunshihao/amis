/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { LocaleProps } from 'amis-core';
import { ThemeProps } from 'amis-core';
export interface MultilineTextProps extends ThemeProps, LocaleProps {
    /**
     * 最大行数
     */
    maxRows?: number;
    /**
     * 展示文本
     */
    text: string;
    /**
     * 展开按钮文本
     */
    expendButtonText?: string;
    /**
     * 收起按钮文本
     */
    collapseButtonText?: string;
}
export interface MultilineTextState {
    isExpend: boolean;
    showBtn: boolean;
}
export declare class MultilineText extends React.Component<MultilineTextProps, MultilineTextState> {
    static defaultProps: {
        maxRows: number;
        expendButtonText: string;
        collapseButtonText: string;
    };
    state: {
        isExpend: boolean;
        showBtn: boolean;
    };
    ref?: React.RefObject<HTMLDivElement>;
    constructor(props: MultilineTextProps);
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: Readonly<MultilineTextProps>, nextState: Readonly<MultilineTextState>, nextContext: any): boolean;
    componentDidUpdate(oldProps: any, oldState: any): void;
    toggleExpend(): void;
    render(): React.JSX.Element | null;
}
declare const _default: {
    new (props: Omit<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
        maxRows?: number | undefined;
        expendButtonText?: string | undefined;
        collapseButtonText?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof MultilineText>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof MultilineText, {}> & {
        ComposedComponent: typeof MultilineText;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
        maxRows?: number | undefined;
        expendButtonText?: string | undefined;
        collapseButtonText?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof MultilineText>;
} & import("hoist-non-react-statics").NonReactStatics<typeof MultilineText, {}> & {
    ComposedComponent: typeof MultilineText;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
            maxRows?: number | undefined;
            expendButtonText?: string | undefined;
            collapseButtonText?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<MultilineTextProps, keyof LocaleProps>, "style" | "className" | "theme" | "text" | "mobileUI" | "classnames" | "classPrefix"> & {
                maxRows?: number | undefined;
                expendButtonText?: string | undefined;
                collapseButtonText?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof MultilineText>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof MultilineText, {}> & {
        ComposedComponent: typeof MultilineText;
    };
};
export default _default;

/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { LocaleProps, ThemeProps } from 'amis-core';
import type { PlainObject } from 'amis-core';
export interface SparkLineProps extends ThemeProps, LocaleProps {
    className?: string;
    width: number;
    height: number;
    value?: Array<number | {
        value: number;
        label?: string;
    }>;
    placeholder?: string;
    onClick?: (e: React.MouseEvent, value?: PlainObject) => void;
    id?: string;
    wrapperCustomStyle?: any;
    themeCss?: any;
}
export declare class SparkLine extends React.Component<SparkLineProps> {
    static defaultProps: {
        width: number;
        height: number;
    };
    normalizeValue(item: any): number;
    renderLines(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
        height?: number | undefined;
        width?: number | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SparkLine>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SparkLine, {}> & {
        ComposedComponent: typeof SparkLine;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
        height?: number | undefined;
        width?: number | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof SparkLine>;
} & import("hoist-non-react-statics").NonReactStatics<typeof SparkLine, {}> & {
    ComposedComponent: typeof SparkLine;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
            height?: number | undefined;
            width?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SparkLineProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "id" | "value" | "theme" | "mobileUI" | "classnames" | "classPrefix" | "onClick" | "themeCss" | "wrapperCustomStyle"> & {
                height?: number | undefined;
                width?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SparkLine>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SparkLine, {}> & {
        ComposedComponent: typeof SparkLine;
    };
};
export default _default;

/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { LocaleProps, TestIdBuilder } from 'amis-core';
import { ThemeProps } from 'amis-core';
export interface TextAreaProps extends ThemeProps, LocaleProps {
    /**
     * 最大行数
     */
    maxRows?: number;
    /**
     * 最小行数
     */
    minRows?: number;
    /**
     * 是否只读
     */
    readOnly?: boolean;
    /**
     * 边框模式，全边框，还是半边框，或者没边框。
     */
    borderMode?: 'full' | 'half' | 'none';
    /**
     * 限制文字个数
     */
    maxLength?: number;
    /**
     * 是否显示计数
     */
    showCounter?: boolean;
    /**
     * 输入内容是否可清除
     */
    clearable?: boolean;
    /**
     * 重置值
     */
    resetValue?: string;
    trimContents?: boolean;
    value?: any;
    onChange?: (value: any) => void;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    placeholder?: string;
    name?: string;
    disabled?: boolean;
    testIdBuilder?: TestIdBuilder;
    forwardRef?: {
        current: HTMLTextAreaElement | null;
    };
}
export interface TextAreaState {
    focused: boolean;
}
export declare class Textarea extends React.Component<TextAreaProps, TextAreaState> {
    static defaultProps: {
        minRows: number;
        maxRows: number;
        trimContents: boolean;
        resetValue: string;
        clearable: boolean;
    };
    state: {
        focused: boolean;
    };
    input?: HTMLTextAreaElement;
    inputRef: (ref: HTMLTextAreaElement) => HTMLTextAreaElement;
    valueToString(value: any): string;
    focus(): void;
    handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    handleFocus(e: React.FocusEvent<HTMLTextAreaElement>): void;
    handleBlur(e: React.FocusEvent<HTMLTextAreaElement>): void;
    handleClear(): Promise<void>;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
        clearable?: boolean | undefined;
        resetValue?: string | undefined;
        trimContents?: boolean | undefined;
        minRows?: number | undefined;
        maxRows?: number | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Textarea>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Textarea, {}> & {
        ComposedComponent: typeof Textarea;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
        clearable?: boolean | undefined;
        resetValue?: string | undefined;
        trimContents?: boolean | undefined;
        minRows?: number | undefined;
        maxRows?: number | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Textarea>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Textarea, {}> & {
    ComposedComponent: typeof Textarea;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
            clearable?: boolean | undefined;
            resetValue?: string | undefined;
            trimContents?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TextAreaProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "maxLength" | "readOnly" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "showCounter" | "forwardRef"> & {
                clearable?: boolean | undefined;
                resetValue?: string | undefined;
                trimContents?: boolean | undefined;
                minRows?: number | undefined;
                maxRows?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Textarea>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Textarea, {}> & {
        ComposedComponent: typeof Textarea;
    };
};
export default _default;

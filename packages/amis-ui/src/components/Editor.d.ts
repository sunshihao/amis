/**
 * @file Editor
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from 'amis-core';
import { LocaleProps } from 'amis-core';
export declare function monacoFactory(containerElement: HTMLElement, monaco: any, options: any): any;
export interface EditorProps extends LocaleProps {
    value?: string;
    defaultValue?: string;
    width?: number | string;
    height?: number | string;
    onChange?: (value: string, event: any) => void;
    language?: string;
    editorTheme?: string;
    allowFullscreen?: boolean;
    options: {
        [propName: string]: any;
    };
    classPrefix: string;
    className?: string;
    classnames: ClassNamesFn;
    context?: any;
    style?: any;
    isDiffEditor?: boolean;
    placeholder?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    editorDidMount?: (editor: any, monaco: any) => void;
    editorWillMount?: (monaco: any) => void;
    editorWillUnmount?: (editor: any, monaco: any) => void;
    editorFactory?: (conatainer: HTMLElement, monaco: any, options: any) => any;
}
export interface EditorState {
    isFullscreen?: boolean;
    innerWidth?: any;
    innerHeight?: any;
}
export declare class Editor extends React.Component<EditorProps, EditorState> {
    static defaultProps: {
        language: string;
        editorTheme: string;
        width: string;
        height: string;
        allowFullscreen: boolean;
        options: {};
    };
    state: {
        isFullscreen: boolean;
        innerWidth: string;
        innerHeight: string;
    };
    editor: any;
    container: any;
    currentValue: any;
    preventTriggerChangeEvent: boolean;
    disposes: Array<{
        dispose: () => void;
    }>;
    constructor(props: EditorProps);
    componentDidUpdate(prevProps: EditorProps): void;
    componentWillUnmount(): void;
    wrapperRef(ref: any): void;
    loadMonaco(): void;
    initMonaco(monaco: any): void;
    editorWillMount(monaco: any): void;
    editorDidMount(editor: any, monaco: any): void;
    handleFullscreenModeChange(): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
        options?: {
            [propName: string]: any;
        } | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        allowFullscreen?: boolean | undefined;
        editorTheme?: string | undefined;
        language?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Editor>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Editor, {}> & {
        ComposedComponent: typeof Editor;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
        options?: {
            [propName: string]: any;
        } | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        allowFullscreen?: boolean | undefined;
        editorTheme?: string | undefined;
        language?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Editor>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Editor, {}> & {
    ComposedComponent: typeof Editor;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
            options?: {
                [propName: string]: any;
            } | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            allowFullscreen?: boolean | undefined;
            editorTheme?: string | undefined;
            language?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<EditorProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "context" | "editorFactory" | "editorDidMount" | "isDiffEditor" | "editorWillMount" | "editorWillUnmount"> & {
                options?: {
                    [propName: string]: any;
                } | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                allowFullscreen?: boolean | undefined;
                editorTheme?: string | undefined;
                language?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Editor>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Editor, {}> & {
        ComposedComponent: typeof Editor;
    };
};
export default _default;

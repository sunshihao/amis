/// <reference types="hoist-non-react-statics" />
import { ThemeProps } from 'amis-core';
import React from 'react';
import { CodeMirrorEditorProps } from '../CodeMirror';
import { FormulaPlugin } from './plugin';
import type CodeMirror from 'codemirror';
export interface VariableItem {
    label: string;
    value?: string;
    path?: string;
    children?: Array<VariableItem>;
    type?: string;
    tag?: string;
    selectMode?: 'tree' | 'tabs';
    isMember?: boolean;
}
export interface FuncGroup {
    groupName: string;
    items: Array<FuncItem>;
}
export interface FuncItem {
    name: string;
    example?: string;
    description?: string;
    [propName: string]: any;
}
export interface CodeEditorProps extends ThemeProps, Omit<CodeMirrorEditorProps, 'style' | 'editorFactory' | 'editorDidMount'> {
    readOnly?: boolean;
    /**
     * 是否为单行模式，默认为 false
     */
    singleLine?: boolean;
    /**
     * evalMode 即直接就是表达式，否则
     * 需要 ${这里面才是表达式}
     * 默认为 true
     */
    evalMode?: boolean;
    autoFocus?: boolean;
    editorTheme?: 'dark' | 'light';
    editorOptions?: any;
    /**
     * 用于提示的变量集合，默认为空
     */
    variables?: Array<VariableItem>;
    /**
     * 函数集合，默认不需要传，即  amis-formula 里面那个函数
     * 如果有扩充，则需要传。
     */
    functions?: Array<FuncGroup>;
    placeholder?: string;
    editorDidMount?: (cm: typeof CodeMirror, editor: CodeMirror.Editor, plugin: FormulaPlugin) => void;
}
declare const _default: {
    new (props: Omit<CodeEditorProps & React.RefAttributes<unknown>, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<CodeEditorProps & React.RefAttributes<unknown>, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<CodeEditorProps & React.RefAttributes<unknown>, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<CodeEditorProps & React.RefAttributes<unknown>, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<CodeEditorProps & React.RefAttributes<unknown>, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<CodeEditorProps & React.RefAttributes<unknown>, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<CodeEditorProps & React.RefAttributes<unknown>, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<CodeEditorProps & React.RefAttributes<unknown>, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<CodeEditorProps & React.RefAttributes<unknown>, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<CodeEditorProps & React.RefAttributes<unknown>, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<React.ForwardRefExoticComponent<CodeEditorProps & React.RefAttributes<unknown>>>;
} & import("hoist-non-react-statics").NonReactStatics<React.ForwardRefExoticComponent<CodeEditorProps & React.RefAttributes<unknown>>, {}> & {
    ComposedComponent: React.ForwardRefExoticComponent<CodeEditorProps & React.RefAttributes<unknown>>;
};
export default _default;

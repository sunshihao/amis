/// <reference types="codemirror" />
/// <reference types="hoist-non-react-statics" />
/**
 * @file 公式编辑器
 */
import React from 'react';
import { ThemeProps, LocaleProps } from 'amis-core';
import type { FunctionDocMap } from 'amis-formula/lib/types';
import { FuncGroup, FuncItem, VariableItem } from './CodeEditor';
export interface FormulaEditorProps extends ThemeProps, LocaleProps {
    onChange?: (value: string) => void;
    value?: string;
    /**
     * evalMode 即直接就是表达式，否则
     * 需要 ${这里面才是表达式}
     * 默认为 true
     */
    evalMode?: boolean;
    /**
     * 用于提示的变量集合，默认为空
     */
    variables?: Array<VariableItem>;
    /**
     * 变量展现模式，可选值：'tabs' ｜ 'tree'
     */
    variableMode?: 'tabs' | 'tree';
    /**
     * 函数集合，默认不需要传，即  amis-formula 里面那个函数
     * 如果有扩充，则需要传。
     */
    functions?: Array<FuncGroup>;
    /**
     * 顶部标题，默认为表达式
     */
    header: string;
    variableClassName?: string;
    functionClassName?: string;
    /**
     * 当前输入项字段 name: 用于避免循环绑定自身导致无限渲染
     */
    selfVariableName?: string;
    /**
     * 编辑器配置
     */
    editorOptions?: any;
}
export interface FunctionsProps {
    name: string;
    items: FunctionProps[];
}
export interface FunctionProps {
    name: string;
    intro: string;
    usage: string;
    example: string;
}
export interface FormulaState {
    focused: boolean;
    isCodeMode: boolean;
    showRunPanel: boolean;
    expandTree: boolean;
    functions?: Array<FuncGroup>;
    runContext: string;
    runResult: string;
    runValid: boolean;
}
export declare class FormulaEditor extends React.Component<FormulaEditorProps, FormulaState> {
    state: FormulaState;
    unmounted: boolean;
    editor: React.RefObject<any>;
    static buildDefaultFunctions(doc: Array<{
        namespace: string;
        name: string;
        [propName: string]: any;
    }>): FuncGroup[];
    static buildCustomFunctions(map?: FunctionDocMap): {
        groupName: string;
        items: import("amis-formula/lib/types").FunctionDocItem[];
    }[];
    static buildFunctions(functions?: Array<any>, functionsFilter?: (functions: Array<FuncGroup>) => Array<FuncGroup>): Promise<any>;
    static defaultProps: Pick<FormulaEditorProps, 'variables' | 'evalMode'>;
    static replaceStrByIndex(str: string, idx: number, key: string, replaceKey: string): string;
    static getRegExpByMode(evalMode: boolean, key: string): RegExp;
    /**
     * 干不掉，太多地方使用了，但是要废弃了。
     * 不要用了，输入框也换成 codemirror 了，本身就支持高亮
     * @deprecated
     * @param value
     * @param variables
     * @param evalMode
     * @returns
     */
    static highlightValue(value: string, variables: Array<VariableItem>, evalMode?: boolean): {
        html: string;
    } | undefined;
    constructor(props: FormulaEditorProps);
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: FormulaEditorProps): void;
    componentWillUnmount(): void;
    handleFocus(): void;
    handleBlur(): void;
    getEditor(): any;
    insertValue(value: any, type: 'variable' | 'func'): void;
    validate(): any;
    handleFunctionSelect(item: FuncItem): void;
    handleVariableSelect(item: VariableItem): void;
    handleOnChange(value: any): void;
    editorFactory(dom: HTMLElement, cm: any): import("codemirror").Editor;
    handleIsCodeModeChange(showCode: boolean): void;
    toggleRunPanel(): void;
    handleRunContextChange(value: string): void;
    runCode(): Promise<void>;
    handleExpandTreeChange(expand: boolean): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
        variables?: VariableItem[] | undefined;
        evalMode?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof FormulaEditor>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof FormulaEditor, {}> & {
        ComposedComponent: typeof FormulaEditor;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
        variables?: VariableItem[] | undefined;
        evalMode?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof FormulaEditor>;
} & import("hoist-non-react-statics").NonReactStatics<typeof FormulaEditor, {}> & {
    ComposedComponent: typeof FormulaEditor;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
            variables?: VariableItem[] | undefined;
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "style" | "className" | "value" | "onChange" | "theme" | "header" | "mobileUI" | "classnames" | "classPrefix" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName"> & {
                variables?: VariableItem[] | undefined;
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof FormulaEditor>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof FormulaEditor, {}> & {
        ComposedComponent: typeof FormulaEditor;
    };
};
export default _default;

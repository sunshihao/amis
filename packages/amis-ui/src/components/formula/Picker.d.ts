/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { FormulaEditorProps } from './Editor';
import { FuncGroup, VariableItem } from './CodeEditor';
export declare const InputSchemaType: readonly ["text", "number", "boolean", "date", "time", "datetime", "select", "custom"];
export type FormulaPickerInputSettingType = (typeof InputSchemaType)[number];
export interface FormulaPickerInputSettings {
    type: FormulaPickerInputSettingType;
    [propName: string]: any;
}
export interface FormulaPickerProps extends Omit<FormulaEditorProps, 'variables'> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /**
     * 混合模式，意味着这个输入框既可以输入不同文本
     * 也可以输入公式。
     * 当输入公式时，值格式为 ${公式内容}
     * 其他内容当字符串。
     */
    mixedMode?: boolean;
    /**
     * 编辑器标题
     */
    title?: string;
    /**
     * 按钮图标
     */
    icon?: string;
    /**
     * 控件模式
     */
    mode?: 'button' | 'input-button' | 'input-group';
    /**
     * 边框模式，全边框，还是半边框，或者没边框。
     */
    borderMode?: 'full' | 'half' | 'none';
    /**
     * 按钮Label，inputMode为button时生效
     */
    btnLabel?: string;
    /**
     * 按钮样式
     */
    level?: 'info' | 'success' | 'warning' | 'danger' | 'link' | 'primary' | 'dark' | 'light';
    /**
     * 按钮大小
     */
    btnSize?: 'xs' | 'sm' | 'md' | 'lg';
    /**
     * 禁用状态
     */
    disabled?: boolean;
    /**
     * 占位文本
     */
    placeholder?: string;
    /**
     * 可清除
     */
    clearable?: boolean;
    /**
     * 支持通过上下文变量配置value
     */
    source?: string;
    /**
     * 外层透传的 data，和source配合使用
     */
    data?: any;
    /**
     * 输入框的展示类型
     */
    inputSettings?: FormulaPickerInputSettings;
    /**
     * 其他类型渲染器
     */
    customInputRender?: (props: {
        value: any;
        onChange: (value: any) => void;
        className?: string;
        inputSettings: FormulaPickerInputSettings;
    }) => JSX.Element;
    /**
     * 公式弹出的时候，可以外部设置 variables 和 functions
     */
    onPickerOpen?: (props: FormulaPickerProps) => any;
    functionsFilter?: (functions: Array<FuncGroup>) => Array<FuncGroup>;
    children?: (props: {
        onClick: (e: React.MouseEvent) => void;
        setState: (state: any) => void;
        isOpened: boolean;
    }) => JSX.Element;
    onConfirm?: (value?: any) => void;
    onRef?: (node: any) => void;
    popOverContainer?: any;
    variables?: Array<VariableItem> | string | ((props: any) => Array<VariableItem>);
}
export interface FormulaPickerState {
    isOpened: boolean;
    value: any;
    editorValue: string;
    isError: boolean | string;
    variables?: Array<VariableItem>;
    functions?: Array<FuncGroup>;
    variableMode?: any;
}
export declare class FormulaPicker extends React.Component<FormulaPickerProps, FormulaPickerState> {
    state: FormulaPickerState;
    static defaultProps: {
        evalMode: boolean;
    };
    unmounted: boolean;
    constructor(props: FormulaPickerProps);
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: FormulaPickerProps): Promise<void>;
    componentWillUnmount(): void;
    buildFunctions(functions?: FuncGroup[] | undefined, setState?: boolean): Promise<any>;
    value2EditorValue(props: FormulaPickerProps): string;
    isTextInput(): boolean;
    handleConfirm(): void;
    handleInputChange(value: string): void;
    handleInputGroupChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleEditorChange(value: string): void;
    handleEditorConfirm(): void;
    confirm(value: any, ast?: any): void;
    handleClick(): Promise<void>;
    close(e?: any, callback?: () => void): void;
    updateState(state?: any): void;
    validate(value: string): any;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
        evalMode?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof FormulaPicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof FormulaPicker, {}> & {
        ComposedComponent: typeof FormulaPicker;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
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
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
            evalMode?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof FormulaPicker>;
} & import("hoist-non-react-statics").NonReactStatics<typeof FormulaPicker, {}> & {
    ComposedComponent: typeof FormulaPicker;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("amis-core").LocaleProps>, "style" | "icon" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "variables" | "children" | "source" | "title" | "header" | "size" | "popOverContainer" | "mode" | "clearable" | "borderMode" | "mobileUI" | "classnames" | "classPrefix" | "level" | "onConfirm" | "onPickerOpen" | "variableMode" | "functions" | "editorOptions" | "variableClassName" | "functionClassName" | "selfVariableName" | "mixedMode" | "btnLabel" | "btnSize" | "inputSettings" | "customInputRender" | "functionsFilter" | "onRef"> & {
                evalMode?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof FormulaPicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof FormulaPicker, {}> & {
        ComposedComponent: typeof FormulaPicker;
    };
};
export default _default;

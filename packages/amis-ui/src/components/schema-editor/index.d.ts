/**
 * 用来定义数据结构的编辑器
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { LocaleProps, ThemeProps, JSONSchema } from 'amis-core';
import type { JSONSchema7TypeName } from 'json-schema';
import type { SchemaEditorItemPlaceholder } from './Common';
export interface SchemaEditorProps extends LocaleProps, ThemeProps {
    value?: JSONSchema;
    onChange: (value: JSONSchema) => void;
    disabled?: boolean;
    defaultType: JSONSchema7TypeName;
    renderExtraProps?: (value: JSONSchema, onChange: (value: JSONSchema) => void) => JSX.Element;
    renderModalProps?: (value: JSONSchema, onChange: (value: JSONSchema) => void) => JSX.Element;
    disabledTypes?: Array<string>;
    /**
     * 预设模板
     */
    definitions?: {
        [propName: string]: {
            type: 'string' | 'number' | 'integer' | 'object' | 'array' | 'boolean' | 'null';
            title: string;
            [propName: string]: any;
        };
    };
    /**
     * 顶层是否允许修改类型
     */
    rootTypeMutable: boolean;
    /**
     * 顶层类型信息是否隐藏
     */
    showRootInfo: boolean;
    /**
     * 是否开启高级配置
     */
    enableAdvancedSetting?: boolean;
    popOverContainer?: any;
    /**
     * 各属性输入控件的占位提示文本
     */
    placeholder?: SchemaEditorItemPlaceholder;
    /**
     * 是否为 mini 模式
     */
    mini?: boolean;
    /**
     * 添加属性的按钮文本
     */
    addButtonText?: string;
}
export declare class SchemaEditor extends React.Component<SchemaEditorProps> {
    static defaultProps: Pick<SchemaEditorProps, 'defaultType' | 'rootTypeMutable' | 'showRootInfo' | 'disabledTypes' | 'placeholder'>;
    defaultTypes: Array<any>;
    constructor(props: SchemaEditorProps);
    handleTypeChange(type: string, value: any, origin: any): any;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
        placeholder?: Partial<{
            key: string;
            title: string;
            description: string;
            default: string;
            empty: string;
        }> | undefined;
        rootTypeMutable?: boolean | undefined;
        showRootInfo?: boolean | undefined;
        disabledTypes?: string[] | undefined;
        defaultType?: JSONSchema7TypeName | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SchemaEditor>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SchemaEditor, {}> & {
        ComposedComponent: typeof SchemaEditor;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
        placeholder?: Partial<{
            key: string;
            title: string;
            description: string;
            default: string;
            empty: string;
        }> | undefined;
        rootTypeMutable?: boolean | undefined;
        showRootInfo?: boolean | undefined;
        disabledTypes?: string[] | undefined;
        defaultType?: JSONSchema7TypeName | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof SchemaEditor>;
} & import("hoist-non-react-statics").NonReactStatics<typeof SchemaEditor, {}> & {
    ComposedComponent: typeof SchemaEditor;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
            placeholder?: Partial<{
                key: string;
                title: string;
                description: string;
                default: string;
                empty: string;
            }> | undefined;
            rootTypeMutable?: boolean | undefined;
            showRootInfo?: boolean | undefined;
            disabledTypes?: string[] | undefined;
            defaultType?: JSONSchema7TypeName | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "addButtonText" | "mobileUI" | "classnames" | "classPrefix" | "definitions" | "mini" | "enableAdvancedSetting" | "renderExtraProps" | "renderModalProps"> & {
                placeholder?: Partial<{
                    key: string;
                    title: string;
                    description: string;
                    default: string;
                    empty: string;
                }> | undefined;
                rootTypeMutable?: boolean | undefined;
                showRootInfo?: boolean | undefined;
                disabledTypes?: string[] | undefined;
                defaultType?: JSONSchema7TypeName | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SchemaEditor>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SchemaEditor, {}> & {
        ComposedComponent: typeof SchemaEditor;
    };
};
export default _default;

/**
 * 结果表格(暂时不支持结果排序)
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { BaseSelection, BaseSelectionProps } from './Selection';
import { Option, Options } from './Select';
export interface ResultTableSelectionProps extends BaseSelectionProps {
    title?: string;
    searchPlaceholder?: string;
    placeholder?: string;
    searchable?: boolean;
    onSearch?: Function;
    columns: Array<{
        name: string;
        label: string;
        [propName: string]: any;
    }>;
    cellRender: (column: {
        name: string;
        label: string;
        [propName: string]: any;
    }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
}
export interface ResultTableSelectionState {
    tableOptions: Options;
    searching: Boolean;
    searchTableOptions: Options;
}
export declare class BaseResultTableSelection extends BaseSelection<ResultTableSelectionProps, ResultTableSelectionState> {
    static defaultProps: {
        cellRender: (column: {
            [propName: string]: any;
            name: string;
            label: string;
        }, option: Option, colIndex: number, rowIndex: number) => React.JSX.Element;
        placeholder: string;
        itemRender: typeof BaseSelection.itemRender;
        multiple: boolean;
        clearable: boolean;
        virtualThreshold: number;
        itemHeight: number;
    };
    state: ResultTableSelectionState;
    searchRef?: any;
    static getDerivedStateFromProps(props: ResultTableSelectionProps): {
        tableOptions: Options;
    };
    domSearchRef(ref: any): void;
    handleCloseItem(option: Option): void;
    search(inputValue: string): void;
    clearSearch(): void;
    clearInput(): void;
    renderTable(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
        placeholder?: string | undefined;
        multiple?: boolean | undefined;
        clearable?: boolean | undefined;
        itemHeight?: number | undefined;
        virtualThreshold?: number | undefined;
        itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        cellRender?: ((column: {
            [propName: string]: any;
            name: string;
            label: string;
        }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof BaseResultTableSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof BaseResultTableSelection, {}> & {
        ComposedComponent: typeof BaseResultTableSelection;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
        placeholder?: string | undefined;
        multiple?: boolean | undefined;
        clearable?: boolean | undefined;
        itemHeight?: number | undefined;
        virtualThreshold?: number | undefined;
        itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        cellRender?: ((column: {
            [propName: string]: any;
            name: string;
            label: string;
        }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof BaseResultTableSelection>;
} & import("hoist-non-react-statics").NonReactStatics<typeof BaseResultTableSelection, {}> & {
    ComposedComponent: typeof BaseResultTableSelection;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            cellRender?: ((column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
                cellRender?: ((column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof BaseResultTableSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof BaseResultTableSelection, {}> & {
        ComposedComponent: typeof BaseResultTableSelection;
    };
};
export default _default;

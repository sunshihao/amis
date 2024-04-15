/// <reference types="hoist-non-react-statics" />
import { BaseSelection, BaseSelectionProps } from './Selection';
import React from 'react';
import { Option } from './Select';
import { RenderedRows } from './virtual-list';
export interface TableSelectionProps extends BaseSelectionProps {
    /** 是否为结果渲染列表 */
    resultMode?: boolean;
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
export interface TableSelectionState {
    colsWidth: number[];
    tableWidth: number;
    rowRenderScope: null | RenderedRows;
}
export declare class TableSelection extends BaseSelection<TableSelectionProps, any> {
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
    constructor(props: TableSelectionProps);
    getColumns(): {
        [propName: string]: any;
        name: string;
        label: string;
    }[];
    renderTHead(): React.JSX.Element;
    renderTr({ option, rowIndex, valueArray, columns, styles }: {
        option: any;
        rowIndex: number;
        valueArray: any[];
        columns: any[];
        styles?: object;
    }): React.JSX.Element;
    renderTBody(): React.JSX.Element;
    ref: any;
    tableHeadRef(ref: any): void;
    handleVirtualTableResize({ width }: {
        width: number;
    }): void;
    renderVirtualTable(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        readonly props: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        new (props: Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            readonly props: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        ComposedComponent: React.ComponentType<typeof TableSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TableSelection, {}> & {
        ComposedComponent: typeof TableSelection;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        readonly props: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
    ComposedComponent: React.ComponentType<typeof TableSelection>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TableSelection, {}> & {
    ComposedComponent: typeof TableSelection;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            readonly props: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "columns" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "resultMode"> & {
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
        ComposedComponent: React.ComponentType<typeof TableSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TableSelection, {}> & {
        ComposedComponent: typeof TableSelection;
    };
};
export default _default;

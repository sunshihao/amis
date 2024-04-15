/// <reference types="hoist-non-react-statics" />
/**
 * 结果树(暂时不支持结果排序)
 */
import React from 'react';
import { Option, Options } from './Select';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
import { BaseSelectionProps } from './Selection';
import { SpinnerExtraProps } from './Spinner';
export interface ResultTreeListProps extends ThemeProps, LocaleProps, BaseSelectionProps, SpinnerExtraProps {
    className?: string;
    title?: string;
    searchable?: boolean;
    value: Array<Option>;
    valueField: string;
    onSearch?: Function;
    onChange: (value: Array<Option>, optionModified?: boolean) => void;
    placeholder: string;
    searchPlaceholder?: string;
    itemRender: (option: Option, states: ItemRenderStates) => JSX.Element;
    itemClassName?: string;
    cellRender?: (column: {
        name: string;
        label: string;
        [propName: string]: any;
    }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
}
export interface ItemRenderStates {
    index: number;
    disabled?: boolean;
    onChange: (value: any, name: string) => void;
}
interface ResultTreeListState {
    searching: Boolean;
    treeOptions: Options;
    searchTreeOptions: Options;
}
export declare class BaseResultTreeList extends React.Component<ResultTreeListProps, ResultTreeListState> {
    static itemRender(option: any): React.JSX.Element;
    static defaultProps: Pick<ResultTreeListProps, 'placeholder' | 'itemRender'>;
    state: ResultTreeListState;
    searchRef?: any;
    static getDerivedStateFromProps(props: ResultTreeListProps): {
        treeOptions: Option[];
    };
    domSearchRef(ref: any): void;
    deleteTreeChecked(option: Option): void;
    deleteResultTreeNode(option: Option): void;
    search(inputValue: string): void;
    clearSearch(): void;
    clearInput(): void;
    renderTree(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
        placeholder?: string | undefined;
        itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof BaseResultTreeList>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof BaseResultTreeList, {}> & {
        ComposedComponent: typeof BaseResultTreeList;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
        placeholder?: string | undefined;
        itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof BaseResultTreeList>;
} & import("hoist-non-react-statics").NonReactStatics<typeof BaseResultTreeList, {}> & {
    ComposedComponent: typeof BaseResultTreeList;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultTreeListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "loadingConfig" | "multiple" | "inline" | "options" | "clearable" | "deferField" | "searchable" | "searchPlaceholder" | "itemHeight" | "virtualThreshold" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "onSearch" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof BaseResultTreeList>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof BaseResultTreeList, {}> & {
        ComposedComponent: typeof BaseResultTreeList;
    };
};
export default _default;

/// <reference types="lodash" />
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
import { Options, Option } from './Select';
import { TransferProps } from './Transfer';
import { ItemRenderStates } from './Selection';
import { SpinnerExtraProps } from './Spinner';
export interface TabsTransferProps extends Omit<TransferProps, 'selectMode' | 'columns' | 'selectRender' | 'statistics' | 'onSearch' | 'optionItemRender'>, SpinnerExtraProps, ThemeProps {
    onSearch: (term: string, option: Option, setCancel: (cancel: () => void) => void) => Promise<Options | void>;
    optionItemRender?: (option: Option, states: ItemRenderStates, tab: Option) => JSX.Element;
    cellRender?: (column: {
        name: string;
        label: string;
        [propName: string]: any;
    }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
    onTabChange: (key: number) => void;
    activeKey: number;
    onlyChildren?: boolean;
    ctx?: Record<string, any>;
    selectMode?: 'table' | 'list' | 'tree' | 'chained' | 'associated';
    searchable?: boolean;
    /**
     * 是否默认都展开
     */
    initiallyOpen?: boolean;
}
export interface TabsTransferState {
    inputValue: string;
    searchResult: Options | null;
}
export declare class TabsTransfer extends React.Component<TabsTransferProps, TabsTransferState> {
    static defaultProps: {
        multiple: boolean;
        onlyChildren: boolean;
    };
    state: {
        inputValue: string;
        searchResult: null;
    };
    unmounted: boolean;
    cancelSearch?: () => void;
    componentWillUnmount(): void;
    handleSearch(text: string, option: Option): void;
    handleSeachCancel(): void;
    lazySearch: import("lodash").DebouncedFunc<(text: string, option: Option) => void>;
    handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
    handleTabChange(key: number): void;
    renderSearchResult(searchResult: Options | null): React.JSX.Element;
    renderSelect(): React.JSX.Element;
    renderOptions(option: Option): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
        multiple?: boolean | undefined;
        onlyChildren?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof TabsTransfer>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TabsTransfer, {}> & {
        ComposedComponent: typeof TabsTransfer;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
        multiple?: boolean | undefined;
        onlyChildren?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof TabsTransfer>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TabsTransfer, {}> & {
    ComposedComponent: typeof TabsTransfer;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
            multiple?: boolean | undefined;
            onlyChildren?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsTransferProps, keyof import("amis-core").LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "ctx" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "clearable" | "deferField" | "showArrow" | "sortable" | "selectMode" | "resultListModeFollowSelect" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "searchable" | "resultSearchable" | "selectTitle" | "resultTitle" | "searchPlaceholder" | "resultSearchPlaceholder" | "itemHeight" | "virtualThreshold" | "showInvalidMatch" | "initiallyOpen" | "autoCheckChildren" | "pagination" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "accumulatedOptions" | "onClick" | "checkAll" | "onSearch" | "onRef" | "noResultsText" | "checkAllLabel" | "maxTagCount" | "overflowTagPopover" | "activeKey" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "optionItemRender" | "resultItemRender" | "cellRender" | "leftDefaultValue" | "onResultSearch" | "onSelectAll" | "onPageChange" | "onTabChange"> & {
                multiple?: boolean | undefined;
                onlyChildren?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof TabsTransfer>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TabsTransfer, {}> & {
        ComposedComponent: typeof TabsTransfer;
    };
};
export default _default;

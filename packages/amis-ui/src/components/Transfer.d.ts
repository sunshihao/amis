/// <reference types="lodash" />
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
import { BaseSelectionProps, ItemRenderStates } from './Selection';
import { Options, Option } from './Select';
import { LocaleProps } from 'amis-core';
import { ItemRenderStates as ResultItemRenderStates } from './ResultList';
import { SpinnerExtraProps } from './Spinner';
import type { TestIdBuilder } from 'amis-core';
export type SelectMode = 'table' | 'group' | 'list' | 'tree' | 'chained' | 'associated';
export interface TransferProps extends ThemeProps, LocaleProps, SpinnerExtraProps, Omit<BaseSelectionProps, 'itemRender'> {
    inline?: boolean;
    statistics?: boolean;
    showArrow?: boolean;
    multiple?: boolean;
    selectTitle?: string;
    selectMode?: SelectMode;
    columns?: Array<{
        name: string;
        label: string;
        [propName: string]: any;
    }>;
    cellRender?: (column: {
        name: string;
        label: string;
        [propName: string]: any;
    }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
    leftOptions?: Array<Option>;
    leftMode?: 'tree' | 'list' | 'group';
    leftDefaultValue?: any;
    rightMode?: 'table' | 'list' | 'group' | 'tree' | 'chained';
    maxTagCount?: number;
    overflowTagPopover?: any;
    searchResultMode?: 'table' | 'list' | 'group' | 'tree' | 'chained';
    searchResultColumns?: Array<{
        name: string;
        label: string;
        [propName: string]: any;
    }>;
    searchPlaceholder?: string;
    noResultsText?: string;
    onChange?: (value: Array<Option>, optionModified?: boolean) => void;
    onSearch?: (term: string, setCancel: (cancel: () => void) => void, targetPage?: {
        page: number;
        perPage?: number;
    }) => Promise<{
        items: Options;
        page?: number;
        perPage?: number;
        total?: number;
    } | void>;
    selectRender?: (props: Omit<TransferProps, 'onSearch'> & {
        onSearch: (text: string) => void;
        onSearchCancel: () => void;
        searchResult: Options | null;
    }) => JSX.Element;
    resultTitle?: string;
    resultListModeFollowSelect?: boolean;
    resultSearchPlaceholder?: string;
    optionItemRender?: (option: Option, states: ItemRenderStates) => JSX.Element;
    resultItemRender?: (option: Option, states: ResultItemRenderStates) => JSX.Element;
    resultSearchable?: boolean;
    onResultSearch?: (text: string, item: Option) => boolean;
    sortable?: boolean;
    onRef?: (ref: Transfer) => void;
    onSelectAll?: (options: Options) => void;
    itemHeight?: number;
    virtualThreshold?: number;
    virtualListHeight?: number;
    showInvalidMatch?: boolean;
    checkAll?: boolean;
    checkAllLabel?: string;
    /** 树形模式下，给 tree 的属性 */
    onlyChildren?: boolean;
    /** 分页模式下累积的选项值，用于右侧回显 */
    accumulatedOptions?: Option[];
    /** 分页配置 */
    pagination?: {
        /** 是否开启分页 */
        enable: boolean;
        /** 分页组件CSS类名 */
        className?: string;
        /**
         * 通过控制layout属性的顺序，调整分页结构 total,perPage,pager,go
         * @default 'pager'
         */
        layout?: string | Array<string>;
        /**
         * 指定每页可以显示多少条
         * @default [10, 20, 50, 100]
         */
        perPageAvailable?: Array<number>;
        /**
         * 最多显示多少个分页按钮。
         *
         * @default 5
         */
        maxButtons?: number;
        page?: number;
        perPage?: number;
        total?: number;
        popOverContainer?: any;
        popOverContainerSelector?: string;
    };
    /** 切换分页事件 */
    onPageChange?: (page: number, perPage?: number, direction?: 'forward' | 'backward') => void;
    /**
     * 是否默认都展开
     */
    initiallyOpen?: boolean;
    /**
     * ui级联关系，true代表级联选中，false代表不级联，默认为true
     */
    autoCheckChildren?: boolean;
    testIdBuilder?: TestIdBuilder;
}
export interface TransferState {
    tempValue?: Array<Option> | Option;
    inputValue: string;
    searchResult: Options | null;
    searchResultPage?: {
        page?: number;
        perPage?: number;
        total?: number;
    } | null;
    isTreeDeferLoad: boolean;
    resultSelectMode: 'list' | 'tree' | 'table';
}
export declare class Transfer<T extends TransferProps = TransferProps> extends React.Component<T, TransferState> {
    static defaultProps: Pick<TransferProps, 'multiple' | 'resultListModeFollowSelect' | 'selectMode' | 'statistics' | 'virtualThreshold' | 'checkAllLabel' | 'itemHeight' | 'valueField'>;
    state: TransferState;
    valueArray: Options;
    availableOptions: Options;
    unmounted: boolean;
    cancelSearch?: () => void;
    treeRef: any;
    resultRef: any;
    componentDidMount(): void;
    static getDerivedStateFromProps(props: TransferProps): {
        isTreeDeferLoad: boolean;
        resultSelectMode: string;
    };
    componentWillUnmount(): void;
    domRef(ref: any): void;
    domResultRef(ref: any): void;
    toggleAll(): void;
    selectAll(): void;
    clearSearch(target?: {
        left?: boolean;
        right?: boolean;
    }): void;
    clearAll(): void;
    handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
    handleSearch(inputValue: string): void;
    handleSeachCancel(): void;
    lazySearch: import("lodash").DebouncedFunc<(page?: number, perPage?: number) => Promise<void>>;
    searchRequest(page?: number, perPage?: number): Promise<void>;
    getFlattenArr(options: Array<Option>): Option[];
    handleSearchTreeChange(values: Array<Option>, searchOptions: Array<Option>, props: TransferProps): void;
    optionItemRender(option: Option, states: ItemRenderStates): React.JSX.Element;
    resultItemRender(option: Option, states: ItemRenderStates): React.JSX.Element;
    onPageChangeHandle(page: number, perPage?: number, direction?: 'forward' | 'backward'): void;
    renderSelect(props: TransferProps & {
        onToggleAll?: () => void;
    }): React.JSX.Element;
    renderFooter(): React.JSX.Element | null;
    renderSearchResult(props: TransferProps): React.JSX.Element;
    renderOptions(props: TransferProps): React.JSX.Element;
    renderResult(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Omit<any, keyof LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    } & ThemeProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & ThemeProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & ThemeProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & ThemeProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & ThemeProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & ThemeProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & ThemeProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & ThemeProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & ThemeProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        } & ThemeProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<React.ComponentType<Omit<any, keyof LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    } & ThemeProps> & {
        themeKey?: string | undefined;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<React.ComponentType<Omit<any, keyof LocaleProps> & {
    locale?: string | undefined;
    translate?: ((str: string, ...args: any[]) => string) | undefined;
} & ThemeProps> & {
    themeKey?: string | undefined;
}, {}> & {
    ComposedComponent: React.ComponentType<Omit<any, keyof LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    } & ThemeProps> & {
        themeKey?: string | undefined;
    };
};
export default _default;

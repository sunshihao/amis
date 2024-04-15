/**
 * @file Table
 * @author fex
 */
/// <reference types="lodash" />
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import Sortable from 'sortablejs';
import { ClassNamesFn, ThemeProps, LocaleProps } from 'amis-core';
import { SpinnerExtraProps } from '../Spinner';
export interface ColumnProps {
    title: string | React.ReactNode | Function;
    name: string;
    className?: Function;
    children?: Array<ColumnProps>;
    render?: Function;
    fixed?: boolean | string;
    width?: number | string;
    sorter?: ((a: any, b: any, order: string) => number) | boolean;
    sortOrder?: string;
    filters?: Array<any>;
    filterMode?: string;
    filterMultiple?: boolean;
    filteredValue?: Array<string>;
    filtered?: boolean;
    filterDropdown?: Function | React.ReactNode;
    align?: string;
    breakpoint?: '*' | 'xs' | 'sm' | 'md' | 'lg';
    [propName: string]: any;
}
export interface ThProps extends ColumnProps {
    rowSpan: number;
    colSpan: number;
    depth: number;
}
export interface TdProps extends ColumnProps {
    rowSpan: number;
    colSpan: number;
}
export interface RowSelectionOptionProps {
    key: string;
    text: string;
    onSelect: Function;
}
export interface RowSelectionProps {
    type: string;
    rowClick?: boolean;
    fixed: boolean;
    selectedRowKeys: Array<string | number>;
    keyField?: string;
    columnWidth?: number;
    selections?: Array<RowSelectionOptionProps>;
    onChange?: Function;
    getCheckboxProps: Function;
    maxSelectedLength?: number;
}
export interface ExpandableProps {
    expandedRowKeys?: Array<string | number>;
    keyField: string;
    columnWidth?: number;
    rowExpandable: Function;
    defaultExpandedRowKeys?: Array<string | number>;
    onExpand?: Function;
    onExpandedRowsChange?: Function;
    expandedRowRender?: Function;
    expandedRowClassName?: Function;
    expandIcon?: Function;
    fixed?: boolean;
    position?: string;
}
export interface SummaryProps {
    colSpan: number;
    fixed: string | boolean;
    render: Function | React.ReactNode;
    /** 单元格样式，会应用于组件外层的td */
    cellClassName?: string;
}
export interface OnRowProps {
    onRowMouseEnter?: Function;
    onRowMouseLeave?: Function;
    onRowClick?: Function;
    onRowDbClick?: Function;
}
export interface SortProps {
    orderBy: string;
    orderDir: string;
}
export type AutoFillHeightObject = Record<'height' | 'maxHeight', number>;
export interface TableProps extends ThemeProps, LocaleProps, SpinnerExtraProps {
    title: string | React.ReactNode | Function;
    footer?: string | React.ReactNode | Function;
    className?: string;
    dataSource: Array<any>;
    classnames: ClassNamesFn;
    columns: Array<ColumnProps>;
    scroll?: ScrollProps;
    rowSelection?: RowSelectionProps;
    onSort?: Function;
    expandable?: ExpandableProps;
    bordered?: boolean;
    size?: string;
    headSummary?: Function | React.ReactNode | Array<SummaryProps | Array<SummaryProps>>;
    footSummary?: Function | React.ReactNode | Array<SummaryProps | Array<SummaryProps>>;
    draggable?: boolean;
    onDrag?: Function;
    resizable?: boolean;
    placeholder?: string | React.ReactNode | Function;
    loading?: boolean | string | React.ReactNode;
    sticky?: boolean;
    onFilter?: Function;
    childrenColumnName?: string;
    keyField?: string;
    indentSize: number;
    onRow?: OnRowProps;
    rowClassName?: Function;
    lineHeight?: string;
    showHeader?: boolean;
    tableLayout?: string;
    onSelect?: Function;
    onSelectAll?: Function;
    itemActions?: Function;
    onRef?: (ref: any) => void;
    /**
     * 表格自动计算高度
     */
    autoFillHeight?: boolean | AutoFillHeightObject;
    lazyRenderAfter?: boolean;
}
export interface ScrollProps {
    x: number | string | true;
    y: number | string;
}
export interface TableState {
    selectedRowKeys: Array<string | number>;
    expandedRowKeys: Array<string | number>;
    colWidths: {
        [name: string]: {
            width: number;
            realWidth: number;
            minWidth: number;
            originWidth: number;
        };
    };
    hoverRow: {
        rowIndex?: number;
        record: any;
        target: HTMLTableRowElement;
    } | null;
    sort?: SortProps;
}
export declare const DefaultCellWidth = 40;
export declare class Table extends React.PureComponent<TableProps, TableState> {
    static defaultProps: {
        title: string;
        className: string;
        dataSource: never[];
        columns: never[];
        indentSize: number;
        placeholder: string;
        showHeader: boolean;
        tableLayout: string;
    };
    constructor(props: TableProps);
    getPopOverContainer(): HTMLElement;
    thColumns: Array<Array<ThProps>>;
    tdColumns: Array<TdProps>;
    selectedRows: Array<any>;
    unSelectedRows: Array<any>;
    sortable: Sortable | null;
    resizeStart: number;
    resizeTarget?: HTMLElement;
    resizeWidth: number;
    resizeIndex: number;
    tableDom: React.RefObject<HTMLDivElement>;
    tbodyDom: React.RefObject<HTMLTableSectionElement>;
    contentDom: React.RefObject<HTMLDivElement>;
    headerDom: React.RefObject<HTMLDivElement>;
    footDom: React.RefObject<HTMLDivElement>;
    containerDom: React.RefObject<HTMLDivElement>;
    toDispose: Array<() => void>;
    updateTableInfoLazy: import("lodash").DebouncedFunc<() => void>;
    updateAutoFillHeightLazy: import("lodash").DebouncedFunc<() => void>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TableProps, prevState: TableState): void;
    componentWillUnmount(): void;
    /**
     * 自动设置表格高度占满界面剩余区域
     * 用 css 实现有点麻烦，要改很多结构，所以先用 dom hack 了，避免对之前的功能有影响
     */
    updateAutoFillHeight(): void;
    initDragging(): void;
    destroyDragging(): void;
    updateStickyHeader(): void;
    renderColGroup(showReal?: boolean): React.JSX.Element;
    onResizeMouseDown(event: any, index: number): void;
    onResizeMouseMove(event: any): void;
    onResizeMouseUp(event: MouseEvent): void;
    renderHead(): React.JSX.Element;
    onRowClick(event: React.ChangeEvent<any>, record?: any, rowIndex?: number): Promise<void>;
    onRowDbClick(event: React.ChangeEvent<any>, record?: any, rowIndex?: number): Promise<void>;
    onRowMouseEnter(event: React.ChangeEvent<any>, record?: any, rowIndex?: number): Promise<void>;
    onRowMouseLeave(event: React.ChangeEvent<any>, record?: any, rowIndex?: number): Promise<void>;
    onMouseLeave(): void;
    onExpandRows(data: Array<any>): void;
    onCollapseRows(data: Array<any>): void;
    getChildrenColumnName(): string;
    getRowSelectionKeyField(): string;
    getExpandableKeyField(): string;
    hasCheckedChildrenRows(data: any): boolean;
    getSelectedRowKeys(isSelected: boolean, data: any): any[];
    selectedSingleRow(value: boolean, data: any): Promise<void>;
    isExpandableRow(data: any, rowIndex: number): any;
    isExpanded(record: any): boolean;
    renderRow(data: any, rowIndex: number, levels: Array<number>): any[];
    onRowChange(value: boolean, record: any): void;
    renderBody(): React.JSX.Element;
    isExpandableTable(): boolean;
    isRightExpandable(): boolean | undefined;
    isLeftExpandable(): boolean | undefined;
    getExtraColumnCount(): number;
    renderSummaryRow(summary: any): any;
    renderFoot(): React.JSX.Element;
    updateTableDom(dom: HTMLElement): void;
    onTableContentScroll(event: React.ChangeEvent<any>): void;
    onWheel(event: WheelEvent): void;
    onTableScroll(event: any): void;
    renderTable(): React.JSX.Element;
    renderScrollTableHeader(): React.JSX.Element;
    renderScrollTableBody(): React.JSX.Element;
    renderScrollTableFoot(): React.JSX.Element;
    renderScrollTable(): React.JSX.Element;
    syncTableWidth(): void;
    initTableWidth(): void;
    updateTableInfo(): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
        placeholder?: Function | React.ReactNode;
        className?: string | undefined;
        showHeader?: boolean | undefined;
        title?: Function | React.ReactNode;
        columns?: ColumnProps[] | undefined;
        tableLayout?: string | undefined;
        indentSize?: number | undefined;
        dataSource?: any[] | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Table>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Table, {}> & {
        ComposedComponent: typeof Table;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
        placeholder?: Function | React.ReactNode;
        className?: string | undefined;
        showHeader?: boolean | undefined;
        title?: Function | React.ReactNode;
        columns?: ColumnProps[] | undefined;
        tableLayout?: string | undefined;
        indentSize?: number | undefined;
        dataSource?: any[] | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Table>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Table, {}> & {
    ComposedComponent: typeof Table;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
            placeholder?: Function | React.ReactNode;
            className?: string | undefined;
            showHeader?: boolean | undefined;
            title?: Function | React.ReactNode;
            columns?: ColumnProps[] | undefined;
            tableLayout?: string | undefined;
            indentSize?: number | undefined;
            dataSource?: any[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "style" | "draggable" | "theme" | "footer" | "loadingConfig" | "size" | "resizable" | "autoFillHeight" | "rowSelection" | "expandable" | "sticky" | "loading" | "keyField" | "childrenColumnName" | "lineHeight" | "bordered" | "lazyRenderAfter" | "scroll" | "mobileUI" | "classnames" | "classPrefix" | "onDrag" | "onSelect" | "onRef" | "onSort" | "itemActions" | "rowClassName" | "onSelectAll" | "headSummary" | "footSummary" | "onFilter" | "onRow"> & {
                placeholder?: Function | React.ReactNode;
                className?: string | undefined;
                showHeader?: boolean | undefined;
                title?: Function | React.ReactNode;
                columns?: ColumnProps[] | undefined;
                tableLayout?: string | undefined;
                indentSize?: number | undefined;
                dataSource?: any[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Table>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Table, {}> & {
        ComposedComponent: typeof Table;
    };
};
export default _default;

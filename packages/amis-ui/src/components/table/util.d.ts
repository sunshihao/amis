import { ColumnProps, SummaryProps, ThProps, TdProps, SortProps } from './index';
export declare function checkChildrenRow(data: any, childrenColumnName: string): any;
export declare function getDataChildrenKeys(data: any, childrenColumnName: string, rowSelectionKeyField: string): string[];
export declare function getAllSelectableRows(dataSource: Array<any>, rowSelectionKeyField: string, childrenColumnName: string, expandable: boolean, selectedRowKeys: Array<string | number>, maxSelectedLength: number | undefined): {
    rows: any[];
    rowKeys: (string | number)[];
    restSelectedKeys: (string | number)[];
};
export declare function getRowsByKeys(dataSource: Array<any>, keys: Array<string | number>, keyField: string, childrenColumnName: string): {
    selectedRows: any[];
    unSelectedRows: any[];
};
export declare function getMaxLevelThRowSpan(columns: Array<ColumnProps>): number;
export declare function getThRowSpan(column: ColumnProps): number;
export declare function getThColSpan(column: ColumnProps): number;
export declare function buildColumns(columns: ColumnProps[] | undefined, thColumns: Array<Array<any>>, tdColumns: ColumnProps[] | undefined, maxLevel: number, depth?: number, fixed?: boolean | string): void;
export declare function getBuildColumns(columns: Array<any>): {
    thColumns: ThProps[][];
    tdColumns: TdProps[];
};
export declare function updateFixedRow(row: HTMLTableRowElement, columns: Array<ColumnProps | SummaryProps>, cx: Function): void;
export declare function hasFixedColumn(columns: Array<ColumnProps | SummaryProps>): number | ColumnProps | SummaryProps | ((predicate: (value: ColumnProps | SummaryProps, index: number, obj: (ColumnProps | SummaryProps)[]) => unknown, thisArg?: any) => number) | (() => IterableIterator<ColumnProps | SummaryProps>) | (() => {
    copyWithin: boolean;
    entries: boolean;
    fill: boolean;
    find: boolean;
    findIndex: boolean;
    keys: boolean;
    values: boolean;
}) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | (<U>(callbackfn: (value: ColumnProps | SummaryProps, index: number, array: (ColumnProps | SummaryProps)[]) => U, thisArg?: any) => U[]) | (() => (ColumnProps | SummaryProps)[]) | ((start?: number | undefined, end?: number | undefined) => (ColumnProps | SummaryProps)[]) | ((value: ColumnProps | SummaryProps, start?: number | undefined, end?: number | undefined) => (ColumnProps | SummaryProps)[]) | {
    (start: number, deleteCount?: number | undefined): (ColumnProps | SummaryProps)[];
    (start: number, deleteCount: number, ...items: (ColumnProps | SummaryProps)[]): (ColumnProps | SummaryProps)[];
} | ((...items: (ColumnProps | SummaryProps)[]) => number) | {
    (...items: ConcatArray<ColumnProps | SummaryProps>[]): (ColumnProps | SummaryProps)[];
    (...items: (ColumnProps | SummaryProps | ConcatArray<ColumnProps | SummaryProps>)[]): (ColumnProps | SummaryProps)[];
} | ((...items: (ColumnProps | SummaryProps)[]) => number) | {
    <S extends ColumnProps | SummaryProps>(predicate: (this: void, value: ColumnProps | SummaryProps, index: number, obj: (ColumnProps | SummaryProps)[]) => value is S, thisArg?: any): S | undefined;
    (predicate: (value: ColumnProps | SummaryProps, index: number, obj: (ColumnProps | SummaryProps)[]) => unknown, thisArg?: any): ColumnProps | SummaryProps | undefined;
} | (() => string) | (() => string) | (() => ColumnProps | SummaryProps | undefined) | ((separator?: string | undefined) => string) | (() => ColumnProps | SummaryProps | undefined) | ((compareFn?: ((a: ColumnProps | SummaryProps, b: ColumnProps | SummaryProps) => number) | undefined) => (ColumnProps | SummaryProps)[]) | ((searchElement: ColumnProps | SummaryProps, fromIndex?: number | undefined) => number) | ((searchElement: ColumnProps | SummaryProps, fromIndex?: number | undefined) => number) | {
    <S_1 extends ColumnProps | SummaryProps>(predicate: (value: ColumnProps | SummaryProps, index: number, array: (ColumnProps | SummaryProps)[]) => value is S_1, thisArg?: any): this is S_1[];
    (predicate: (value: ColumnProps | SummaryProps, index: number, array: (ColumnProps | SummaryProps)[]) => unknown, thisArg?: any): boolean;
} | ((predicate: (value: ColumnProps | SummaryProps, index: number, array: (ColumnProps | SummaryProps)[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: ColumnProps | SummaryProps, index: number, array: (ColumnProps | SummaryProps)[]) => void, thisArg?: any) => void) | {
    <S_2 extends ColumnProps | SummaryProps>(predicate: (value: ColumnProps | SummaryProps, index: number, array: (ColumnProps | SummaryProps)[]) => value is S_2, thisArg?: any): S_2[];
    (predicate: (value: ColumnProps | SummaryProps, index: number, array: (ColumnProps | SummaryProps)[]) => unknown, thisArg?: any): (ColumnProps | SummaryProps)[];
} | {
    (callbackfn: (previousValue: ColumnProps | SummaryProps, currentValue: ColumnProps | SummaryProps, currentIndex: number, array: (ColumnProps | SummaryProps)[]) => ColumnProps | SummaryProps): ColumnProps | SummaryProps;
    (callbackfn: (previousValue: ColumnProps | SummaryProps, currentValue: ColumnProps | SummaryProps, currentIndex: number, array: (ColumnProps | SummaryProps)[]) => ColumnProps | SummaryProps, initialValue: ColumnProps | SummaryProps): ColumnProps | SummaryProps;
    <U_1>(callbackfn: (previousValue: U_1, currentValue: ColumnProps | SummaryProps, currentIndex: number, array: (ColumnProps | SummaryProps)[]) => U_1, initialValue: U_1): U_1;
} | {
    (callbackfn: (previousValue: ColumnProps | SummaryProps, currentValue: ColumnProps | SummaryProps, currentIndex: number, array: (ColumnProps | SummaryProps)[]) => ColumnProps | SummaryProps): ColumnProps | SummaryProps;
    (callbackfn: (previousValue: ColumnProps | SummaryProps, currentValue: ColumnProps | SummaryProps, currentIndex: number, array: (ColumnProps | SummaryProps)[]) => ColumnProps | SummaryProps, initialValue: ColumnProps | SummaryProps): ColumnProps | SummaryProps;
    <U_2>(callbackfn: (previousValue: U_2, currentValue: ColumnProps | SummaryProps, currentIndex: number, array: (ColumnProps | SummaryProps)[]) => U_2, initialValue: U_2): U_2;
} | ((target: number, start: number, end?: number | undefined) => (ColumnProps | SummaryProps)[]) | (() => IterableIterator<[number, ColumnProps | SummaryProps]>) | (() => IterableIterator<number>) | (() => IterableIterator<ColumnProps | SummaryProps>) | ((searchElement: ColumnProps | SummaryProps, fromIndex?: number | undefined) => boolean) | (<U_3, This = undefined>(callback: (this: This, value: ColumnProps | SummaryProps, index: number, array: (ColumnProps | SummaryProps)[]) => U_3 | readonly U_3[], thisArg?: This | undefined) => U_3[]) | undefined;
export declare function levelsSplit(level: string): number[];
export declare function getSortData(data: Array<any>, columns: Array<ColumnProps>, childrenColumnName: string, sort?: SortProps): Array<any>;

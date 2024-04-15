/**
 * @file table/Head
 * @author fex
 */
import React from 'react';
import { ThemeProps } from 'amis-core';
import { ColumnProps, ThProps, TdProps, RowSelectionOptionProps } from './index';
export interface Props extends ThemeProps {
    draggable: boolean;
    selectable: boolean;
    rowSelectionFixed: boolean;
    rowSelectionType?: string;
    selections?: Array<RowSelectionOptionProps>;
    columns: Array<ColumnProps>;
    rowSelectionKeyField: string;
    maxSelectedLength?: number;
    isRightExpandable?: boolean;
    isLeftExpandable?: boolean;
    selectedRowKeys: Array<string | number>;
    dataSource: Array<any>;
    resizable?: boolean;
    expandable: boolean;
    expandableFixed?: string | boolean;
    childrenColumnName: string;
    orderBy?: string;
    popOverContainer?: () => HTMLElement;
    isExpandable: boolean;
    onSort: Function;
    onSelectAll: Function;
    onFilter?: Function;
    onResizeMouseDown: Function;
}
export default class Head extends React.PureComponent<Props> {
    domRef: React.RefObject<HTMLTableSectionElement>;
    thColumns: Array<Array<ThProps>>;
    tdColumns: Array<TdProps>;
    prependColumns(columns: Array<any>): void;
    updateFixedRow(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): React.JSX.Element;
}

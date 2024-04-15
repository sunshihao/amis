/**
 * @file table/BodyRow
 * @author fex
 */
import React from 'react';
import { ThemeProps } from 'amis-core';
import { ColumnProps } from './index';
export interface Props extends ThemeProps {
    data: any;
    rowIndex: number;
    columns: ColumnProps[];
    expandable: boolean;
    expandableFixed?: boolean;
    indentSize: number;
    lineHeight?: string;
    keyField?: string;
    draggable: boolean;
    levels: string;
    isExpandable: boolean;
    isExpandableRow: boolean;
    colCount: number;
    isRightExpandable?: boolean;
    isLeftExpandable?: boolean;
    isChecked: boolean;
    rowClassName?: Function;
    onExpand?: Function;
    onCollapse?: Function;
    onMouseEnter: Function;
    onMouseLeave: Function;
    onClick: Function;
    onDoubleClick: Function;
    onChange: Function;
    childrenColumnName: string;
    selectable: boolean;
    rowSelectionFixed?: boolean;
    rowSelectionType?: 'radio' | 'checkbox';
    hasChildrenRow: boolean;
    hasChildrenChecked: boolean;
    expandedRowClassName: string;
    expandedRowRender?: Function;
    isExpanded: boolean;
    [propName: string]: any;
}
export interface LazyRowProps extends Props {
}
export interface LazyRowState {
    visible: boolean;
}
export default class LazyRow extends React.PureComponent<LazyRowProps, LazyRowState> {
    constructor(props: LazyRowProps);
    handleVisibleChange(visible: boolean, entry?: any): void;
    render(): React.JSX.Element;
}

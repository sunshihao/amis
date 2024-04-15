/**
 * @file table/BodyCell
 * @author fex
 */
import React from 'react';
import { ThemeProps, ClassNamesFn } from 'amis-core';
import { ColumnProps } from './index';
export interface Props extends ThemeProps {
    fixed?: string | boolean;
    rowSpan?: number | any;
    colSpan?: number | any;
    key?: string | number;
    className?: string;
    children?: any;
    tagName?: string;
    style?: Object;
    column?: ColumnProps;
    wrapperComponent: any;
    depth?: number;
    col?: string;
    index?: number;
    classnames: ClassNamesFn;
}
export default class BodyCell extends React.PureComponent<Props> {
    static defaultProps: {
        fixed: string;
        wrapperComponent: string;
        rowSpan: null;
        colSpan: null;
    };
    render(): React.JSX.Element;
}

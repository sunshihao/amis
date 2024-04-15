/**
 * @file table/SummaryRow
 * @author fex
 */
import React from 'react';
import { ThemeProps } from 'amis-core';
import { SummaryProps } from './index';
export interface RowProps extends ThemeProps {
    dataSource: Array<any>;
    colCount: number;
    isRightExpandable?: boolean;
    row?: Array<SummaryProps>;
    onMouseEnter: Function;
    onMouseLeave: Function;
}
export interface Props extends RowProps {
    summary: Array<SummaryProps | Array<SummaryProps>>;
}
export declare class SummaryRow extends React.PureComponent<RowProps> {
    domRef: React.RefObject<HTMLTableRowElement>;
    updateFixedRow(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): React.JSX.Element;
}
export default class SummaryRows extends React.PureComponent<Props> {
    render(): React.JSX.Element[];
}

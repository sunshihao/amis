import { RangeRef } from '../../types/RangeRef';
export type RelationPosition = {
    rowType: 'header' | 'odd' | 'even' | 'total';
    colType: 'odd' | 'even';
    rowPosition: 'header' | 'first' | 'last' | 'middle' | 'total';
    colPosition: 'first' | 'last' | 'middle';
};
/**
 * 计算出这个位置相对于表格区域的位置，这个可以缓存的，但先不优化
 */
export declare function calcTableRelativePosition(tableRange: RangeRef, isRowHidden: (rowIndex: number) => boolean, isColHidden: (colIndex: number) => boolean, row: number, col: number, headerRowCount: number, totalsRowCount: number, totalsRowShown: boolean): RelationPosition;

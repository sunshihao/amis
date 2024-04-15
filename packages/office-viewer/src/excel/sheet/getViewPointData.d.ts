import { RangeRef } from '../types/RangeRef';
import { CellData } from '../types/worksheet/CellData';
import { DisplayData } from './Sheet';
import { ViewRange } from './ViewRange';
/**
 * 计算单元格的高宽，主要是得考虑合并单元格的情况
 * @param row
 * @param col
 * @param rowHeight
 * @param colWidth
 * @param mergeCells
 * @returns
 */
export declare function calcCellDisplaySize(row: number, col: number, rowHeight: number, colWidth: number, getRowHeight: (row: number) => number, getColWidth: (row: number) => number, mergeCells: RangeRef[]): {
    isMergeCell: boolean;
    mergeCell: RangeRef | undefined;
    mergeCellId: string;
    displayHeight: number;
    displayWidth: number;
};
/**
 * 返回可视区域的数据及位置信息，拆分函数方便但要测试
 */
export declare function getViewPointData(getSheetRowData: (row: number) => CellData[], getMergeCells: () => RangeRef[], getRowHeight: (index: number) => number, getColWidth: (index: number) => number, viewRange: ViewRange): DisplayData[];

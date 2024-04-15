import { RangeRef } from '../../types/RangeRef';
/**
 * 将单元格转成合并单元格
 * @param row
 * @param col
 * @param mergeCells
 */
export declare function cellToMergeCell(row: number, col: number, mergeCells: RangeRef[]): RangeRef;

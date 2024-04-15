import { ViewRange } from '../../../sheet/ViewRange';
/**
 * 获取左上角冻结区域的访问
 */
export declare function getFrozenTopLeftViewPointRange(xSplit: number, ySplit: number, leftShift: number, topShift: number, getRowHeight: (index: number) => number, getColWidth: (index: number) => number): ViewRange;

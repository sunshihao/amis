import { ViewRange } from '../../../sheet/ViewRange';
import { IndexInfo } from '../../../sheet/getViewRange';
/**
 * 获取左边冻结的范围
 * @param xSplit
 * @param height
 * @param scrollTop
 * @param getRowHeight
 * @param getColWidth
 * @param rowPositionCache
 * @param rowHiddenRange
 * @returns
 */
export declare function getFrozenLeftViewPointRange(xSplit: number, height: number, scrollTop: number, leftShift: number, topShift: number, getRowHeight: (index: number) => number, getColWidth: (index: number) => number, rowPositionCache?: IndexInfo[]): ViewRange;

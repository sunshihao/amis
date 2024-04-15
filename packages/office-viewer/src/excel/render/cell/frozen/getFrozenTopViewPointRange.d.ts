import { ViewRange } from '../../../sheet/ViewRange';
import { HiddenRange, IndexInfo } from '../../../sheet/getViewRange';
/**
 * 获取顶部冻结的范围
 * @param ySplit
 * @param width
 * @param scrollLeft
 * @param getRowHeight
 * @param getColWidth
 * @param colPositionCache
 * @param colHiddenRange
 * @returns
 */
export declare function getFrozenTopViewPointRange(ySplit: number, width: number, scrollLeft: number, leftShift: number, topShift: number, getRowHeight: (index: number) => number, getColWidth: (index: number) => number, colPositionCache?: IndexInfo[], colHiddenRange?: HiddenRange[]): ViewRange;

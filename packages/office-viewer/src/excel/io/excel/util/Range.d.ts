/**
 * 处理选区相关的工具函数
 */
import { ViewRange } from '../../../sheet/ViewRange';
import { RangeRef } from '../../../types/RangeRef';
/**
 * 解析选区字符串，比如 A1:B2
 */
export declare function parseRange(range: string): RangeRef;
/**
 * 将 RangeRef 转换为字符串
 */
export declare function rangeRefToString(rangeRef: RangeRef): string;
/**
 * 扩展选区，取这两个选区合并后最大值
 * @param range1
 * @param range2
 * @returns
 */
export declare function mergeRange(range1: RangeRef, range2: RangeRef): {
    startRow: number;
    startCol: number;
    endRow: number;
    endCol: number;
};
/**
 * 判断一个选区是否在另一个选区内
 * @param 主选区
 * @param 被包含的选区
 */
export declare function inRange(range: RangeRef, otherRange: RangeRef): boolean;
/**
 * 判断两个选区是否相等
 * @param range1
 * @param range2
 */
export declare function rangeEqual(range1: RangeRef, range2: RangeRef): boolean;
/**
 * 判断两个选区是否相交
 */
export declare function rangeIntersect(range1: RangeRef, range2: RangeRef): boolean;
/**
 * 这个单元格是否是个合并单元格
 * @param range
 * @param mergeCells
 * @returns
 */
export declare function isMergeCell(range: RangeRef, mergeCells: RangeRef[]): boolean;
/**
 * 是否是单个单元格
 * @param range
 */
export declare function isSingleCell(range: RangeRef): boolean;
/**
 * 判断单元格是否在选区内
 */
export declare function isCellInRange(range: RangeRef, row: number, col: number): boolean;
/**
 * 基于 viewRange 构建出 RangeRef
 */
export declare function viewRangeToRangeRef(viewRange: ViewRange): {
    startRow: number;
    startCol: number;
    endRow: number;
    endCol: number;
};

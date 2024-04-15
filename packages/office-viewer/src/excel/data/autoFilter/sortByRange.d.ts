import { RangeRef } from '../../types/RangeRef';
import { CellData } from '../../types/worksheet/CellData';
/**
 * 比较两个单元格的值，目前还有很多类型没有处理，比如富文本
 * @returns 如果 a > b 返回 1，如果 a < b 返回 -1，如果 a === b 返回 0
 */
export declare function compareCellData(a?: CellData, b?: CellData): number;
export declare function sortByRange(cellData: CellData[][], range: RangeRef, sortOrder: 'asc' | 'desc'): void;

import { Region, ViewRange } from '../../sheet/ViewRange';
import { RangeRef } from '../../types/RangeRef';
import { HitTestResult } from './hitTest';
/**
 * 查找单元格
 */
export declare function findCell(region: Region, offsetX: number, offsetY: number, gridLineHitRange: number, viewRange: ViewRange, mergeCells: RangeRef[]): HitTestResult;

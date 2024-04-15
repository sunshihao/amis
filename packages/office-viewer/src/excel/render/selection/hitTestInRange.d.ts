import { Region, ViewRange } from '../../sheet/ViewRange';
import { RangeRef } from '../../types/RangeRef';
import { HitTestResult } from './hitTest';
/**
 * 检查是否点中了左上角冻结区域
 */
export declare function hitTestInRange(region: Region, range: ViewRange | undefined | null, offsetX: number, offsetY: number, rowHeaderWidth: number, colHeaderHeight: number, gridLineHitRange: number, mergeCells: RangeRef[]): HitTestResult | null;

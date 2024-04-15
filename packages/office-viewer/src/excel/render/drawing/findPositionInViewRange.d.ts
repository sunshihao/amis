import { Sheet } from '../../sheet/Sheet';
import { ViewRange } from '../../sheet/ViewRange';
import { Rect } from '../Rect';
/**
 * 在 viewRange 中找到 row 和 col 的位置
 */
export declare function findPositionInViewRange(currentSheet: Sheet, row: number, col: number, viewRange: ViewRange): Rect;

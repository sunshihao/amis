import { GridLineOptions } from '../../sheet/ExcelRenderOptions';
import { Sheet } from '../../sheet/Sheet';
import { ViewRange } from '../../sheet/ViewRange';
import { SheetCanvas, Line } from '../SheetCanvas';
/**
 * 生成网格线
 */
export declare function generateGridLines(currentSheet: Sheet, viewRange: ViewRange, width: number, height: number): Line[];
/**
 * 绘制网格线
 */
export declare function drawGridLines(currentSheet: Sheet, viewRange: ViewRange, canvas: SheetCanvas, height: number, width: number, gridLineOptions: GridLineOptions): void;

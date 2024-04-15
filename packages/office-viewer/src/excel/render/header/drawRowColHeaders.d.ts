import { ExcelRenderOptions } from '../../sheet/ExcelRenderOptions';
import { Sheet } from '../../sheet/Sheet';
import { ViewRange } from '../../sheet/ViewRange';
import { FontSize } from '../../types/FontSize';
import { FontStyle } from '../../types/FontStyle';
import { SheetCanvas } from '../SheetCanvas';
/**
 * 绘制行列的表头
 */
export declare function drawRowColHeaders(currentSheet: Sheet, viewRange: ViewRange, sheetCanvas: SheetCanvas, renderOptions: ExcelRenderOptions, defaultFontSize: FontSize, defaultFontStyle: FontStyle): void;

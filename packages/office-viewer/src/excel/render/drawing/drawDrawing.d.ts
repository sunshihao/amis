import { Sheet } from '../../sheet/Sheet';
import { SheetCanvas } from '../SheetCanvas';
import { ExcelRender } from '../ExcelRender';
import { ViewRange } from '../../sheet/ViewRange';
/**
 * 绘制 sheet 里的图片及文本框
 */
export declare function drawDrawing(excelRender: ExcelRender, currentSheet: Sheet, viewRange: ViewRange, canvas: SheetCanvas): void;

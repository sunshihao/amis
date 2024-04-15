import { Sheet } from '../../sheet/Sheet';
import { IShape } from '../../types/IDrawing';
import { ExcelRender } from '../ExcelRender';
import { Rect } from '../Rect';
import { SheetCanvas } from '../SheetCanvas';
/**
 * 绘制 sheet 里的形状及文本框
 */
export declare function drawShape(excelRender: ExcelRender, currentSheet: Sheet, canvas: SheetCanvas, displayRect: Rect, drawingRect: Rect, rowHeaderWidth: number, colHeaderHeight: number, sp: IShape): Promise<void>;

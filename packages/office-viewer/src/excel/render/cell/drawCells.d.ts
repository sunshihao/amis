import { ExcelRenderOptions } from '../../sheet/ExcelRenderOptions';
import { DisplayData, Sheet } from '../../sheet/Sheet';
import { SheetCanvas } from '../SheetCanvas';
import { LinkPosition } from './LinkPosition';
import type { ExcelRender } from '../ExcelRender';
/**
 * 绘制所有单元格的主入口
 */
export declare function drawCells(excelRender: ExcelRender, currentSheet: Sheet, excelRenderOptions: ExcelRenderOptions, canvas: SheetCanvas, displayData: DisplayData[], linkPositionCache: LinkPosition[]): void;

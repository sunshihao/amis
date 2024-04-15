import { Sheet } from '../../sheet/Sheet';
import { CellInfo } from '../../types/CellInfo';
import { IDataProvider } from '../../types/IDataProvider';
import { ExcelRender } from '../ExcelRender';
import { LinkPosition } from './LinkPosition';
/**
 * 绘制单元格里的文字
 * @param cellInfo
 * @param x
 * @param y
 * @param width 单元格宽度
 * @param height 单元格高度
 * @param padding 内边距
 */
export declare function drawTextInCell(excelRender: ExcelRender, sheet: Sheet, ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, dataProvider: IDataProvider, cellInfo: CellInfo, x: number, y: number, width: number, height: number, indentSize: number, padding: number, linkPositionCache?: LinkPosition[]): void;

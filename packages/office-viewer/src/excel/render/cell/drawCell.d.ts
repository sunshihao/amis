import { Sheet } from '../../sheet/Sheet';
import { CellInfo } from '../../types/CellInfo';
import { IDataProvider } from '../../types/IDataProvider';
import { Canvas } from '../Canvas';
import type { ExcelRender } from '../ExcelRender';
import { LinkPosition } from './LinkPosition';
/**
 * 绘制单元格的实现逻辑
 * @param ctx
 * @param dataProvider
 * @param cellInfo
 * @param x
 * @param y
 * @param width
 * @param height
 * @param padding
 * @param needClear
 */
export declare function drawCell(excelRender: ExcelRender, sheet: Sheet, canvas: Canvas, dataProvider: IDataProvider, cellInfo: CellInfo, x: number, y: number, width: number, height: number, indentSize: number, padding: number, needClear?: boolean, linkPositionCache?: LinkPosition[]): void;

import { CellInfo } from '../../types/CellInfo';
import { IDataProvider } from '../../types/IDataProvider';
/**
 * 绘制单元格边框
 */
export declare function drawCellBorder(ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, dataProvider: IDataProvider, cellInfo: CellInfo, x: number, y: number, width: number, height: number): void;

import { ExcelRenderOptions } from '../../../sheet/ExcelRenderOptions';
import { Sheet } from '../../../sheet/Sheet';
import { SheetCanvas } from '../../SheetCanvas';
import { IDataProvider } from '../../../types/IDataProvider';
import { LinkPosition } from '../LinkPosition';
import { ExcelRender } from '../../ExcelRender';
/**
 * 绘制只有左边冻结的情况
 */
export declare function drawLeftFrozen(excelRender: ExcelRender, xSplit: number, currentSheet: Sheet, dataProvider: IDataProvider, excelRenderOptions: ExcelRenderOptions, mainCanvas: SheetCanvas, height: number, linkPositionCache: LinkPosition[]): import("../../../sheet/ViewRange").ViewRange;

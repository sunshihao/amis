import { ExcelRenderOptions } from '../../../sheet/ExcelRenderOptions';
import { Sheet } from '../../../sheet/Sheet';
import { SheetCanvas } from '../../SheetCanvas';
import { IDataProvider } from '../../../types/IDataProvider';
import { LinkPosition } from '../LinkPosition';
import { ExcelRender } from '../../ExcelRender';
/**
 * 绘制同时有左边和上边冻结的情况，需要绘制 3 个独立区域
 */
export declare function drawTopLeftFrozen(excelRender: ExcelRender, xSplit: number, ySplit: number, currentSheet: Sheet, dataProvider: IDataProvider, excelRenderOptions: ExcelRenderOptions, mainCanvas: SheetCanvas, height: number, width: number, linkPositionCache: LinkPosition[]): {
    topViewRange: import("../../../sheet/ViewRange").ViewRange;
    leftViewRange: import("../../../sheet/ViewRange").ViewRange;
    topLeftViewRange: import("../../../sheet/ViewRange").ViewRange;
};

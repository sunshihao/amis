import { ExcelRenderOptions } from '../../../sheet/ExcelRenderOptions';
import { Sheet } from '../../../sheet/Sheet';
import { SheetCanvas } from '../../SheetCanvas';
import { IDataProvider } from '../../../types/IDataProvider';
import { LinkPosition } from '../LinkPosition';
import { ExcelRender } from '../../ExcelRender';
import { ViewRange } from '../../../sheet/ViewRange';
export type FrozenViewRange = {
    topViewRange: ViewRange | null;
    leftViewRange: ViewRange | null;
    topLeftViewRange: ViewRange | null;
};
/**
 * 绘制冻结的行和列
 * @return 绘制区域的信息
 */
export declare function drawFrozen(excelRender: ExcelRender, currentSheet: Sheet, dataProvider: IDataProvider, excelRenderOptions: ExcelRenderOptions, mainCanvas: SheetCanvas, height: number, width: number, linkPositionCache: LinkPosition[]): FrozenViewRange;

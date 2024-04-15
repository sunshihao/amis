/**
 * 选区使用的 canvas，独立是为了提高渲染性能，在选取变的时候只有这里变化
 */
import { Workbook } from '../Workbook';
import { ExcelRenderOptions } from '../sheet/ExcelRenderOptions';
import { IDataProvider } from '../types/IDataProvider';
import { Canvas } from './Canvas';
import { SheetSelection } from './selection/SheetSelection';
export declare class SelectionCanvas extends Canvas {
    workbook: Workbook;
    dataProvider: IDataProvider;
    renderOptions: ExcelRenderOptions;
    /**
     * 选区的信息
     */
    selection?: SheetSelection;
    /**
     * 临时行线网格线位置
     */
    tmpRowGridLineY?: number;
    /**
     * 临时列线网格线位置
     */
    tmpColGridLineX?: number;
    constructor(workbook: Workbook, dataProvider: IDataProvider);
    handleChangeSelection(selection: SheetSelection): void;
    dragRowGridLine(y: number): void;
    dragColGridLine(x: number): void;
    clearTmpGridLine(): void;
    draw(): void;
    clearSelection(): void;
    drawTmpGridLine(): void;
}

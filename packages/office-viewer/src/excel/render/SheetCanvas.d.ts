/**
 * 内容区 Canvas 封装，方便图形绘制
 */
import type { Workbook } from '../Workbook';
import { IDataProvider } from '../types/IDataProvider';
import { CellInfo } from '../types/CellInfo';
import { Canvas } from './Canvas';
import { LinkPosition } from './cell/LinkPosition';
import { CellInfoWithSize } from './cell/CellInfoWithSize';
import { ExcelRender } from './ExcelRender';
export interface Line {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}
export declare class SheetCanvas extends Canvas {
    workbook: Workbook;
    dataProvider: IDataProvider;
    debugFontBoundingBox: boolean;
    constructor(workbook: Workbook, dataProvider: IDataProvider);
    /**
     * 绘制单元格
     * @param font
     * @param text
     * @param x
     * @param y
     * @param width
     * @param height
     */
    drawCell(excelRender: ExcelRender, cellInfo: CellInfo, x: number, y: number, width: number, height: number, indentSize: number, padding: number, needClear?: boolean, linkPositionCache?: LinkPosition[]): void;
    autoClip(cellInfoMap: Map<string, CellInfoWithSize>): void;
}

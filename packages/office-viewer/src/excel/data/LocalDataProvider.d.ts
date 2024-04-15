/**
 * 本地数据，这个主要用于不远程协作的情况
 */
import { CT_Color, CT_Font } from '../../openxml/ExcelTypes';
import { IDataProvider } from '../types/IDataProvider';
import { FontSize } from '../types/FontSize';
import { FontStyle } from '../types/FontStyle';
import { CellInfo } from '../types/CellInfo';
import { IWorkbook } from '../types/IWorkbook';
import { CellData } from '../types/worksheet/CellData';
import type { ExcelRenderOptions } from '../sheet/ExcelRenderOptions';
import { HiddenRange } from '../sheet/getViewRange';
import { ISheet } from '../types/ISheet';
import { IDrawing } from '../types/IDrawing';
import { RangeRef } from '../types/RangeRef';
import { CellValue } from '../types/CellValue';
export declare class LocalDataProvider implements IDataProvider {
    /**
     * 工作簿，包含所有数据定义
     */
    workbook: IWorkbook;
    renderOptions: ExcelRenderOptions;
    /**
     * numfmt 实例，用于提升性能
     */
    numfmtInstances: any[];
    defaultFont: CT_Font;
    defaultFontStyle: FontStyle;
    constructor(workbook: IWorkbook, renderOptions: ExcelRenderOptions);
    /**
     * 初始化 numfmt 实例
     */
    private initNumfmt;
    /**
     * 应用自动过滤
     */
    applyFilter(): void;
    getSheets(): ISheet[];
    /**
     * 获取指定行的数据
     * @param sheetName 表名
     * @param row
     */
    getSheetRowData(sheetIndex: number, row: number): CellData[];
    getCellData(sheetIndex: number, row: number, col: number): CellData | undefined;
    /**
     * 更新单元格数据
     */
    updateCellData(sheetIndex: number, row: number, col: number, data: CellData): void;
    /**
     * 获取指定行高
     * TODO: 加缓存
     * @param sheetIndex
     * @param rowIndex
     * @returns px 为单位的行高
     */
    getRowHeight(sheetIndex: number, rowIndex: number): number;
    setRowHeight(sheetIndex: number, row: number, height: number): void;
    /**
     * 这个行是否隐藏
     */
    isRowHidden(sheetIndex: number, rowIndex: number): boolean;
    /**
     * 获取隐藏的列
     * @param sheetIndex
     * @returns
     */
    getColHiddenRange(sheetIndex: number): HiddenRange[];
    /**
     * 这个列是否隐藏
     */
    isColHidden(sheetIndex: number, colIndex: number): boolean;
    /**
     * 获取指定列宽，这个一开始就能确定
     * @param sheetIndex
     * @param colIndex
     * @returns px 为单位的列宽
     */
    getColWidth(sheetIndex: number, colIndex: number): number;
    setColWidth(sheetIndex: number, col: number, width: number): void;
    private getDefaultWidth;
    getMaxRow(sheetIndex: number): number;
    sheetTotalHeightCache: Map<number, number>;
    /**
     * 获取表的中数据高度，这个可能会返回预估值
     * @param sheetIndex 表索引
     */
    getTotalHeight(sheetIndex: number): number;
    /**
     * 获取最大列数
     */
    getMaxCol(sheetIndex: number): number;
    sheetTotalWidthCache: Map<number, number>;
    /**
     * 获取表的中数据宽度，这个可能会返回预估值
     * @param sheetIndex 表索引
     */
    getTotalWidth(sheetIndex: number): number;
    /**
     * 根据索引获取表
     * @param sheetIndex
     * @returns 对应的表
     */
    getSheetByIndex(sheetIndex: number): ISheet;
    /**
     *
     * @param sheetName
     * @returns
     */
    getSheetByName(sheetName: string): ISheet | undefined;
    /**
     * 获取默认字体
     */
    getDefaultFont(): CT_Font;
    getColor(color?: CT_Color, defaultColor?: string): string;
    getFontStyle(font?: CT_Font): FontStyle;
    /**
     * 获取单元格信息
     */
    getCellInfo(sheetIndex: number, row: number, col: number): CellInfo;
    getCellValue(sheetIndex: number, row: number, col: number): CellValue;
    getCellValueByData(cellData: CellData[][], row: number, col: number): CellValue;
    /**
     * 获取范围内的数据
     */
    getCellValueByRange(sheetIndex: number, range: RangeRef, includeHidden: boolean): CellValue[];
    searchText(sheetIndex: number, text: string): CellValue[];
    getThemeColor(themeId: number): string;
    defaultFontSize?: FontSize;
    /**
     * 获取默认字体高宽
     * @param ctx
     * @returns
     */
    getDefaultFontSize(): FontSize;
    getDefaultFontStyle(): FontStyle;
    getMergeCells(sheetIndex: number): RangeRef[];
    getDrawing(sheetIndex: number): IDrawing | null;
    getConditionalFormatting(sheetIndex: number): import("../../openxml/ExcelTypes").CT_ConditionalFormatting[];
    getDxf(index: number): import("../../openxml/ExcelTypes").CT_Dxf | null;
    is1904(): boolean;
    /**
     * 设置行排序
     */
    sortColumn(sheetIndex: number, range: RangeRef, sortOrder: 'asc' | 'desc'): void;
}

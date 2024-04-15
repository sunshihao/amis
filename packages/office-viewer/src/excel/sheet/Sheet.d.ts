/**
 * sheet 的相关操作及临时状态
 */
import type { ExcelRenderOptions } from '../sheet/ExcelRenderOptions';
import { CT_AutoFilter, CT_SheetView } from '../../openxml/ExcelTypes';
import type { Workbook } from '../Workbook';
import { IDataProvider } from '../types/IDataProvider';
import { FontSize } from '../types/FontSize';
import { CellInfo } from '../types/CellInfo';
import { ISheet } from '../types/ISheet';
import { RangeRef } from '../types/RangeRef';
import { CellData } from '../types/worksheet/CellData';
import { ViewRange } from './ViewRange';
import { FrozenViewRange } from '../render/cell/frozen/drawFrozen';
import { HitTestResult } from '../render/selection/hitTest';
import { SheetSelection } from '../render/selection/SheetSelection';
import { Rect } from '../render/Rect';
import { RangeCache } from './RangeCache';
import { CellValue } from '../types/CellValue';
import { AutoFilterIconUI } from '../render/autoFilter/AutoFilterIconUI';
import { EnKeys } from '../lang/en_US';
export type DisplayData = {
    x: number;
    y: number;
    width: number;
    height: number;
    row: number;
    col: number;
    value: CellData;
    /**
     * 是否需要清空
     */
    needClear: boolean;
};
export declare class Sheet {
    /**
     * 数据提供者
     */
    dataProvider: IDataProvider;
    /**
     * 当前的 sheet 的索引，根据这个来获取数据
     */
    private sheetIndex;
    workbook: Workbook;
    rangeCache: RangeCache;
    /**
     * 水平滚动条位置
     */
    private scrollLeft;
    /**
     * 垂直滚动条位置
     */
    private scrollTop;
    /**
     * 行高，这里只记录自定义的行高
     */
    customRowHeight: number[];
    /**
     * 列宽，这里只记录自定义的列宽
     */
    customColumnWidth: number[];
    /**
     * 渲染配置项
     */
    renderOptions: ExcelRenderOptions;
    /**
     * 表头的宽度，这个会随着滚动而变化，这里设置个初始值
     */
    rowHeaderWidth: number;
    /**
     * 表头的高度，这个是固定的，如果不显示
     */
    colHeaderHeight: number;
    /**
     * 缩放比例
     */
    private zoomLevel;
    /**
     * 选区
     */
    selection?: SheetSelection;
    sheetData: ISheet;
    private currentSheetView;
    /**
     * 内容及冻结区的访问，主要用于判断当前鼠标下是哪个单元格
     */
    private dataViewRange?;
    private frozenViewRange?;
    /**
     * 默认字体大小，用于一些计算
     */
    defaultFontSize: FontSize;
    /**
     * 最新的 AutoFilterIcon 图标实例，主要用于关闭
     */
    private lastAutoFilterIcon?;
    constructor(sheetIndex: number, dataProvider: IDataProvider, sheetData: ISheet, workbook: Workbook, renderOptions: ExcelRenderOptions);
    handleChangeSelection(selection: SheetSelection): void;
    getSheetName(): string;
    /**
     * 获取当前 sheet 的视图设置
     */
    getCurrentSheetView(): CT_SheetView;
    getScrollLeft(): number;
    setScrollLeft(scrollLeft: number): void;
    updateViewRange(viewRange: ViewRange): void;
    updateFrozenViewRange(viewRange: FrozenViewRange): void;
    getViewRange(): ViewRange | undefined;
    getFrozenViewRange(): FrozenViewRange | undefined;
    /**
     * 增量修改水平滚动条
     */
    deltaScrollLeft(delta: number): void;
    getScrollTop(): number;
    setScrollTop(scrollTop: number): void;
    /**
     * 增量修改垂直滚动条
     */
    deltaScrollTop(delta: number): void;
    /**
     * 判断当前坐标下是什么
     * @param offsetX
     * @param offsetY
     * @returns
     */
    hitTest(offsetX: number, offsetY: number): HitTestResult | null;
    /**
     * 判断是否点到图形上
     */
    hitTestDrawing(offsetX: number, offsetY: number): HitTestResult | null;
    /**
     * 将绝对地址转成在视图内的相对地址
     */
    absolutePositionToRelativePosition(absolutePos: Rect): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    /**
     * 是否显示网格线，如果没有设置就使用 sheet 里的设置
     */
    showGridLines(): boolean | undefined;
    showRowColHeaders(): boolean | undefined;
    /**
     * 滚动时需要动态更新当前表的表头宽度
     */
    updateRowHeaderWidth(viewRange: ViewRange): void;
    /**
     * 获取表头的大小
     */
    getRowColSize(): {
        rowHeaderWidth: number;
        colHeaderHeight: number;
    };
    /**
     * 获取范围内的数据
     */
    getCellValueByRange(range: RangeRef, includeHidden?: boolean): CellValue[];
    /**
     * 获取多个范围内的数据
     */
    getCellValueByRanges(ranges: RangeRef[], includeHidden?: boolean): CellValue[];
    /**
     * 返回可视区域的数据及位置信息
     */
    getViewPointData(viewRange: ViewRange): DisplayData[];
    getSheetRowData(row: number): CellData[];
    getRowHeight(row: number): number;
    getColWidth(col: number): number;
    getTotalWidth(): number;
    getTotalHeight(): number;
    /**
     * 获取某个单元格的实际位置信息
     * 如果这个单元格属于某个合并单元格，这里将返回合并单元格的位置信息
     *
     * @param x 单元格的 x 坐标
     * @param y 单元格的 y 坐标
     */
    getCellDisplaySize(row: number, col: number, x: number, y: number): {
        x: number;
        y: number;
        height: number;
        width: number;
    };
    /**
     * 获取最大行数
     */
    getMaxRow(): number;
    /**
     * 获取最大列数
     */
    getMaxCol(): number;
    private rowPositionCache;
    private colPositionCache;
    /**
     * 获取可视范围内的数据范围，这个包括没有数据的部分，这个函数的性能很关键
     * @returns 从 0 开始的行和列
     */
    getViewPointRange(width: number, height: number): ViewRange;
    getFrozenTopLeftViewPointRange(xSplit: number, ySplit: number): ViewRange;
    getFrozenTopViewPointRange(ySplit: number, width: number): ViewRange;
    getFrozenLeftViewPointRange(xSplit: number, height: number): ViewRange;
    /**
     * 获取单元格样式及数据
     */
    getCellInfo(row: number, col: number): CellInfo;
    getCellData(row: number, col: number): CellData | undefined;
    getCellValue(row: number, col: number): CellValue;
    /**
     * 获取某个单元格在渲染时的位置信息，这个方法可以获取到没在渲染区域内的单元格位置
     */
    getCellPosition(row: number, col: number): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    getMergeCells(): RangeRef[];
    getSelection(): SheetSelection | undefined;
    maxDrawingHeightAndWidthCache: {
        height: number;
        width: number;
    } | null;
    /**
     * 获取最大 drawing 的高度和宽度，这个主要是为了滚动条计算
     */
    getMaxDrawingHeightAndWidth(): {
        height: number;
        width: number;
    };
    /**
     * 判断是否是某个合并单元格
     */
    isMergeCell(mergeCell: RangeRef): boolean;
    getDrawing(): import("../types/IDrawing").IDrawing | null;
    /**
     * 获取当前 sheet 的显示区域
     */
    getDisplayRect(): Rect;
    /**
     * 获取数据区域的显示区域
     */
    getDataDisplayRect(): Rect;
    getZoomLevel(): number;
    setZoomLevel(zoomLevel: number): void;
    getIndex(): number;
    getConditionalFormatting(): import("../../openxml/ExcelTypes").CT_ConditionalFormatting[];
    getRangeCache(): RangeCache;
    getWorkbook(): Workbook;
    getExtLst(): import("../types/CT_ExtensionList").CT_ExtensionList | undefined;
    getSparklineGroups(): import("../types/X14Sparkline/X14SparklineGroup").X14SparklineGroup[];
    isHidden(): boolean;
    getTableParts(): import("../../openxml/ExcelTypes").CT_Table[];
    isRowHidden(row: number): boolean;
    isColHidden(col: number): boolean;
    getAutoFilter(): CT_AutoFilter | undefined;
    getTables(): import("../../openxml/ExcelTypes").CT_Table[];
    getLastAutoFilterIcon(): AutoFilterIconUI | undefined;
    setLastAutoFilterIcon(autoFilterIcon: AutoFilterIconUI): void;
    translate(key: EnKeys): string;
    /**
     * 同步 AutoFilter，当 AutoFilter 有变化的时候调用
     */
    syncAutoFilter(): void;
    /**
     * 应用单个 AutoFilter
     */
    applyAutoFilter(autoFilter: CT_AutoFilter, headerRowCount?: number): void;
    getSheetPr(): import("../../openxml/ExcelTypes").CT_SheetPr | undefined;
    getTabColor(): string;
    updateCellValue(row: number, col: number, data: CellData): void;
    /**
     * 修改行高
     * @param row
     * @param height 行高，使用 px
     */
    setRowHeight(row: number, height: number): void;
    setColWidth(col: number, width: number): void;
}

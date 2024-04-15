/**
 * 这个类作为主要入口，包含运行时数据及相关操作
 */
import type { ExcelRenderOptions } from './sheet/ExcelRenderOptions';
import { EventEmitter } from '../util/EventEmitter';
import { StyleSheet } from './StyleSheet';
import { ExcelRender } from './render/ExcelRender';
import { Sheet } from './sheet/Sheet';
import { IDataProvider } from './types/IDataProvider';
import { SheetSelection } from './render/selection/SheetSelection';
import { Scroll } from './render/scroll/Scroll';
import { FormulaBar } from './render/formulaBar/FormulaBar';
import { SheetTabBar } from './render/sheetTab/SheetTabBar';
import { IWorkbook } from './types/IWorkbook';
import { EnKeys } from './lang/en_US';
import { RangeRef } from './types/RangeRef';
export declare class Workbook {
    /**
     * 总容器
     */
    container: HTMLElement;
    /**
     * 顶部公式栏容器
     */
    formulaBarContainer?: HTMLElement;
    /**
     * 内容容器，包括表头
     */
    contentContainer?: HTMLElement;
    /**
     * 数据容器，不包括表头
     */
    dataContainer?: HTMLElement;
    /**
     * 底部 sheet 页签容器
     */
    sheetTabBarContainer?: HTMLElement;
    workbookData: IWorkbook;
    /**
     * 数据提供者
     */
    dataProvider: IDataProvider;
    /**
     * 当前工作表
     */
    private currentSheet?;
    /**
     * 所有的工作表
     */
    sheets: Sheet[];
    /**
     * 样式表
     */
    styleSheet: StyleSheet;
    /**
     * 渲染配置项
     */
    renderOptions: ExcelRenderOptions;
    /**
     * 公式栏
     */
    formulaBar: FormulaBar;
    /**
     * 渲染实例
     */
    excelRender: ExcelRender;
    /**
     * 底部 sheet 页签
     */
    sheetTabBar: SheetTabBar;
    translator: (key: EnKeys) => string;
    /**
     * UI 交互事件监听，主要是和数据无关的变化
     */
    uiEvent: EventEmitter<{
        /**
         * 水平滚动
         */
        SCROLL_X: (x: number) => void;
        /**
         * 垂直滚动
         */
        SCROLL_Y: (y: number) => void;
        /**
         * 滚动后触发
         */
        AFTER_SCROLL: (scroll: Scroll) => void;
        /**
         * 切换 sheet
         */
        SWITCH_SHEET: (sheet: Sheet) => void;
        /**
         * 选区变化
         */
        CHANGE_SELECTION: (selection: SheetSelection) => void;
        /**
         * 拖动行网格线过程中
         */
        DRAG_ROW_GRID_LINE: (y: number) => void;
        /**
         * 拖动列网格线过程中
         */
        DRAG_COL_GRID_LINE: (x: number) => void;
        /**
         * 拖动列网格线结束
         */
        DRAG_COL_GRID_LINE_END: (col: number, width: number) => void;
        /**
         * 拖动行网格线结束
         */
        DRAG_ROW_GRID_LINE_END: (row: number, height: number) => void;
        /**
         * 改变缩放等级
         */
        CHANGE_ZOOM_LEVEL: (zoomLevel: number) => void;
        /**
         * 复制选区
         */
        COPY_SELECTION: () => void;
        /**
         * 应用自动过滤
         */
        APPLY_AUTO_FILTER: (sheetIndex: number) => void;
        /**
         * 范围内的数据更新
         */
        UPDATE_RANGE: (sheetIndex: number, rangeRef: RangeRef) => void;
        UPDATE_ROW_HEIGHT: (row: number, height: number) => void;
        UPDATE_COL_WIDTH: (col: number, width: number) => void;
    }>;
    constructor(container: HTMLElement, workbookData: IWorkbook, dataProvider: IDataProvider, renderOptions: ExcelRenderOptions, sheetName?: string);
    initActiveSheet(): void;
    /**
     * 初始化 dom 结构，这个要先运行才能保证后面 Canvas 能正确拿到高宽
     */
    initDom(container: HTMLElement): void;
    /**
     * 销毁
     */
    destroy(): void;
    handleKeydown(e: KeyboardEvent): void;
    handlePaste(e: ClipboardEvent): void;
    /**
     * 初始渲染
     */
    render(): void;
    /**
     * 设置当前显示的 sheet
     */
    setActiveSheet(sheetName?: string): void;
    /**
     * 获取当前的 sheet
     */
    getActiveSheet(): Sheet;
    /**
     * 查找对应的 sheet
     */
    getSheetByName(sheet: string): Sheet | null;
    /**
     * 获取样式表
     */
    getStyleSheet(): StyleSheet;
    /**
     * 获取可视区域大小
     */
    getViewpointSize(): {
        width: number;
        height: number;
    };
    getDataProvider(): IDataProvider;
    is1904(): boolean;
    getContainer(): HTMLElement;
    getDataContainer(): HTMLElement;
    updateDataContainerSize(rowHeaderWidth: number, colHeaderHeight: number): void;
    getWorkbookData(): IWorkbook;
    /**
     * 在 iframe 中打印
     */
    renderInIframe(iframe: HTMLIFrameElement): void;
}

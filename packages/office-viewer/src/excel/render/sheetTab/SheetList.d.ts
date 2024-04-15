import { Workbook } from '../../Workbook';
import { ExcelRenderOptions } from '../../sheet/ExcelRenderOptions';
/**
 * Sheet 列表
 */
export declare class SheetList {
    sheetTabs: HTMLElement[];
    sheetMenuItems: HTMLElement[];
    workbook: Workbook;
    sheetMenu: HTMLElement;
    sheetListContainer: HTMLElement;
    sheetList: HTMLElement;
    scrollLeft: number;
    sheetListWidth: number;
    leftNav: HTMLElement;
    rightNav: HTMLElement;
    constructor(container: HTMLElement, workbook: Workbook, renderOptions: ExcelRenderOptions);
    initDOM(container: HTMLElement): void;
    renderSheetMenu(container: HTMLElement): void;
    renderSheetMenuList(sheetMenu: HTMLElement): void;
    /**
     * 改变 sheet 水平滚动的左右导航
     */
    renderNav(container: HTMLElement): void;
    syncNavStatus(): void;
    /**
     * 支持在 sheet 上使用滚轮
     */
    handleWheel(e: WheelEvent): void;
    updateScrollLeft(delta: number): void;
    /**
     * 初始化的时候保证激活的 sheet 可见
     * @param offsetX 当前 sheet 的偏移量
     */
    makeActiveSheetVisible(): void;
    /**
     * 渲染 sheet 列表，如果 sheet 有变化可以重新调用这个方法
     * @param sheetList sheet 列表容器
     * @param firstRender 是否是第一次渲染，第一次渲染会调用 makeActiveSheetVisible
     */
    renderSheets(sheetList: HTMLElement, firstRender?: boolean): void;
    updateActiveTab(): void;
}

/**
 * 实现 Excel 渲染
 */
import type { Workbook } from '../Workbook';
import { ScrollBar } from './ScrollBar';
import type { ExcelRenderOptions } from '../sheet/ExcelRenderOptions';
import { IDataProvider } from '../types/IDataProvider';
import { FontSize } from '../types/FontSize';
import { SelectionCanvas } from './SelectionCanvas';
import { Scroll } from './scroll/Scroll';
import { LinkPosition } from './cell/LinkPosition';
import { ResizeBox } from './drawing/ResizeBox';
import { AutoFilterIconUI } from './autoFilter/AutoFilterIconUI';
export declare class ExcelRender {
    /**
     * 主内容区
     */
    private contentContainer;
    /**
     * 数据区
     */
    private dataContainer;
    private workbook;
    /**
     * 主内容区的 Canvas
     */
    private sheetCanvas;
    /**
     * 选区的 Canvas
     */
    private selectionCanvas;
    /**
     * 滚动条
     */
    scrollbar: ScrollBar;
    /**
     * 调整大小的操作框
     */
    resizeBox: ResizeBox;
    renderOptions: ExcelRenderOptions;
    dataProvider: IDataProvider;
    /**
     * 默认字体大小，用于一些计算
     */
    defaultFontSize: FontSize;
    /**
     * 上一次滚动的位置，这个是为了滚动时固定某个方向
     */
    lastScroll: Scroll;
    linkPositionCache: LinkPosition[];
    autoFiltersUI: AutoFilterIconUI[];
    constructor(contentContainer: HTMLElement, dataContainer: HTMLElement, workbook: Workbook, dataProvider: IDataProvider, renderOptions: ExcelRenderOptions);
    lastScrollDirection: 'vertical' | 'horizontal';
    lastScrollDirectionTime: number;
    scrollDirectionLockTime: number;
    getSelectionCanvas(): SelectionCanvas;
    watchResize(): void;
    /**
     * 处理滚轮事件
     */
    handleWheel(event: WheelEvent): boolean;
    /**
     * 处理单元格双击事件
     */
    handleDblclick(event: MouseEvent): void;
    /**
     * 处理鼠标按下事件
     */
    handleMousedown(event: MouseEvent): void;
    /**
     * 处理鼠标松开事件，目前主要是处理点击链接的场景
     */
    handleMouseup(event: MouseEvent): void;
    /**
     * 处理鼠标移动事件
     */
    handleMousemove(event: MouseEvent): void;
    /**
     * 获取鼠标相对位置，会考虑缩放
     */
    getMouseRelativePosition(event: MouseEvent): {
        offsetX: number;
        offsetY: number;
    };
    /**
     * 是否忽略这个滚动方向
     * @param isScrollingHorizontally
     * @returns 如果返回 true 说明被锁定了，这时要忽略后面的行为
     */
    ignoreScrollDirection(isScrollingHorizontally: boolean): boolean;
    afterScroll(scroll: Scroll): void;
    /**
     * 获取可视区域高宽
     */
    getWidthAndHeight(): {
        width: number;
        height: number;
    };
    /**
     * 是否需要重新绘制，主要是渲染过程中发现行高变化等情况
     */
    needReDraw: boolean | number;
    /**
     * 渲染总入库，包括数据区域和选区
     */
    draw(fromReRender?: boolean): Promise<void>;
    /**
     * 已经加载的字体
     */
    loadedFont: Set<string>;
    /**
     * 加载字体
     */
    loadFont(): Promise<void>;
    setNeedReDraw(): void;
    /**
     * 销毁
     */
    destroy(): void;
}

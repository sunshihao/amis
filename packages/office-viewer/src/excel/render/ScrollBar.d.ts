/**
 * 模拟滚动条，目前暂时只支持浏览模式，也就是最大高宽是固定的
 */
import type { Workbook } from '../Workbook';
export type ScrollBarOptions = {
    /**
     * 是否自动隐藏
     */
    autoHide: boolean;
    scrollBarSize: number;
};
export declare class ScrollBar {
    /**
     * 容器
     */
    container: HTMLElement;
    /**
     * 当前 workbook
     */
    workbook: Workbook;
    /**
     * 垂直滚动条的轨道
     */
    yScrollBarTruck: HTMLElement;
    /**
     * 定义垂直滚动条最大高度
     */
    yScrollBarTotal: HTMLElement;
    /**
     * 垂直滚动条内容区域
     */
    yScrollBarContent: HTMLElement;
    /**
     * 水平滚动条的轨道
     */
    xScrollBarTruck: HTMLElement;
    /**
     * 水平滚动条最大宽度
     */
    xScrollBarTotal: HTMLElement;
    /**
     * 水平滚动条
     */
    xScrollBarContent: HTMLElement;
    /**
     * 滚动条配置项
     */
    scrollOptions: ScrollBarOptions;
    constructor(container: HTMLElement, workbook: Workbook, scrollOptions?: Partial<ScrollBarOptions>);
    /**
     * 同步滚动条
     */
    sync(): void;
}

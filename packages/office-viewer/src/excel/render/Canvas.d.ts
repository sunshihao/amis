/**
 * Canvas 的简单封装，方便绘制图形
 */
import { Line } from './Line';
import { Widget } from './widget/Widget';
export declare class Canvas {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    widgets: Map<string, Widget>;
    /**
     * 缩放比例
     */
    zoom: number;
    ratio: number;
    constructor(width: number, height: number, zoom: number, className: string);
    private setZoom;
    renderWidget(widget: Widget): Promise<void>;
    lastTarget: Widget | null;
    /**
     * 鼠标移动的时候判断是否在某个 widget 上
     */
    handleMousemove(event: MouseEvent): void;
    updateCursor(cursor: string): void;
    hasWidget(key: string): boolean;
    addWidget(key: string, widget: Widget): void;
    getRealRatio(): number;
    getCanvasElement(): HTMLCanvasElement;
    getContext(): CanvasRenderingContext2D;
    updateZoom(zoom: number): void;
    /**
     * 清空画布
     */
    clear(width?: number, height?: number): void;
    clearRect(x: number, y: number, width: number, height: number): void;
    clearRectPadding(x: number, y: number, width: number, height: number, padding: number): void;
    /**
     * 绘制线条
     * @param line 线条配置
     * @param color
     * @param width
     */
    drawLine(line: Line, color: string, width?: number): void;
    setLineDash(line: Line, segments: number[], color: string, width?: number): void;
    /**
     * 绘制多个线条
     * @param line 多个线条配置
     * @param width
     * @param height
     * @param color
     */
    drawLines(lines: Line[], color: string, width?: number): void;
    /**
     * 绘制字体
     * @param font
     * @param color
     * @param text
     * @param x
     * @param y
     * @param textBaseline
     */
    drawText(font: string, color: string | undefined, text: string, x: number, y: number, textBaseline?: CanvasTextBaseline): void;
    /**
     * 绘制矩形
     */
    drawRect(x: number, y: number, width: number, height: number, color: string): void;
    /**
     * 绘制带 padding 的矩形
     */
    drawRectWithPadding(x: number, y: number, width: number, height: number, color: string, padding: number): void;
    drawRectLinearGradientWithPadding(x: number, y: number, width: number, height: number, color: string, colorEnd: string, padding: number): void;
    /**
     * 绘制带透明度的矩形
     */
    drawAlphaRect(x: number, y: number, width: number, height: number, color: string, alpha: number): void;
    /**
     * 绘制带透明度的矩形，加 padding
     */
    drawAlphaRectPadding(x: number, y: number, width: number, height: number, padding: number, color: string, alpha: number): void;
    /**
     * 绘制矩形边框
     */
    drawStrokeRect(x: number, y: number, width: number, height: number, color: string, lineWidth?: number): void;
    /**
     * 绘制带 padding 的矩形边框
     */
    drawStrokeRectPadding(x: number, y: number, width: number, height: number, color: string, lineWidth?: number, padding?: number): void;
    drawImage(url: string, x: number, y: number, width: number, height: number): void;
    imageCache: Map<string, OffscreenCanvas>;
    /**
     * 绘制图片，并使用缓存
     * @param url
     * @param x
     * @param y
     * @param width
     * @param height
     */
    drawImageWithCache(url: string, x: number, y: number, width: number, height: number): Promise<void>;
    /**
     * 运行绘制并缓存
     */
    customDrawWithCache(cacheKey: string, x: number, y: number, width: number, height: number, func: (ctx: OffscreenCanvasRenderingContext2D, ratio: number) => void): Promise<void>;
    /**
     * 清空缓存
     */
    clearCache(): void;
}

export interface TextSize {
    /**
     * 文本宽度，目前主要用这个
     */
    width: number;
    /**
     * 实际宽度，这个在斜体的时候比 width 长，文本为数字的时候又比 width 短
     */
    boundingWidth: number;
    /**
     * 文本高度
     */
    height: number;
    /**
     * 字体高度
     */
    fontHeight: number;
}
/**
 * 测量字体大小，这个会计算最终真实大小及字体大小，带缓存，需要自己 save state
 */
export declare function measureTextWithCache(ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, font: string, text: string): TextSize;
export declare function inValidTextSizeCache(): void;

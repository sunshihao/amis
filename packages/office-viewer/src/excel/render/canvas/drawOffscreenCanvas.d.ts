/**
 * 使用 OffscreenCanvas 渲染后获取内容
 * @param func 执行的调用函数
 * @returns
 */
export declare function drawOffscreenCanvas(ratio: number, width: number, height: number, func: (ctx: OffscreenCanvasRenderingContext2D) => void): OffscreenCanvas;

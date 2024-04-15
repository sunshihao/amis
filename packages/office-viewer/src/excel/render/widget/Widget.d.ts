/**
 * canvas 渲染中的小部件
 */
import type { Canvas } from '../Canvas';
export declare abstract class Widget {
    x: number;
    y: number;
    width: number;
    height: number;
    ratio: number;
    canvas: Canvas;
    constructor(x: number, y: number, width: number, height: number, canvas: Canvas);
    getClientBounding(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    updateScale(): void;
    updateX(x: number): void;
    updateY(y: number): void;
    /**
     * 判断某个坐标点是否在这个小部件内
     */
    isPointInWidget(x: number, y: number): boolean;
    onMouseover(): void;
    onMouseout(): void;
    abstract draw(): Promise<ImageData>;
}

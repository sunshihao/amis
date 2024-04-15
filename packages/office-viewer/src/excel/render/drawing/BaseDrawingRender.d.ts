import { Rect } from '../Rect';
/**
 * Drawing 渲染基类
 */
export declare class BaseDrawingRender {
    drawingContainer: HTMLElement;
    constructor(container: HTMLElement, displayRect: Rect, gid: string, className: string);
    hide(): void;
    show(): void;
    updatePosition(displayRect: Rect): void;
}

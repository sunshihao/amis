/**
 * 矩形定义
 */
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
/**
 * 判断点是否在矩形内
 */
export declare function pointInRect(x: number, y: number, rect: Rect): boolean;
/**
 * 判断两个矩形是否相交
 */
export declare function rectIntersect(rect1: Rect, rect2: Rect): boolean;

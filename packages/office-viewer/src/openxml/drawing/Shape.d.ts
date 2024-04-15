/**
 * Shape 相关的定义
 */
import { Path } from './Path';
export interface ShapeGuide {
    n: string;
    f: string;
}
export interface Rect {
    b: string;
    l: string;
    r: string;
    t: string;
}
export interface Shape {
    avLst?: ShapeGuide[];
    gdLst?: ShapeGuide[];
    rect?: Rect;
    pathLst?: Path[];
}

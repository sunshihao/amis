/**
 * 解析 shape
 */
import { Path, PathPoint } from '../../openxml/drawing/Path';
import { Shape, ShapeGuide } from '../../openxml/drawing/Shape';
export declare function parsePts(element: Element): PathPoint[];
export declare function parsePath(element: Element): Path;
export declare function parsePathLst(element: Element): Path[];
export declare function parseShapeGuide(element: Element): ShapeGuide[];
export declare function parseShape(element: Element): Shape;

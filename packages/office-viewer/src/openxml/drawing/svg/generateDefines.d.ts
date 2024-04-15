import { Path } from '../Path';
export type Var = Record<string, number>;
export type Point = {
    x: number;
    y: number;
};
/**
 *
 * 转成 svg path 里的定义
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
 */
export declare function generateDefines(path: Path, vars: Var, prevPoint: Point[]): string;

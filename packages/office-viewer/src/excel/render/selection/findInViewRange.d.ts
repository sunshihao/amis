import { ViewRange } from '../../sheet/ViewRange';
/**
 * 在视图范围内查找
 */
export declare function findInViewRange(offsetX: number, offsetY: number, gridLineHitRange: number, viewRange: ViewRange): {
    row: number;
    y: number;
    height: number;
    type: "cell" | "row-header" | "row-grid";
    col: number;
    x: number;
    width: number;
};

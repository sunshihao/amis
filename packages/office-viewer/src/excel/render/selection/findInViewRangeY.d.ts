import { ViewRange } from '../../sheet/ViewRange';
/**
 * 在视图范围垂直方向内查找
 */
export declare function findInViewRangeY(offsetY: number, viewRange: ViewRange, gridLineHitRange: number, isHeader?: boolean): {
    row: number;
    y: number;
    height: number;
    type: "cell" | "row-header" | "row-grid";
};

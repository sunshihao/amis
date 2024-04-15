import { ViewRange } from '../../sheet/ViewRange';
/**
 * 在视图范围水平方向内查找
 */
export declare function findInViewRangeX(offsetX: number, viewRange: ViewRange, gridLineHitRange: number, isHeader?: boolean): {
    col: number;
    x: number;
    width: number;
    type: "cell" | "col-header" | "col-grid";
};

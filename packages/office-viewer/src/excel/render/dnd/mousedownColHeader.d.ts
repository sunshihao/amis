import { Workbook } from '../../Workbook';
import { RangeRef } from '../../types/RangeRef';
import { HitTestResult } from '../selection/hitTest';
/**
 * 点击到列表头
 * @param workbook
 * @param hitTestResult
 * @returns
 */
export declare function mousedownColHeader(workbook: Workbook, hitTestResult: HitTestResult): {
    user: string;
    region: import("../../sheet/ViewRange").Region;
    selectType: "cell" | "corner" | "drawing" | "row-header" | "col-header" | "row-grid" | "col-grid";
    activeCell: RangeRef;
    sheetIndex: number;
    cellRanges: {
        endRow: number;
        startRow: number;
        startCol: number;
        endCol: number;
    }[];
};

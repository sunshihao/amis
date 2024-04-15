import { Workbook } from '../../Workbook';
import { RangeRef } from '../../types/RangeRef';
import { HitTestResult } from '../selection/hitTest';
/**
 * 点击到行表头
 * @param workbook
 * @param hitTestResult
 * @returns
 */
export declare function mousedownRowHeader(workbook: Workbook, hitTestResult: HitTestResult): {
    user: string;
    region: import("../../sheet/ViewRange").Region;
    selectType: "cell" | "corner" | "drawing" | "row-header" | "col-header" | "row-grid" | "col-grid";
    activeCell: RangeRef;
    sheetIndex: number;
    cellRanges: {
        endCol: number;
        startRow: number;
        startCol: number;
        endRow: number;
    }[];
};

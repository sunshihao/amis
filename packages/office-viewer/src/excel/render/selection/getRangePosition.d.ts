import { Workbook } from '../../Workbook';
import { Region } from '../../sheet/ViewRange';
import { RangeRef } from '../../types/RangeRef';
/**
 * 算出选中区域的位置信息
 */
export declare function getRangePosition(workbook: Workbook, region: Region, cellRange: RangeRef): {
    x: number;
    y: number;
    width: number;
    height: number;
};

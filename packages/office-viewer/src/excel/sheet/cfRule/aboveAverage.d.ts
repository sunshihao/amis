import { CT_CfRule } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { RangeRef } from '../../types/RangeRef';
import { Sheet } from '../Sheet';
export declare function getAverageValue(values: number[]): number | null;
/**
 * 对大于或小于平均值的应用样式
 */
export declare function aboveAverage(sheet: Sheet, cellInfo: CellInfo, ranges: RangeRef[], cfRule: CT_CfRule): boolean;

import { CT_CfRule } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { RangeRef } from '../../types/RangeRef';
import { Sheet } from '../Sheet';
export declare function getRankValue(values: number[], cfRule: CT_CfRule): number | null;
/**
 * 处理 top 值的规则
 */
export declare function top10(sheet: Sheet, cellInfo: CellInfo, ranges: RangeRef[], cfRule: CT_CfRule): boolean;

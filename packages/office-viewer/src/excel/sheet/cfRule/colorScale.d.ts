import { CT_CfRule } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { RangeRef } from '../../types/RangeRef';
import { Sheet } from '../Sheet';
/**
 * 色阶
 */
export declare function colorScale(sheet: Sheet, cellInfo: CellInfo, ranges: RangeRef[], cfRule: CT_CfRule): boolean;

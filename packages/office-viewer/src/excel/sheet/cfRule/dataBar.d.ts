import { CT_CfRule } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { RangeRef } from '../../types/RangeRef';
import { Sheet } from '../Sheet';
/**
 * dataBar
 */
export declare function dataBar(sheet: Sheet, cellInfo: CellInfo, ranges: RangeRef[], cfRule: CT_CfRule): boolean;

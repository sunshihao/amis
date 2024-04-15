import { CT_CfRule } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { RangeRef } from '../../types/RangeRef';
import { Sheet } from '../Sheet';
/**
 * 应用图标样式
 */
export declare function iconSet(sheet: Sheet, cellInfo: CellInfo, ranges: RangeRef[], cfRule: CT_CfRule): boolean;

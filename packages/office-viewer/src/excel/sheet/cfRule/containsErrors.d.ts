import { CT_CfRule } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { Sheet } from '../Sheet';
/**
 * 包含错误
 */
export declare function containsErrors(sheet: Sheet, cellInfo: CellInfo, cfRule: CT_CfRule): boolean;

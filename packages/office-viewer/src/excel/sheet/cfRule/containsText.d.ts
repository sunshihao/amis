import { CT_CfRule } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { Sheet } from '../Sheet';
/**
 * 包含文本
 */
export declare function containsText(sheet: Sheet, cellInfo: CellInfo, cfRule: CT_CfRule): boolean;

import { CT_CfRule } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { Sheet } from '../Sheet';
/**
 * 空内容
 */
export declare function containsBlanks(sheet: Sheet, cellInfo: CellInfo, cfRule: CT_CfRule): boolean;

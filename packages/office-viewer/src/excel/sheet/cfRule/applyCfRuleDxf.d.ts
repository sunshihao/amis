import { CT_CfRule } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { Sheet } from '../Sheet';
/**
 * 应用单元格样式，xdf 是指 Differential formatting，所以只应用部分样式
 */
export declare function applyCfRuleDxf(cfRule: CT_CfRule, sheet: Sheet, cellInfo: CellInfo): void;

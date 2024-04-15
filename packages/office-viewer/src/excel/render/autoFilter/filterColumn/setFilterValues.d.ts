import { CT_AutoFilter } from '../../../../openxml/ExcelTypes';
import { CheckBoxOption } from '../../ui/CheckBox';
/**
 * 获取配置中的过滤值，目前子支持 val 的情况
 */
export declare function setFilterValues(autoFilter: CT_AutoFilter, colIndex: number, options: CheckBoxOption[]): void;

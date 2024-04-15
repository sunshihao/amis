import { CT_CustomFilter } from '../../../../openxml/ExcelTypes';
import { OperatorTypeUI } from './OperatorTypeUI';
/**
 * 将界面上的操作符转换为 xml 中的操作符
 */
export declare function fromOperatorUI(operator: OperatorTypeUI, value: string): CT_CustomFilter;

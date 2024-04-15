import { ST_FilterOperator } from '../../../../openxml/ExcelTypes';
import { OperatorTypeUI } from './OperatorTypeUI';
/**
 * 将 xml 中的操作符转换为界面上的操作符，界面操作的格式会更多
 */
export declare function toOperatorUI(operator: ST_FilterOperator, value: string): OperatorTypeUI;

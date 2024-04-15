import { ST_FilterOperator } from '../../../openxml/ExcelTypes';
import { CellValueNum } from './CellValueNum';
/**
 * 判断是否匹配
 * @param operator
 * @param val
 * @param cellValueNum
 */
export declare function evalCustomFilter(operator: ST_FilterOperator | undefined, val: string, cellValueNum: CellValueNum): boolean;

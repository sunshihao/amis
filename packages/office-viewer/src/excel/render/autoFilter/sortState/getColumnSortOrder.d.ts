/**
 * 获取配置中这一列的排序状态
 */
import { CT_SortState } from '../../../../openxml/ExcelTypes';
import { RangeRef } from '../../../types/RangeRef';
export declare function getColumnSortOrder(colIndex: number, rangeRef: RangeRef, sortState?: CT_SortState): "none" | "desc" | "asc";

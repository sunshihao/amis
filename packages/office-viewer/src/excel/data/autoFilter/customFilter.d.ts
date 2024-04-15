import { CT_CustomFilters } from '../../../openxml/ExcelTypes';
import { CellValueNum } from './CellValueNum';
/**
 * 自定义筛选
 */
export declare function customFilter(values: CellValueNum[], customFilters?: CT_CustomFilters): Set<number>;

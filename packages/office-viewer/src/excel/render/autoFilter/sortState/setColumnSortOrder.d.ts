import { CT_AutoFilter } from '../../../../openxml/ExcelTypes';
import { Sheet } from '../../../sheet/Sheet';
import { RangeRef } from '../../../types/RangeRef';
/**
 * 设置列排序，这里实际上应该是命令，但目前只当成一种状态变化，主要是因为现阶段只支持浏览
 */
export declare function setColumnSortOrder(sheet: Sheet, colIndex: number, rangeRef: RangeRef, autoFilter: CT_AutoFilter, sortOrder: 'asc' | 'desc', headerRowCount: number): void;

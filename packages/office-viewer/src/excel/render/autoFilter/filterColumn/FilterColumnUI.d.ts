import { CT_AutoFilter } from '../../../../openxml/ExcelTypes';
import { Sheet } from '../../../sheet/Sheet';
import { RangeRef } from '../../../types/RangeRef';
import type { AutoFilterIconUI } from '../AutoFilterIconUI';
/**
 * 对应 filterColumn 配置项
 */
export declare class FilterColumnUI {
    constructor(autoFilterIcon: AutoFilterIconUI, container: HTMLElement, sheet: Sheet, autoFilter: CT_AutoFilter, rangeRef: RangeRef, colIndex: number, headerRowCount: number);
}

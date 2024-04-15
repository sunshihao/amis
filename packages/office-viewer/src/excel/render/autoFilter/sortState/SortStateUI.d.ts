import { CT_AutoFilter } from '../../../../openxml/ExcelTypes';
import { Sheet } from '../../../sheet/Sheet';
import { RangeRef } from '../../../types/RangeRef';
import type { AutoFilterIconUI } from '../AutoFilterIconUI';
import { SortButtonUI } from './SortButtonUI';
/**
 * 排序相关的操作
 */
export declare class SortStateUI {
    sortContainer: HTMLElement;
    sortAscButton: SortButtonUI;
    sortDescButton: SortButtonUI;
    autoFilter: CT_AutoFilter;
    rangeRef: RangeRef;
    colIndex: number;
    headerRowCount: number;
    sheet: Sheet;
    autoFilterIcon: AutoFilterIconUI;
    constructor(autoFilterIcon: AutoFilterIconUI, container: HTMLElement, sheet: Sheet, autoFilter: CT_AutoFilter, rangeRef: RangeRef, colIndex: number, headerRowCount?: number);
    clickButton(sortState: 'asc' | 'desc'): void;
    syncButtonActive(): void;
}

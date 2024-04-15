import { CT_AutoFilter } from '../../../openxml/ExcelTypes';
import { Sheet } from '../../sheet/Sheet';
import { RangeRef } from '../../types/RangeRef';
import type { AutoFilterIconUI } from './AutoFilterIconUI';
export declare class AutoFilterMenuUI {
    menuContainer: HTMLElement;
    sheet: Sheet;
    autoFilter: CT_AutoFilter;
    colIndex: number;
    constructor(autoFilterIcon: AutoFilterIconUI, container: HTMLElement, sheet: Sheet, autoFilter: CT_AutoFilter, rangeRef: RangeRef, colIndex: number, headerRowCount?: number);
    hide(): void;
    show(): void;
}

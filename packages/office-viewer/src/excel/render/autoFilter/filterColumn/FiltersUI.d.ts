import { CT_AutoFilter } from '../../../../openxml/ExcelTypes';
import { Sheet } from '../../../sheet/Sheet';
import { AutoFilterIconUI } from '../AutoFilterIconUI';
/**
 * 按文本分类进行过滤
 */
export declare class FiltersUI {
    filtersContainer: HTMLElement;
    constructor(autoFilterIcon: AutoFilterIconUI, container: HTMLElement, sheet: Sheet, autoFilter: CT_AutoFilter, colIndex: number, headerRowCount: number, texts: string[]);
}

import { CT_AutoFilter, CT_CustomFilter } from '../../../../openxml/ExcelTypes';
import { Sheet } from '../../../sheet/Sheet';
import { Input } from '../../ui/Input';
import { Radio } from '../../ui/Radio';
import { Select } from '../../ui/Select';
import type { AutoFilterIconUI } from '../AutoFilterIconUI';
import { OperatorOptions, OperatorTypeUI } from './OperatorTypeUI';
type CustomFilterItem = {
    select: Select<OperatorTypeUI>;
    input: Input;
};
type AND = 'and' | 'or';
export declare class CustomFiltersUI {
    customFiltersContainer: HTMLDivElement;
    /**
     * 操作符选项，会根据值不同类型变化
     */
    operatorOptions: OperatorOptions[];
    /**
     * 值类型
     */
    valueType: 'text' | 'number' | 'date';
    sheet: Sheet;
    customFilterItems: CustomFilterItem[];
    autoFilter: CT_AutoFilter;
    colIndex: number;
    headerRowCount: number;
    autoFilterIcon: AutoFilterIconUI;
    texts: string[];
    andRadio?: Radio<AND>;
    constructor(autoFilterIcon: AutoFilterIconUI, container: HTMLElement, sheet: Sheet, autoFilter: CT_AutoFilter, colIndex: number, headerRowCount: number, texts: string[], isDate: boolean);
    /**
     * 构建操作符选项
     */
    buildOperatorOptions(): void;
    /**
     * 构建 and 或 or 选项
     */
    buildCustomFilterItemAnd(and?: boolean): void;
    buildCustomFilterItem(customFilter?: CT_CustomFilter): void;
    /**
     * 同步自定义筛选
     */
    syncCustomFilters(): void;
}
export {};

import { CheckBox, CheckBoxOption } from './CheckBox';
import { Input } from './Input';
/**
 * 多选框列表，目前用在自动筛选的条件选择
 */
export declare class CheckBoxList {
    options: CheckBoxOption[];
    listContainer: HTMLDivElement;
    checkBoxes: CheckBox[];
    checkAllBox: CheckBox;
    searchInput: Input;
    constructor(container: HTMLElement, selectAllText: string, searchPlaceholder: string | undefined, options: CheckBoxOption[], onCheck: (checked: boolean, option: CheckBoxOption, options: CheckBoxOption[]) => void);
    handleSearch(text: string): void;
    syncCheckAll(): void;
    getOptions(): CheckBoxOption[];
}

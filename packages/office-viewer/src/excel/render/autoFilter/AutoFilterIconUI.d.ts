import { CT_AutoFilter } from '../../../openxml/ExcelTypes';
import { Sheet } from '../../sheet/Sheet';
import { RangeRef } from '../../types/RangeRef';
import { AutoFilterMenuUI } from './AutoFilterMenuUI';
export declare class AutoFilterIconUI {
    /**
     * 过滤图标容器
     */
    filterIconContainer: HTMLElement;
    /**
     * 过滤图标
     */
    filterIcon: HTMLElement;
    /**
     * 过滤界面
     */
    filterMenu: AutoFilterMenuUI;
    sheet: Sheet;
    rangeRef: RangeRef;
    colIndex: number;
    autoFilter: CT_AutoFilter;
    removeClickOutsideEvent: () => void;
    constructor(sheet: Sheet, dataContainer: HTMLElement, autoFilter: CT_AutoFilter, rangeRef: RangeRef, colIndex: number, fid: string, headerRowCount?: number);
    /**
     * 更新过滤图标
     */
    syncFilterIcon(): void;
    getFilterIcon(): string;
    updatePosition(x: number, y: number, height: number, width: number): void;
    handleClick(): void;
    showMenu(): void;
    hideMenu(): void;
    hide(): void;
    destroy(): void;
}

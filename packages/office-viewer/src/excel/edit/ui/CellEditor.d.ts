import { Workbook } from '../../Workbook';
import { HitTestResult } from '../../render/selection/hitTest';
import { Sheet } from '../../sheet/Sheet';
import { CellData } from '../../types/worksheet/CellData';
/**
 * 单元格编辑
 */
export declare class CellEditor {
    /**
     * 编辑器容器
     */
    editorContainer: HTMLElement;
    workbook: Workbook;
    hitTestResult: HitTestResult;
    value?: string;
    initValue?: string;
    cellData: CellData | undefined;
    sheet: Sheet;
    row: number;
    col: number;
    removeOnClickOutside: () => void;
    constructor(dataContainer: HTMLElement, workbook: Workbook, hitTest: HitTestResult);
    handleInput(value: string): void;
    /**
     * 关闭编辑器
     */
    close(): void;
}

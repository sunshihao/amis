/**
 * 公式栏
 */
import { Workbook } from '../../Workbook';
import { ExcelRenderOptions } from '../../sheet/ExcelRenderOptions';
import { CellData } from '../../types/worksheet/CellData';
import { Input } from '../ui/Input';
export declare class FormulaBar {
    dom: HTMLElement;
    /**
     * 左侧的单元格名称
     */
    nameBox?: HTMLElement;
    /**
     * 右侧的输入框
     */
    textBox?: HTMLElement;
    workbook: Workbook;
    textInput: Input;
    cellData?: CellData;
    constructor(dom: HTMLElement, workbook: Workbook, renderOptions: ExcelRenderOptions);
    initDom(): void;
    getActiveCell(): import("../../types/RangeRef").RangeRef | null;
    /**
     * 同步 dom 节点
     */
    sync(): void;
    changeCellValue(value: string): void;
}

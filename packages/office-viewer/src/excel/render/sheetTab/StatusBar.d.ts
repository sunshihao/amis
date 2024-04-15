import { Workbook } from '../../Workbook';
import { ExcelRenderOptions } from '../../sheet/ExcelRenderOptions';
/**
 * 状态栏，主要是显示平均值、求和等
 */
export declare class StatusBar {
    status: HTMLElement;
    workbook: Workbook;
    constructor(container: HTMLElement, workbook: Workbook, renderOptions: ExcelRenderOptions);
    /**
     * 选区变化的时候更新底部状态栏
     */
    syncStatus(): void;
}

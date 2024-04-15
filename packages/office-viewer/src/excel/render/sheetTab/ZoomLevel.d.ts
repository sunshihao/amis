import { Workbook } from '../../Workbook';
import { ExcelRenderOptions } from '../../sheet/ExcelRenderOptions';
export declare class ZoomLevel {
    constructor(container: HTMLElement, workbook: Workbook, renderOptions: ExcelRenderOptions);
    renderZoomLevel(container: HTMLElement, workbook: Workbook): void;
}

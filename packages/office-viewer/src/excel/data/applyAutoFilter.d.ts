import { CT_AutoFilter } from '../../openxml/ExcelTypes';
import { IDataProvider } from '../types/IDataProvider';
import { ISheet } from '../types/ISheet';
import { IWorkbook } from '../types/IWorkbook';
/**
 * 应用 autoFilter，将相关行隐藏
 *
 * @headerRowCount 表头行数，需要忽略这些行
 */
export declare function applyAutoFilter(sheetIndex: number, workbook: IWorkbook, sheet: ISheet, dataProvider: IDataProvider, autoFilter: CT_AutoFilter, headerRowCount?: number): void;

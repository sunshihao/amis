import { CT_AutoFilter } from '../../../openxml/ExcelTypes';
import { IDataProvider } from '../../types/IDataProvider';
/**
 * 应用排序状态
 */
export declare function applySortState(sheetIndex: number, dataProvider: IDataProvider, autoFilter: CT_AutoFilter, headerRowCount?: number): void;

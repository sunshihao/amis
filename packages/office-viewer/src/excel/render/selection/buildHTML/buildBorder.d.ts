import { CT_BorderPr } from '../../../../openxml/ExcelTypes';
import { IDataProvider } from '../../../types/IDataProvider';
/**
 * 生成边框样式
 */
export declare function buildBorder(position: string, border: CT_BorderPr, dataProvider: IDataProvider): string;

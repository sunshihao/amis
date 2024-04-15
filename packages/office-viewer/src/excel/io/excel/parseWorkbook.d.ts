import { PackageParser } from '../../../package/PackageParser';
import { IWorkbook } from '../../types/IWorkbook';
import { CT_Stylesheet } from '../../../openxml/ExcelTypes';
/**
 * 解析 WorkBook
 * @param xml workbook.xml 文件内容
 */
export declare function parseWorkbook(parser: PackageParser, styleSheet: CT_Stylesheet): Promise<IWorkbook>;

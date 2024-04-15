/**
 * 解析 Excel 格式，转成内部数据结构
 */
import { PackageParser } from '../../package/PackageParser';
import { ExcelFile } from '../types/ExcelFile';
/**
 * 解析 Excel
 * @param parser
 */
export declare function parseExcel(parser: PackageParser): Promise<ExcelFile>;

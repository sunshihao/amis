/**
 * 解析 sheet，并集成 sheet 里的数据
 */
import { XMLNode } from '../../../util/xml';
import { StringItem } from '../../types/StringItem';
import { ISheet } from '../../types/ISheet';
import { IWorkbook } from '../../types/IWorkbook';
import { PackageParser } from '../../../package/PackageParser';
export declare function parseSheets(node: XMLNode, parser: PackageParser, workbook: IWorkbook, sharedStrings: StringItem[]): Promise<ISheet[]>;

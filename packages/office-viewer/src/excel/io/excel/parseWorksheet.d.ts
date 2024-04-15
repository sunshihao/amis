import { IWorksheet } from '../../types/IWorksheet';
import { StringItem } from '../../types/StringItem';
import { IRelationship } from '../../types/IRelationship';
import { PackageParser } from '../../../package/PackageParser';
import { IWorkbook } from '../../types/IWorkbook';
/**
 * 解析 xl/worksheets/sheet*.xml 文件
 */
export declare function parseWorksheet(workbook: IWorkbook, parser: PackageParser, worksheetPath: string, xml: string, relationships: IRelationship[], sharedStrings: StringItem[]): Promise<IWorksheet | null>;

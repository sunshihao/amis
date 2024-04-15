import { PackageParser } from '../../../../package/PackageParser';
import { IDrawing } from '../../../types/IDrawing';
import { IWorkbook } from '../../../types/IWorkbook';
/**
 * 解析 xl/drawings/drawing1.xml 文件
 * P3155
 */
export declare function parseDrawing(workbook: IWorkbook, parser: PackageParser, drawingPath: string): Promise<IDrawing>;

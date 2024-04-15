import { PackageParser } from '../../../../package/PackageParser';
import { XMLNode } from '../../../../util/xml';
import { IAnchorCommon } from '../../../types/IDrawing';
import { IRelationship } from '../../../types/IRelationship';
import { IWorkbook } from '../../../types/IWorkbook';
/**
 * 解析一些 anchor 的通用属性，这些属性大多需要读取另一个文件，所以直接在这里解析简化后续操作
 */
export declare function parseAnchorCommon(workbook: IWorkbook, parser: PackageParser, drawingPath: string, drawingNode: XMLNode, relationships: IRelationship[], anchorCommon: IAnchorCommon, element: Element): Promise<void>;

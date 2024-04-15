import { CT_Table } from '../../../openxml/ExcelTypes';
import { PackageParser } from '../../../package/PackageParser';
import { XMLNode } from '../../../util/xml';
import { IRelationship } from '../../types/IRelationship';
export declare function parseTableParts(worksheetPath: string, parser: PackageParser, relationships: IRelationship[], tablePartsNode: XMLNode): Promise<CT_Table[]>;

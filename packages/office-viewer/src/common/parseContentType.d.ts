import { ContentTypes } from '../openxml/ContentType';
import { PackageParser } from '../package/PackageParser';
/**
 * 解析 [Content_Types].xml
 * @param xml
 */
export declare function parseContentType(parser: PackageParser): Promise<ContentTypes>;

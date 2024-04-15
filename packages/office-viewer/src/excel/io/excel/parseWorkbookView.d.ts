import { CT_BookView } from '../../../openxml/ExcelTypes';
import { XMLNode } from '../../../util/xml';
/**
 * workbookView 配置项，后续依赖这个来延迟解析 sheet
 */
export declare function parseWorkbookView(workbookNode: XMLNode): CT_BookView;

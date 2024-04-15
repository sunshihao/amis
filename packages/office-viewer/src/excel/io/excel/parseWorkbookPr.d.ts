import { CT_WorkbookPr } from '../../../openxml/ExcelTypes';
import { XMLNode } from '../../../util/xml';
/**
 * workbook 配置项，这个要优先处理
 */
export declare function parseWorkbookPr(workbookNode: XMLNode): CT_WorkbookPr;

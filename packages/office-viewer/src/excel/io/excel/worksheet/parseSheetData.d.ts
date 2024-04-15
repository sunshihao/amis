import { CT_Row } from '../../../../openxml/ExcelTypes';
import { XMLNode } from '../../../../util/xml';
import { StringItem } from '../../../types/StringItem';
import { CellData } from '../../../types/worksheet/CellData';
/**
 * 解析 sheetData
 */
export declare function parseSheetData(sheetDataNode: XMLNode, sharedStrings: StringItem[]): {
    rows: CT_Row[];
    cellData: CellData[][];
};

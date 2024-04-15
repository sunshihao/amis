import { CT_OneCellAnchor } from '../../../openxml/ExcelTypes';
import { Sheet } from '../../sheet/Sheet';
export declare function getOneCellAnchorPosition(oneCellAnchor: CT_OneCellAnchor, sheet: Sheet): {
    x: number;
    y: number;
    width: number;
    height: number;
};

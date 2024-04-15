import { CT_TwoCellAnchor } from '../../../openxml/ExcelTypes';
import { Sheet } from '../../sheet/Sheet';
export declare function getTwoCellAnchorPosition(twoCellAnchor: CT_TwoCellAnchor, sheet: Sheet): {
    x: number;
    y: number;
    width: number;
    height: number;
};

import { CT_Marker } from '../../../openxml/ExcelTypes';
import { Sheet } from '../../sheet/Sheet';
import { ViewRange } from '../../sheet/ViewRange';
export declare function getRectFromOneAnchorPoint(currentSheet: Sheet, cell: CT_Marker, viewRange: ViewRange): {
    x: number;
    y: number;
    width: number;
    height: number;
};
/**
 * 基于 Anchor Point 计算位置信息
 */
export declare function getRectFromTwoAnchorPoint(currentSheet: Sheet, from: CT_Marker, to: CT_Marker, viewRange: ViewRange): {
    x: number;
    y: number;
    width: number;
    height: number;
};

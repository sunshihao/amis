import { CT_AbsoluteAnchor } from '../../../openxml/ExcelTypes';
/**
 * 获取绝对锚点的位置信息
 * @param absoluteAnchor
 */
export declare function getAbsoluteAnchorPosition(absoluteAnchor: CT_AbsoluteAnchor): {
    x: number;
    y: number;
    width: number;
    height: number;
};

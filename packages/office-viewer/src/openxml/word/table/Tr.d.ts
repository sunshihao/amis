import { CSSStyle } from '../../Style';
import { Tc } from './Tc';
export interface TrPr {
    cssStyle?: CSSStyle;
    /**
     * 单元格样式
     */
    tcStyle?: CSSStyle;
}
export declare class Tr {
    properties: TrPr;
    tcs: Tc[];
}

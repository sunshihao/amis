import { CSSStyle } from '../../Style';
import { Paragraph } from '../Paragraph';
import { Table } from '../Table';
import { ST_Merge } from '../../Types';
export interface TcPr {
    cssStyle?: CSSStyle;
    hideMark?: boolean;
    vMerge?: ST_Merge;
    gridSpan?: number;
    rowSpan?: number;
    /**
     * 内部 border，需要作用于非第一列的单元格
     */
    insideBorder?: {
        H?: string;
        V?: string;
    };
}
type TcChild = Paragraph | Table;
export declare class Tc {
    properties: TcPr;
    children: TcChild[];
    add(child: TcChild): void;
}
export {};

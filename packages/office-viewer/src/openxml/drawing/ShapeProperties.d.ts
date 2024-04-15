/**
 * http://webapp.docx4java.org/OnlineDemo/ecma376/DrawingML/spPr_2.html
 */
import Word from '../../Word';
import { Transform } from './Transform';
import { Geom } from './Geom';
import { CustomGeom } from './CustomGeom';
export type OutLine = {
    style?: 'solid' | 'dashed' | 'dotted' | string;
    width?: string;
    color?: string;
    radius?: string;
};
export declare function parseOutline(getThemeColor: (c: string) => string, element: Element): OutLine;
export declare class ShapePr {
    xfrm?: Transform;
    geom?: Geom;
    custGeom?: CustomGeom;
    outline?: OutLine;
    fillColor?: string;
    noFill?: boolean;
    static fromXML(word: Word, element?: Element | null): ShapePr;
}

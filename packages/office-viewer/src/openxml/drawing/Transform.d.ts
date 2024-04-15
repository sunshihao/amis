/**
 * http://webapp.docx4java.org/OnlineDemo/ecma376/DrawingML/xfrm_2.html
 */
import Word from '../../Word';
export interface Off {
    x: string;
    y: string;
}
export interface Ext {
    cx: string;
    cy: string;
}
export declare class Transform {
    off?: Off;
    ext?: Ext;
    chOff?: Off;
    chExt?: Ext;
    rot?: number;
    static fromXML(word: Word, element: Element): Transform;
}

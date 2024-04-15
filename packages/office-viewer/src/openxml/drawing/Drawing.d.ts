/**
 * 目前图片和 textbox 都会依赖这个
 */
import { CSSStyle } from './../Style';
import Word from '../../Word';
import { Pic } from './Pic';
import { WPS } from '../word/wps/WPS';
import { WPG } from '../word/wps/WPG';
/**
 * drawing 在文档中的位置，目前有两种情况，child 和 anchor
 */
export declare enum Position {
    inline = "inline",
    anchor = "anchor"
}
/**
 * 有大量属性不好通过 css 来实现
 * http://webapp.docx4java.org/OnlineDemo/ecma376/DrawingML/anchor_2.html
 */
export interface Anchor {
    simplePos: boolean;
    hidden?: boolean;
    behindDoc?: boolean;
}
export declare class Drawing {
    pic?: Pic;
    wps?: WPS;
    wpg?: WPG;
    diagram?: ConstrainDOMStringParameters;
    position: Position;
    anchor?: Anchor;
    containerStyle?: CSSStyle;
    relativeFromV: 'paragraph' | 'page';
    id?: string;
    name?: string;
    static fromXML(word: Word, element: Element): Drawing | null;
}

/**
 * 段落的定义和解析
 */
import Word from '../../Word';
import { BookmarkStart } from './Bookmark';
import { Hyperlink } from './Hyperlink';
import { NumberPr } from './numbering/NumberProperties';
import { Properties } from './properties/Properties';
import { Run, RunPr } from './Run';
import { Tab } from './Tab';
import { FldSimple } from './FldSimple';
import { OMath } from '../math/OMath';
/**
 * 这里简化了很多，如果能用 CSS 表示就直接用 CSS 表示
 */
export interface ParagraphPr extends Properties {
    numPr?: NumberPr;
    runPr?: RunPr;
    tabs?: Tab[];
    /**
     * 其实是区分 autoSpaceDN 和 autoSpaceDE 的，但这里简化了
     */
    autoSpace?: boolean;
}
export type ParagraphChild = Run | BookmarkStart | Hyperlink | FldSimple | OMath;
export declare class Paragraph {
    paraId?: string;
    properties: ParagraphPr;
    children: ParagraphChild[];
    fldSimples: FldSimple[];
    addChild(child: ParagraphChild): void;
    static parseParagraphPr(word: Word, element: Element): ParagraphPr;
    static fromXML(word: Word, element: Element): Paragraph;
}

import Word from '../../Word';
import { ST_FldCharType, ST_VerticalAlignRun } from '../Types';
import { Break } from './Break';
import { Drawing } from '../drawing/Drawing';
import { InstrText } from './InstrText';
import { NoBreakHyphen } from './NoBreakHyphen';
import { Pict } from './Pict';
import { Properties } from './properties/Properties';
import { Ruby } from './Ruby';
import { Separator } from './Separator';
import { SoftHyphen } from './SoftHyphen';
import { Sym } from './Sym';
import { Tab } from './Tab';
/**
 * 一段文本
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/Run_1.html
 */
export interface RunPr extends Properties {
    vertAlign?: ST_VerticalAlignRun;
}
export declare class Text {
    preserveSpace: boolean;
    text: string;
    constructor(text: string | number);
}
type RunChild = Break | Drawing | Text | Tab | Pict | Ruby | InstrText | Sym | SoftHyphen | Separator | NoBreakHyphen;
export declare class Run {
    properties: RunPr;
    children: RunChild[];
    fldChar?: ST_FldCharType;
    addChild(child: RunChild | null): void;
    static parseRunPr(word: Word, element: Element): RunPr;
    static fromXML(word: Word, element: Element): Run;
}
export {};

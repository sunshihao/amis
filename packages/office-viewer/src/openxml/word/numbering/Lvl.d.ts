import { RunPr } from './../Run';
import { ST_Jc, ST_LevelSuffix, ST_NumberFormat } from '../../Types';
import { ParagraphPr } from '../Paragraph';
import Word from '../../../Word';
export declare class Lvl {
    ilvl: string;
    start: number;
    numFmt: ST_NumberFormat;
    lvlText: string;
    isLgl: boolean;
    lvlJc: ST_Jc;
    suff: ST_LevelSuffix;
    pPr?: ParagraphPr;
    rPr?: RunPr;
    static fromXML(word: Word, element: Element): Lvl;
}

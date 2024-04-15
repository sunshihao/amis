import Word from '../../../Word';
import { AbstractNum } from './AbstractNum';
import { Num } from './Num';
export declare class Numbering {
    abstractNums: Record<string, AbstractNum>;
    nums: Record<string, Num>;
    numData: Record<string, Record<string, number>>;
    static fromXML(word: Word, element: Document): Numbering;
}

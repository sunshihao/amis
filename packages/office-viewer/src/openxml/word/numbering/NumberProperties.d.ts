import Word from '../../../Word';
export declare class NumberPr {
    ilvl: string;
    numId: string;
    static fromXML(word: Word, element: Element): NumberPr;
}

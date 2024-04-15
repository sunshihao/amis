import Word from '../../Word';
import { InlineText } from './InlineText';
export declare class FldSimple {
    instr: string;
    inlineText: InlineText;
    static fromXML(word: Word, element: Element): FldSimple;
}

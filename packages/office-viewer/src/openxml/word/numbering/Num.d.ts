import Word from '../../../Word';
import { Lvl } from './Lvl';
export declare class Num {
    numId: string;
    abstractNumId: string;
    lvlOverride: {
        lvls: Record<string, Lvl>;
    };
    static fromXML(word: Word, element: Element): Num;
}

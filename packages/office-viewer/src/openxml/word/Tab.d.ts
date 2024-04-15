import Word from '../../Word';
import { ST_TabJc, ST_TabTlc } from '../Types';
export declare class Tab {
    type: ST_TabJc | 'left';
    pos: string;
    leader?: ST_TabTlc;
    static fromXML(word: Word, element: Element): Tab;
}

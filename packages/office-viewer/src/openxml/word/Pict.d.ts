import Word from '../../Word';
export declare class Pict {
    src?: string | null;
    static fromXML(word: Word, element: Element): Pict | null;
}

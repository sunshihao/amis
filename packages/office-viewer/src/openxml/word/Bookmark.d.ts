import Word from '../../Word';
export declare class BookmarkStart {
    name: string;
    constructor(name: string);
    static fromXML(word: Word, element: Element): BookmarkStart;
}

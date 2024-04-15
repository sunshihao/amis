/**
 * footnote 和 endnote 的结构几乎是一样的，所以统一叫 Note 了
 */
import Word from '../../Word';
import { Paragraph } from './Paragraph';
import { Table } from './Table';
export type NoteChild = Paragraph | Table;
export declare class Note {
    children: NoteChild[];
    addChild(child: NoteChild): void;
    static fromXML(word: Word, element: Element): Note;
}

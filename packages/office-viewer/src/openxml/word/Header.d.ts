/**
 * header 的定义，footer 也是用这个，因为结构是一样的
 */
import Word from '../../Word';
import { Paragraph } from './Paragraph';
import { Table } from './Table';
export type HeaderChild = Paragraph | Table;
export declare class Header {
    children: HeaderChild[];
    static fromXML(word: Word, doc: Document): Header;
}

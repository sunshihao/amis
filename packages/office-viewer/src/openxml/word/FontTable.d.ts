/**
 * 解析和渲染字体
 */
import Word from '../../Word';
import { Font } from './Font';
export declare class FontTable {
    fonts: Font[];
    static fromXML(word: Word, doc: Document): FontTable;
}

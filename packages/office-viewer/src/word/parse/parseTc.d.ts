/**
 * 拆分出来主要是为了避免循环引用
 */
import { Tc } from '../../openxml/word/table/Tc';
import Word from '../../Word';
export declare function parseTc(word: Word, element: Element, currentCol: {
    index: number;
}, rowSpanMap: {
    [key: string]: Tc;
}): Tc | null;

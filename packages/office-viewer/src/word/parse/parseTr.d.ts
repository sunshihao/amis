import Word from '../../Word';
import { Tr } from '../../openxml/word/table/Tr';
import { Tc } from '../../openxml/word/table/Tc';
export declare function parseTr(word: Word, element: Element, rowSpanMap: {
    [key: string]: Tc;
}): Tr;

import { CSSStyle } from '../../openxml/Style';
import { TcPr } from '../../openxml/word/table/Tc';
import Word from '../../Word';
export declare function parseTblCellSpacing(element: Element, style: CSSStyle): void;
export declare function parseTcPr(word: Word, element: Element): TcPr;

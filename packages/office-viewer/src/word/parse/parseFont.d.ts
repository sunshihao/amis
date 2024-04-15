/**
 * 解析字体
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/rFonts.html
 */
import { CSSStyle } from '../../openxml/Style';
import Word from '../../Word';
export declare function parseFont(word: Word, element: Element, style: CSSStyle): void;

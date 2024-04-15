/**
 * 包括 rPr 及 pPr 的解析，参考了 docxjs 里的实现
 */
import { CSSStyle } from '../../openxml/Style';
import Word from '../../Word';
/**
 * 解析各种 pPr 及 rPr，返回样式
 * @param type 所属类型
 * @returns 样式
 */
export declare function parsePr(word: Word, element: Element, type?: 'r' | 'p'): CSSStyle;

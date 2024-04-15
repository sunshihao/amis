import { CSSStyle } from '../../openxml/Style';
import Word from '../../Word';
/**
 * 修复绝对定位的位置，主要是加上 padding，因为 html 中的定位是不考虑 padding 的
 * @param word
 * @param style
 */
export declare function fixAbsolutePosition(word: Word, style: CSSStyle, inHeader?: boolean): void;

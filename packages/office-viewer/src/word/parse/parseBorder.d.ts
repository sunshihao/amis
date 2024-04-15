/**
 * 解析边框转成 css 样式 http://officeopenxml.com/WPborders.php
 */
import { CSSStyle } from '../../openxml/Style';
import Word from '../../Word';
/**
 * 解析单个边框样式
 */
export declare function parseBorder(word: Word, element: Element): string;
/**
 * 解析边框
 */
export declare function parseBorders(word: Word, element: Element, style: CSSStyle): void;

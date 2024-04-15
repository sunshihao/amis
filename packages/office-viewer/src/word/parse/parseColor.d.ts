/**
 * 解析颜色，转成 css 的颜色
 */
import Word from '../../Word';
/**
 * css 里可以识别的颜色
 */
export declare const cssColors: string[];
/**
 *
 * 解析属性上的 color，比如  <w:top w:val="single" w:sz="24" w:space="1" w:color="FF0000" />
 * @param attrName color 默认属性
 * @param autoColor 默认值
 * @returns css 颜色
 */
export declare function parseColorAttr(word: Word, element: Element, attrName?: string, autoColor?: string): string;
/**
 * 专门用来支持 shd 的颜色
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/ST_Shd.html
 */
export declare function parseShdColor(word: Word, element: Element): string;
/**
 * 解析 color 标签，比如 <w:color w:themeColor="accent3" />
 * @returns css 颜色
 */
export declare function parseColor(word: Word, element: Element): string;

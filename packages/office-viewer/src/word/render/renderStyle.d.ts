/**
 * 渲染内置样式及自定义样式
 */
import { TblStylePrStyle } from '../../openxml/Style';
import Word from '../../Word';
/**
 * 生成表格级别样式
 */
export declare function generateTableStyle(classPrefix: string, styleDisplayId: string, style: TblStylePrStyle): string;
/**
 * 渲染所有样式
 */
export declare function renderStyle(word: Word): HTMLStyleElement;

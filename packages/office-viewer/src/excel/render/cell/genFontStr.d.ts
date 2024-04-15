import { FontStyle } from '../../types/FontStyle';
import { IRPrElt } from '../../types/IRPrElt';
/**
 * 生成字体字符串
 * @param fontStyle
 */
export declare function genFontStr(fontStyle: FontStyle): string;
/**
 * rPr 转换为字体样式
 */
export declare function rPrToFontStyle(rPr: IRPrElt): Partial<FontStyle>;
/**
 * 合并 rPr 和默认字体
 */
export declare function mergeRPrWithDefaultFont(rPr: IRPrElt, defaultFont: FontStyle): {
    family: string;
    size: number;
    color: string;
    b: boolean;
    i: boolean;
    strike: boolean;
    outline: boolean;
    shadow: boolean;
    u: import("../../../openxml/ExcelTypes").ST_UnderlineValues;
    condense: boolean;
};
/**
 * 基于 rPr 生成字体字符串
 * @param defaultFont 默认字体样式
 */
export declare function genFontStrFromRPr(rPr: IRPrElt, defaultFont: FontStyle): string;

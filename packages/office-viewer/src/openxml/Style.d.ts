/**
 * 解析共享样式 Style
 */
import Word from '../Word';
import { ST_StyleType, ST_TblStyleOverrideType } from './Types';
import { ParagraphPr } from './word/Paragraph';
import { RunPr } from './word/Run';
import { TablePr } from './word/Table';
import { TcPr } from './word/table/Tc';
import { TrPr } from './word/table/Tr';
export interface CSSStyle {
    [key: string]: string | number;
}
export interface TblStylePrStyle {
    rPr?: RunPr;
    pPr?: ParagraphPr;
    tblPr?: TablePr;
    trPr?: TrPr;
    tcPr?: TcPr;
}
/**
 * 单个样式定义
 */
export interface Style extends TblStylePrStyle {
    id?: string;
    type?: ST_StyleType;
    name?: string;
    basedOn?: string;
    tblStylePr?: Record<ST_TblStyleOverrideType, TblStylePrStyle>;
}
/**
 * 所有样式定义及默认样式
 */
export interface Styles {
    styleMap: Record<string, Style>;
    defaultStyle?: Style;
}
/**
 * 解析 styles.xml
 */
export declare function parseStyles(word: Word, doc: Document): Styles;

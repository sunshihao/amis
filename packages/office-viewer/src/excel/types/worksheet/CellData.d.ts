import { StringItem } from '../StringItem';
/**
 * 错误的数据
 */
export type ErrorData = {
    type: 'error';
    value: string;
    s?: number;
};
/**
 * 公式数据
 */
export type FormulaData = {
    type: 'formula';
    formula: string;
    value: string;
    s?: number;
};
/**
 * 可能是老的数据格式
 */
export type DateData = {
    type: 'date';
    value: string;
    s?: number;
};
/**
 * 带样式的数据
 */
export type StyleData = {
    type: 'style';
    s?: number;
    /**
     * 值
     */
    value: string;
};
/**
 * 空数据，这种主要都是有个单元格，但是没有值
 */
export type BlankData = {
    type: 'blank';
    s?: number;
};
/**
 * 单元格里存的值
 */
export type CellData = StringItem | ErrorData | FormulaData | StyleData | DateData | BlankData;
export declare function hasValue(cellData: CellData): boolean;
/**
 * 更新数据，目前还不支持富文本
 * @param value
 * @param cellData
 * @returns
 */
export declare function updateValue(value?: string, cellData?: CellData): CellData;

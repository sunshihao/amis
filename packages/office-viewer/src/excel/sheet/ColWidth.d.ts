/**
 * col 宽度相关的工具函数
 */
/**
 * 用于根据字符数获取列宽
 * @returns 返回宽度像素
 */
export declare function baseColWidth2px(colWidth: number, fontWidth: number): number;
/**
 * 根据列宽获取 px，这个减去 0.83203125 是 Excel 默认加的
 * 这个计算方法可能不太准，还得进一步调研
 * @param colWidth
 * @returns 返回宽度像素
 */
export declare function colWidth2px(colWidth: number, fontWidth: number): number;
/**
 * 根据像素反算列宽
 */
export declare function px2colWidth(px: number, fontWidth: number): number;

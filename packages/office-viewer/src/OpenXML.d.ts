/**
 * openxml 一些辅助函数
 */
/**
 * 获取 w:val 的值
 */
export declare function getVal(element: Element): string;
/**
 * 获取 w:val 的值，转成 number 类型
 */
export declare function getValNumber(element: Element): number;
/**
 * 有可能是 on 或 off 之类的值，都归一化为 boolean
 * @param value
 * @param defaultValue 默认值
 * @returns
 */
export declare function normalizeBoolean(value: string | boolean | null, defaultValue?: boolean): boolean;
export declare function getValBoolean(element: Element, defaultValue?: boolean): boolean;
export declare function getAttrBoolean(element: Element, attr: string, defaultValue?: boolean): boolean;
/**
 * 获取属性值，转成数字
 *
 * @param attr 属性名
 * @param defaultValue 默认值
 * @returns 解析后的数字
 */
export declare function getAttrNumber(element: Element, attr: string, defaultValue?: number): number;
/**
 * 获取百分比值，没测过
 * http://webapp.docx4java.org/OnlineDemo/ecma376/DrawingML/ST_Percentage.html
 * https://c-rex.net/projects/samples/ooxml/e1/Part4/OOXML_P4_DOCX_ST_Percentage_topic_ID0EY3XNB.html#topic_ID0EY3XNB
 *
 * @returns 0-1 之间的小数
 */
export declare function getAttrPercent(element: Element, attr: string): number;
/**
 * 获取属性的 hex 值
 */
export declare function getValHex(element: Element): number;

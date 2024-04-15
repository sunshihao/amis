/**
 * 单位相关的解析，参考了 docxjs 里的实现
 */
export type LengthType = 'px' | 'pt' | '%' | '';
export type LengthUsageType = {
    mul: number;
    unit: LengthType;
};
export declare const LengthUsage: Record<string, LengthUsageType>;
export declare function convertLength(val: string, usage?: LengthUsageType): string;
/**
 * 转换布尔值
 */
export declare function convertBoolean(v: string, defaultValue?: boolean): boolean;
export declare function convertPercentage(val: string | null): number;
export declare function convertAngle(val: string | null): number;
/**
 * 解析尺寸，返回 css 值
 *
 * @param element 节点
 * @param attrName 属性名
 * @param usage 类型
 */
export declare function parseSize(element: Element, attrName: string, usage?: LengthUsageType): string;
/**
 * 参考 docxjs 的方法，后面可以优化一下，不使用 calc
 */
export declare function addSize(a: string, b: string): string;

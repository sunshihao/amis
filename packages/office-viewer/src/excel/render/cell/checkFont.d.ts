/**
 * 检查字体是否存在，这里主要是为了加缓存和 warning
 */
export declare function checkFont(font: string): boolean | undefined;
/**
 * 获取所有不可用的字体
 */
export declare function getAllNotAvailableFont(): string[];

/**
 * 范围缓存，方便数据变化的时候自动清空
 */
import { RangeRef } from '../types/RangeRef';
/**
 * 范围的缓存 key
 */
export declare function rangeCacheKey(range: RangeRef): string;
export declare function rangeCacheKeyToRange(key: string): {
    startRow: number;
    startCol: number;
    endRow: number;
    endCol: number;
};
export declare class RangeCache {
    /**
     * 缓存
     */
    private cache;
    /**
     * 设置缓存
     */
    set(ranges: RangeRef[], key: string, value: any): void;
    /**
     * 获取缓存
     */
    get(ranges: RangeRef[], key: string): any;
    /**
     * 清理相关缓存，会判断是否相交
     */
    clear(ranges: RangeRef[]): void;
}

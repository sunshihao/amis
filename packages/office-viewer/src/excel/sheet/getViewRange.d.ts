import { Size, ViewRange } from './ViewRange';
export interface RangeInfo {
    /**
     * 索引列表
     */
    indexes: number[];
    /**
     * 起始偏移量
     */
    startOffset: number;
    /**
     * 每个索引的尺寸信息
     */
    sizes: Size[];
    /**
     * 最大长度
     */
    length: number;
}
/**
 * 索引位置缓存信息
 */
export interface IndexInfo {
    offset: number;
    size: number;
}
/**
 * 影藏列范围
 */
export interface HiddenRange {
    min: number;
    max: number;
}
/**
 * 使用二分查找第一个大于等于目标值的索引，也就是在某个偏移量下能看到的第一个单元格
 * @param rangeCache
 * @param target
 * @returns
 */
export declare function findStartInCache(rangeCache: IndexInfo[], target: number): number;
/**
 * 获取范围内的索引列表
 * @param offset 滚动条偏移
 * @param shift 表头导致的偏移
 * @param totalLength 总长度
 * @param getHeight 获取长度的方法
 * @param hiddenRange 隐藏的范围
 * @param rangeCache 位置信息缓存
 * @returns
 */
export declare function getRange(offset: number, shift: number, totalLength: number, getHeight: (index: number) => number, hiddenRange?: HiddenRange[], rangeCache?: IndexInfo[]): RangeInfo;
/**
 * 获取视口范围的单元格区域，拆分单独函数是为了方便单元测试，这部分逻辑不需要依赖 UI 展现
 *
 * @param scrollLeft 水平滚动条
 * @param scrollTop 垂直滚动条
 * @param leftShift 左偏移量，主要是表头导致的偏移量
 * @param topShift 上偏移量，主要是表头导致的偏移量
 * @param height 窗口高度
 * @param width 窗口宽度
 * @param defaultRowHeight 行默认高度
 * @param defaultColWidth 列默认宽度
 * @param customRowHeight 自定义行高
 * @param customColWidth 自定义列宽
 *
 * @returns 从 0 开始的行和列，以及初始的坐标
 */
export declare function getViewRange(scrollLeft: number, scrollTop: number, leftShift: number, topShift: number, height: number, width: number, getRowHeight: (index: number) => number, rowPositionCache: IndexInfo[] | undefined, getColWidth: (index: number) => number, colPositionCache?: IndexInfo[], colHiddenRange?: HiddenRange[]): ViewRange;

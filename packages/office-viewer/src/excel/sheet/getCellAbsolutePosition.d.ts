import { IndexInfo } from './getViewRange';
/**
 *  获取单元格的绝对位置
 */
export declare function getCellAbsolutePosition(row: number, col: number, getRowHeight: (index: number) => number, rowPositionCache: IndexInfo[] | undefined, getColWidth: (index: number) => number, colPositionCache?: IndexInfo[]): {
    x: number;
    y: number;
    width: number;
    height: number;
};

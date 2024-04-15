/**
 * 获取单元格的位置信息
 */
import { Position } from './Position';
import { Sheet } from '../../sheet/Sheet';
import { Region } from '../../sheet/ViewRange';
/**
 * 获取单元格的行位置
 */
export declare function getCellRowPosition(sheet: Sheet, region: Region, row: number): {
    y: number;
    height: number;
} | null;
/**
 * 获取单元格的列位置
 */
export declare function getCellColPosition(sheet: Sheet, region: Region, col: number): {
    x: number;
    width: number;
} | null;
/**
 * 获取某个单元格的位置信息
 * @param sheet 工作表
 * @param region 区域
 * @param col 行
 * @param row 列
 * @returns
 */
export declare function getCellPosition(sheet: Sheet, region: Region, col: number, row: number): Position | null;
/**
 * 获取某个单元格的位置信息，但考虑了合并单元格的情况
 * @param workbook 工作簿
 * @param region 区域
 * @param col 行
 * @param row 列
 * @returns
 */
export declare function getCellPositionWithMerge(sheet: Sheet, region: Region, col: number, row: number): {
    x: number;
    y: number;
    width: number;
    height: number;
} | null;

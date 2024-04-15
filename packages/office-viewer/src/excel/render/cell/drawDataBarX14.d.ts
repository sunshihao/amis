import { DataBarDisplay } from '../../types/DataBarDisplay';
import { Canvas } from '../Canvas';
/**
 * Excel 2010 中的双向数据条，这里已经过滤了数据里没有负数的情况，所以一定是两边显示
 * 不支持 rightToLeft，因为看起来很奇怪，估计不会有人用
 */
export declare function drawCellDataBarX14(canvas: Canvas, dataBarDisplay: DataBarDisplay, x: number, y: number, width: number, height: number): void;

/**
 * 绘制 sparkline，这里的坐标都是从 0 开始
 */
import { CT_Color } from '../../../openxml/ExcelTypes';
import { X14SparklineGroup } from '../../types/X14Sparkline/X14SparklineGroup';
/**
 * 绘制 Sparkline
 */
export declare function renderSparkline(ctx: OffscreenCanvasRenderingContext2D, width: number, height: number, data: string[], sparklineOptions: X14SparklineGroup, getColor: (color?: CT_Color) => string): void;

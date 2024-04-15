import { CT_Color } from '../../../openxml/ExcelTypes';
import { X14SparklineGroup } from '../../types/X14Sparkline/X14SparklineGroup';
import { Numbers } from './Numbers';
/**
 * 应用样式
 */
export declare function applyColor(ctx: OffscreenCanvasRenderingContext2D, data: Numbers, index: number, value: number, min: number, max: number, sparklineOptions: X14SparklineGroup, defaultColor: string, getColor: (color?: CT_Color) => string): boolean;

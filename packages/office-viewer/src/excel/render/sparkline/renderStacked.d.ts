import { CT_Color } from '../../../openxml/ExcelTypes';
import { X14SparklineGroup } from '../../types/X14Sparkline/X14SparklineGroup';
import { Numbers } from './Numbers';
/**
 * render win/loss sparkline
 */
export declare function renderStacked(ctx: OffscreenCanvasRenderingContext2D, width: number, height: number, min: number, max: number, data: Numbers, sparklineOptions: X14SparklineGroup, getColor: (color?: CT_Color) => string): void;

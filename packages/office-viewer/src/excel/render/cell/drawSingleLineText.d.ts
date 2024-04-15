import { ST_HorizontalAlignment, ST_VerticalAlignment } from '../../../openxml/ExcelTypes';
import { FontStyle } from '../../types/FontStyle';
import { LinkPosition } from './LinkPosition';
/**
 * 绘制单行无样式文本
 * @param fontStyle
 * @param text
 * @param color
 * @param x
 * @param y
 * @param width
 * @param height
 * @param intent 缩进
 * @param horizontal
 * @param vertical
 */
export declare function drawSingleLineText(ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, fontStyle: FontStyle, text: string, color: string, x: number, y: number, width: number, height: number, intent: number, horizontal: ST_HorizontalAlignment, vertical: ST_VerticalAlignment, linkPositionCache?: LinkPosition[]): void;

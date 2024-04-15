/**
 * 自动换行
 */
import { FontStyle } from '../../types/FontStyle';
import { IRElt } from '../../types/IRElt';
import { Token } from './tokenizer';
/**
 * 拆分出来每一行的数据
 */
export interface WrapLine {
    tokens: Token[];
    /**
     * 最大高度，减少后续计算，这个结果可能为 0，这时需要加上默认字体高度
     */
    maxHeight: number;
}
/**
 * 自动折行
 * @param ctx canvas context
 * @param text 文字
 * @param fontStyle 字体样式
 * @returns 拆分的行，有可能空行
 */
export declare function autoWrapText(ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, text: string | IRElt[], width: number, fontStyle: FontStyle): WrapLine[];

/**
 * 没去不太清楚这个是什么，目前主要用于形状的颜色
 */
import Word from '../../../Word';
export declare class WPSStyle {
    lineColor?: string;
    fillColor?: string;
    fontColor?: string;
    static fromXML(word: Word, element: Element): WPSStyle;
}

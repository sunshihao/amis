import { Paragraph } from '../Paragraph';
import { ShapePr } from '../../drawing/ShapeProperties';
/**
 * wps 指的是 wordprocessingShape，在 drawing 里 word 相关的 shape 定义
 * 目前主要是支持 textbox，
 */
import Word from '../../../Word';
import { Table } from '../Table';
import { CSSStyle } from '../../../openxml/Style';
import { WPSStyle } from './WPSStyle';
export type TxbxContentChild = Paragraph | Table;
export declare class WPS {
    spPr?: ShapePr;
    wpsStyle?: WPSStyle;
    txbxContent: TxbxContentChild[];
    style: CSSStyle;
    static fromXML(word: Word, element: Element): WPS;
}

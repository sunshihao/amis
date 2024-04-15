/**
 * 图形组，目前是当成 wps 用了
 */
import { WPS } from './WPS';
import Word from '../../../Word';
import { ShapePr } from '../../drawing/ShapeProperties';
import { Pic } from '../../drawing/Pic';
export declare class WPG {
    wps: WPS[];
    wpg: WPG[];
    spPr?: ShapePr;
    pic?: Pic;
    static fromXML(word: Word, element: Element): WPG;
}

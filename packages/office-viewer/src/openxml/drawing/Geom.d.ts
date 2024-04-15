/**
 * 形状
 */
import { ST_ShapeType } from '../Types';
import Word from '../../Word';
import { ShapeGuide } from './Shape';
export declare class Geom {
    prst: ST_ShapeType;
    avLst?: ShapeGuide[];
    static fromXML(word: Word, element: Element): Geom;
}

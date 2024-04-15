/**
 * 自定义形状
 */
import Word from '../../Word';
import { Shape } from './Shape';
export declare class CustomGeom {
    shape: Shape;
    static fromXML(word: Word, element: Element): CustomGeom;
}

import Word from '../../Word';
import { BlipFill } from './BlipFill';
import { ShapePr } from './ShapeProperties';
export declare class Pic {
    blipFill: BlipFill;
    spPr: ShapePr;
    /**
     * 替换图片的地址
     */
    alt?: string;
    /**
     * 这个是前面变量替换后，系统自动生成的 alt 地址，用于循环里的变量
     */
    altVar?: string;
    static fromXML(word: Word, element?: Element | null): Pic;
}

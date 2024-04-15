/**
 * 将 shape 转成 svg 格式
 *
 * https://wiki.documentfoundation.org/Development/Improve_handles_of_DrawingML_shapes
 */
import { WPSStyle } from '../../word/wps/WPSStyle';
import { Shape, ShapeGuide } from '../Shape';
import { OutLine } from '../ShapeProperties';
/**
 * 通用 shape 属性，用于统一 Word 和 Excel
 */
type CommonShapePr = {
    outline?: OutLine;
    fillColor?: string;
    noFill?: boolean;
};
export declare function shapeToSVG(shape: Shape, avLst: ShapeGuide[], shapePr: CommonShapePr, width: number, height: number, wpsStyle?: WPSStyle): SVGElement;
export {};

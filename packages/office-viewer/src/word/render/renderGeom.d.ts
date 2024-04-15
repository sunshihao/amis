import { Geom } from '../../openxml/drawing/Geom';
import { ShapePr } from '../../openxml/drawing/ShapeProperties';
import { WPSStyle } from '../../openxml/word/wps/WPSStyle';
export declare function renderGeom(geom: Geom, shapePr: ShapePr, width: number, height: number, wpsStyle?: WPSStyle): SVGElement | null;

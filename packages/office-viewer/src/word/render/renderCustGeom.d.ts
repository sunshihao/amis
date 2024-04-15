import { ShapePr } from '../../openxml/drawing/ShapeProperties';
import { WPSStyle } from '../../openxml/word/wps/WPSStyle';
import { CustomGeom } from '../../openxml/drawing/CustomGeom';
export declare function renderCustGeom(geom: CustomGeom, shapePr: ShapePr, width: number, height: number, wpsStyle?: WPSStyle): SVGElement | null;

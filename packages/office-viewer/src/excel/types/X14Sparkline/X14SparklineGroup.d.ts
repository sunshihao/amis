/**
 * 目前先简单实现，后面再改成自动解析
 */
import { Attributes } from '../../../openxml/Attributes';
import { CT_Color } from '../CT_Color';
import { X14Sparklines } from './x14Sparklines';
export type ST_SparklineAxisMinMax = 'individual' | 'groupMax' | 'group';
export type X14SparklineGroup = {
    'displayEmptyCellsAs'?: 'gap' | 'zero' | 'span';
    'type'?: 'line' | 'column' | 'stacked';
    'markers'?: boolean;
    'manualMax'?: number;
    'manualMin'?: number;
    'lineWeight'?: number;
    'high'?: boolean;
    'low'?: boolean;
    'first'?: boolean;
    'last'?: boolean;
    'negative'?: boolean;
    'displayXAxis'?: boolean;
    'displayHidden'?: boolean;
    'minAxisType'?: ST_SparklineAxisMinMax;
    'maxAxisType'?: ST_SparklineAxisMinMax;
    'rightToLeft'?: boolean;
    'x14:colorSeries'?: CT_Color;
    'x14:colorNegative'?: CT_Color;
    'x14:colorAxis'?: CT_Color;
    'x14:colorMarkers'?: CT_Color;
    'x14:colorFirst'?: CT_Color;
    'x14:colorLast'?: CT_Color;
    'x14:colorHigh'?: CT_Color;
    'x14:colorLow'?: CT_Color;
    'x14:sparklines'?: X14Sparklines;
};
export declare const X14SparklineGroup_Attributes: Attributes;

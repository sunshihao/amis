import { Attributes } from '../../../openxml/Attributes';
import { CT_Color } from '../CT_Color';
import { CT_Cfvo } from './CT_Cfvo';
export type X14DataBar = {
    'minLength'?: number;
    'maxLength'?: number;
    'border'?: boolean;
    'gradient'?: boolean;
    'direction'?: 'leftToRight' | 'rightToLeft';
    'negativeBarBorderColorSameAsPositive'?: boolean;
    'negativeBarColorSameAsPositive'?: boolean;
    'x14:cfvo'?: CT_Cfvo[];
    'x14:borderColor'?: CT_Color;
    'x14:negativeFillColor'?: CT_Color;
    'x14:negativeBorderColor'?: CT_Color;
    'x14:axisColor'?: CT_Color;
};
export declare const X14DataBar_Attributes: Attributes;

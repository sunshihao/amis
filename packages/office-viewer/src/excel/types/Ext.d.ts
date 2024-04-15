import { Attributes } from '../../openxml/Attributes';
import { X14ConditionalFormattings } from './X14CF/X14ConditionalFormattings';
import { X14SparklineGroups } from './X14Sparkline/X14SparklineGroups';
export type Ext = {
    'uri'?: string;
    'x14:id'?: string;
    'x14:conditionalFormattings'?: X14ConditionalFormattings;
    'x14:sparklineGroups'?: X14SparklineGroups;
};
export declare const Ext_Attributes: Attributes;

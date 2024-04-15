import { Attributes } from '../../../openxml/Attributes';
import { X14DataBar } from './X14DataBar';
import { X14IconSet } from './X14IconSet';
export type X14CfRule = {
    'type'?: string;
    'id'?: string;
    'x14:dataBar'?: X14DataBar;
    'x14:iconSet'?: X14IconSet;
};
export declare const X14CfRule_Attributes: Attributes;

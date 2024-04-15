import { ConditionBuilderFuncs, ConditionBuilderFields, ConditionBuilderType } from './types';
import type { OperatorType } from 'amis-core';
export interface BaseFieldConfig {
    operations: Array<OperatorType>;
}
export interface ConditionBuilderConfig {
    valueTypes?: Array<'value' | 'field' | 'func'>;
    fields?: ConditionBuilderFields;
    funcs?: ConditionBuilderFuncs;
    maxLevel?: number;
    types: {
        [propName: string]: ConditionBuilderType;
    };
}
export declare const OperationMap: {
    equal: string;
    not_equal: string;
    less: string;
    less_or_equal: string;
    greater: string;
    greater_or_equal: string;
    between: string;
    not_between: string;
    is_empty: string;
    is_not_empty: string;
    like: string;
    not_like: string;
    starts_with: string;
    ends_with: string;
    select_equals: string;
    select_not_equals: string;
    select_any_in: string;
    select_not_any_in: string;
};
declare const defaultConfig: ConditionBuilderConfig;
export default defaultConfig;

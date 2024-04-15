import { FilterMap } from './types';
/**
 * filter 是历史包袱，不建议使用。因为这是之前的语法，所以在公式解析里面做了兼容。
 * 建议用 ${ LEFT(xxx) } 这种函数调用语法。
 */
export declare const filters: FilterMap;
export declare function registerFilter(name: string, fn: (input: any, ...args: any[]) => any): void;
export declare function extendsFilters(value: FilterMap): void;
export declare function getFilters(): FilterMap;

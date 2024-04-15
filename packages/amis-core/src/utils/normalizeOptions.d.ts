import { Options } from '../types';
export declare function normalizeOptions(options: string | {
    [propName: string]: string;
} | Array<string> | Options, share?: {
    values: Array<any>;
    options: Array<any>;
}, valueField?: string): Options;

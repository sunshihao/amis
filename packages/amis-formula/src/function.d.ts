import { FunctionMap, FunctionDocMap, FunctionDocItem } from './types';
export declare const functions: FunctionMap;
export declare function registerFunction(name: string, fn: (input: any, ...args: any[]) => any): void;
export declare let functionDocs: FunctionDocMap;
export declare function registerFunctionDoc(groupName: string, item: FunctionDocItem): void;

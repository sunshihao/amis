import type { PlainObject, ThemeDefinition } from './declares';
export declare class ParseThemeData {
    style: string[];
    class: string[];
    data: ThemeDefinition;
    scope: string[];
    theme: string;
    constructor(data: ThemeDefinition, scope: string[]);
    generator(): void;
    getStyle(): string;
    getCssVariable(): string;
    getCustomClass(): string;
    /**
     * 获取自定义样式，需要使用less或scss编译后使用
     */
    getCustomStyle(): string;
    /**
     * 装载css变量
     */
    cssFormat(key: string, value: string): void;
    /**
     * 装载class
     */
    classFormat(classname: string, value: string): void;
    /**
     * 解析全局颜色
     */
    parseColor(colors: any): void;
    /**
     * 解析全局字体
     */
    parseFont(fonts: any): void;
    parseSizesBase(item: any): void;
    /**
     * 解析全局样式通用
     */
    parseGlobalCommon(items: any): void;
    /**
     * 解析阴影样式
     */
    parseShadows(items: any): void;
    /**
     * 设置组件样式
     */
    setComponentStyle(key: string, token: string, value: string | PlainObject): void;
    /**
     * 解析Button
     */
    parseButton(button: any): void;
    /**
     * 解析Tranfer
     */
    parseTransfer(transfer: any): void;
    /**
     * 解析inputRating
     */
    parseInputRating(inputRating: any): void;
    parseComponentCommon(component: any): void;
}

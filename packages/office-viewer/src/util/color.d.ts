/**
 * 处理颜色相关的函数，目前只支持 rgb
 */
export declare class Color {
    r: number;
    g: number;
    b: number;
    isValid: boolean;
    constructor(input: string);
    static fromHSL(h: number, s: number, l: number): Color;
    static fromRGB(r: number, g: number, b: number): Color;
    /**
     * 设置 lum
     */
    lum(l: number): this;
    /**
     * 改变 lum 百分比，其实不太对，但差不太多
     * @param l 百分比，比如 2 相当于 200 %
     */
    lumMod(l: number): this;
    /**
     * 改变百分比
     * @param l 百分比，比如 -0.2 相当于减少 20 %
     */
    lumOff(l: number): this;
    /**
     * h 取值范围是 0-1
     */
    hue(h: number): this;
    hueMod(h: number): this;
    hueOff(h: number): this;
    sat(s: number): this;
    satMod(s: number): this;
    satOff(s: number): this;
    /**
     * 修改 hsl 中某个部分的值
     */
    changeHsl(num: number, com: 'h' | 's' | 'l', changeType: 'set' | 'mod' | 'off'): this;
    /**
     * 互补色
     */
    comp(): this;
    shade(s: number): void;
    tint(t: number): void;
    inv(): this;
    toHex(): string;
    toRgba(alpha: number): string;
}
export declare const rgbTint: (hex: string, tint: number) => string;
/**
 * 计算两个颜色之间的渐变色
 */
export declare function interpolateColor(start: Color, end: Color, percent: number): string;

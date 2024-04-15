/**
 * 主要参考 14.2.7 Theme Part
 */
declare class ClrScheme {
    name?: string;
    colors: {
        [key: string]: string;
    };
}
interface FontScheme {
    name?: string;
}
interface FmtScheme {
    name?: string;
}
export interface ThemeElements {
    clrScheme?: ClrScheme;
    fontScheme?: FontScheme;
    fmtScheme?: FmtScheme;
}
export interface Theme {
    name?: string;
    themeElements?: ThemeElements;
}
export declare function parseTheme(doc: Document): Theme;
export {};

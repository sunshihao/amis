/**
 * 解析 settings.xml，只支持一小部分
 *
 */
import Word from '../Word';
export declare class Settings {
    clrSchemeMapping: Record<string, string>;
    autoHyphenation: boolean;
    static parse(word: Word, doc: Document): Settings;
}

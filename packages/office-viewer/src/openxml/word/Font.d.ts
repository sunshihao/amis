/**
 * 内嵌字体
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/Font%20Embedding.html
 */
import Word from '../../Word';
/**
 * 这是来自 docxjs 里的代码，参考了规范 17.8.1 里的算法
 */
export declare function deobfuscate(data: Uint8Array, guidKey: string): Uint8Array;
export declare class Font {
    name: string;
    family: string;
    altName?: string;
    url?: string;
    static fromXML(word: Word, element: Element): Font;
}

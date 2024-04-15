/**
 * Document 解析及类型定义
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/document.html
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/Main%20Document%20Story.html
 */
import Word from '../../Word';
import { Body } from './Body';
export declare class WDocument {
    body: Body;
    backgroundColor?: string;
    static fromXML(word: Word, element: Document): WDocument;
}

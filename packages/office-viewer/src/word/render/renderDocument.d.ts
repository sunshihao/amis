import Word, { WordRenderOptions } from '../../Word';
import { WDocument } from '../../openxml/word/WDocument';
/**
 * 渲染 document 主要入口
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/document.html
 */
export default function renderDocument(root: HTMLElement, word: Word, wDocument: WDocument, renderOptions: WordRenderOptions): HTMLElement;

/**
 * 渲染 body 节点
 */
import Word, { WordRenderOptions } from '../../Word';
import { Body } from '../../openxml/word/Body';
import { WDocument } from '../../openxml/word/WDocument';
/**
 * 渲染文档主体
 */
export default function renderBody(root: HTMLElement, word: Word, bodyEl: HTMLElement, wDocument: WDocument, body: Body, renderOptions: WordRenderOptions): void;

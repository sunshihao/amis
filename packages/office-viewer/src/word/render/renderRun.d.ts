/**
 * run 相关的 http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/Run_1.html
 */
import Word from '../../Word';
import { Run } from '../../openxml/word/Run';
import type { Paragraph } from '../../openxml/word/Paragraph';
/**
 * 更新文档里的所有变量
 */
export declare function updateVariableText(word: Word): void;
/**
 * 渲染 run 节点
 *
 * @param inFldChar 是否在 complex field 里，预留功能，目前还不支持
 */
export default function renderRun(word: Word, run: Run, paragraph?: Paragraph, inFldChar?: boolean, inHeader?: boolean): HTMLElement;

import { Hyperlink } from '../../openxml/word/Hyperlink';
import Word from '../../Word';
import type { Paragraph } from '../../openxml/word/Paragraph';
/**
 * 渲染链接
 */
export declare function renderHyperLink(word: Word, hyperlink: Hyperlink, paragraph?: Paragraph): HTMLElement;

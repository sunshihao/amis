import Word from '../../Word';
import { Paragraph } from '../../openxml/word/Paragraph';
/**
 * 渲染段落
 * @param renderEmptySpace 如果是 true 的话，当内容为空时会自动加上 &nbsp;
 */
export default function renderParagraph(word: Word, paragraph: Paragraph, renderEmptySpace?: boolean, inHeader?: boolean): HTMLElement;

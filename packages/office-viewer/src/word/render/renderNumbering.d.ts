import { NumberPr } from '../../openxml/word/numbering/NumberProperties';
import Word from '../../Word';
/**
 * 渲染列表 http://officeopenxml.com/WPnumbering.php
 * 为了支持复杂场景，这里使用代码来直接生成内容
 */
export declare function renderNumbering(p: HTMLElement, word: Word, numPr: NumberPr): HTMLElement | null;

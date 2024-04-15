import Word from '../../Word';
import { Break } from '../../openxml/word/Break';
/**
 * 解析 br http://officeopenxml.com/WPtextSpecialContent-break.php
 * 其实还有 column 和 page，但目前还没实现分页渲染，所以目前先简单处理，后续再看看如何处理
 * @returns 生成的 dom 结构
 */
export declare function renderBr(word: Word, brak: Break): HTMLElement;

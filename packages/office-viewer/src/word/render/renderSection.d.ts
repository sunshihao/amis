import { WDocument } from '../../openxml/word/WDocument';
import { Section } from '../../openxml/word/Section';
import Word, { WordRenderOptions } from '../../Word';
/**
 * 渲染「节」，在 word 中每个节都可以有自己的页边距和页面大小设置，但目前其实并没有实现分页展现，等后续再考虑
 */
export declare function renderSection(word: Word, wDocument: WDocument, section: Section, renderOptions: WordRenderOptions): HTMLElement;

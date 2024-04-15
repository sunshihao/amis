import { InstrText } from '../../openxml/word/InstrText';
import Word from '../../Word';
/**
 * 渲染字段指令，目前基本都没实现
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/Field%20definitions.html
 * http://officeopenxml.com/WPfieldInstructions.php
 */
export declare function renderInstrText(word: Word, instrText: InstrText): HTMLElement;

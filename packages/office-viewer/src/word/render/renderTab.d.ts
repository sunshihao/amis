import { Tab } from '../../openxml/word/Tab';
import Word from '../../Word';
/**
 * 渲染 tab
 * 不支持 tabs 里的自定义宽度，因为要算渲染后的宽度，比较麻烦
 * http://officeopenxml.com/WPtab.php
 */
export declare function renderTab(word: Word, tab: Tab, renderWidth?: boolean): HTMLElement;

import { Properties } from '../../openxml/word/properties/Properties';
import Word from '../../Word';
/**
 * 设置元素样式，因为好几个地方用所以统一一下
 */
export declare function setElementStyle(word: Word, element: HTMLElement, properties: Properties | undefined): void;

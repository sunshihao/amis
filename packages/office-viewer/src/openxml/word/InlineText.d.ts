/**
 * 通用的文本元素
 */
import Word from '../../Word';
import { BookmarkStart } from './Bookmark';
import { Hyperlink } from './Hyperlink';
import { Run } from './Run';
type InlineChild = Run | BookmarkStart | Hyperlink;
export declare class InlineText {
    children: InlineChild[];
    addChild(child: InlineChild): void;
    static fromXML(word: Word, element: Element): InlineText;
}
export {};

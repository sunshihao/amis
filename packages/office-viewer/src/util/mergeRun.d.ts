/**
 * 合并 p 下相同的文本，主要是为了方便替换变量
 */
import Word from '../Word';
/**
 * 只支持处理 w:r 下有 w:t 的情况
 */
export declare function canMerge(element: Element): boolean;
/**
 * 合并 p 下相同的文本
 */
export declare function mergeRunInP(word: Word, p: Element): void;
/**
 * 合并
 * @param document
 */
export declare function mergeRun(word: Word, doc: Document): void;

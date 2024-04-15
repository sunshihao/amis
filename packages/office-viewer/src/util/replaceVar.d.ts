/**
 * 执行变量替换，和普通变量不同，这个支持数组，但因为是提前执行好的，没法再动态生效了
 * 为了避免 word 里不必要的标签要先执行 mergeRun
 */
import Word from '../Word';
/**
 * 替换单个文本变量
 */
export declare function replaceT(word: Word, t: Element, data: any): void;
/**
 * 变量替换主入口
 * @param word
 * @param documentData
 * @param replaceImage 是否替换掉图片，只有下载时才替换，避免性能问题
 */
export declare function replaceVar(word: Word, documentData: Document, replaceImage?: boolean): Promise<void>;

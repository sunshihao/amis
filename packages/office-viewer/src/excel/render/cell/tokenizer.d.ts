import { IRPrElt } from '../../types/IRPrElt';
export interface Token {
    /**
     * 类型，w 代表单词或汉字，h 代表连字符，s 代表空格，br 代表换行
     */
    type: 'w' | 'h' | 's' | 'br';
    /**
     * 文本样式
     */
    rPr?: IRPrElt;
    /**
     * 文本
     */
    t: string;
    /**
     * 字符宽度，这个宽度需要在后面确定
     */
    w?: number;
}
/**
 * 将文本拆分为 token，主要是保证英文单词不被截断
 * @param text
 */
export declare function tokenizer(text: string): Token[];

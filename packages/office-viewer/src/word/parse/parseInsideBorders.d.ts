import Word from '../../Word';
/**
 * parseBorders 不支持 insideH 和 insideV，所以单独支持一下
 * 实际显示时需要过滤掉第一列
 */
export declare function parseInsideBorders(word: Word, element: Element): {
    H: string | undefined;
    V: string | undefined;
};

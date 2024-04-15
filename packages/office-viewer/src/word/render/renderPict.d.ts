import { Pict } from '../../openxml/word/Pict';
import Word from '../../Word';
/**
 * 老的 vml 格式，目前只支持图片
 */
export declare function renderPict(word: Word, pict: Pict): HTMLImageElement | null;

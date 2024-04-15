import Word from '../../Word';
import { Drawing } from '../../openxml/drawing/Drawing';
/**
 * 渲染图片，目前只支持 picture
 * http://officeopenxml.com/drwOverview.php
 * @param inHeader，如果在 header 中，位置计算要特殊处理
 *
 */
export declare function renderDrawing(word: Word, drawing: Drawing, inHeader?: boolean): HTMLElement | null;

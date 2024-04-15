import { IPicture } from '../../types/IDrawing';
import { Rect } from '../Rect';
import { BaseDrawingRender } from './BaseDrawingRender';
export declare class PicRender extends BaseDrawingRender {
    constructor(container: HTMLElement, displayRect: Rect, gid: string, pic: IPicture);
}

import { Sheet } from '../../sheet/Sheet';
import { IPicture } from '../../types/IDrawing';
import { Rect } from '../Rect';
import { SheetCanvas } from '../SheetCanvas';
export declare function drawPic(currentSheet: Sheet, canvas: SheetCanvas, displayRect: Rect, drawingRect: Rect, rowHeaderWidth: number, colHeaderHeight: number, pic: IPicture): void;

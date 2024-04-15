import type { Workbook } from '../../Workbook';
import { Region } from '../../sheet/ViewRange';
import { SheetSelection } from '../selection/SheetSelection';
import { HitTestResult } from '../selection/hitTest';
export interface DragState {
    workbook?: Workbook;
    container?: HTMLElement;
    isDragging: boolean;
    dragStart: {
        pageX: number;
        pageY: number;
        offsetX: number;
        offsetY: number;
    };
    row: number;
    col: number;
    tmpRowHeight: number;
    tmpColWidth: number;
    dragType: HitTestResult['type'];
    region: Region;
    selection?: SheetSelection;
}

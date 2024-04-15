/**
 * 处理拖拽事件，包括单元格和表头部分
 */
import { Workbook } from '../../Workbook';
import { HitTestResult } from '../selection/hitTest';
import { DragState } from './DragState';
export declare const dragState: DragState;
export declare function resetDragState(): void;
/**
 * 鼠标按下事件
 */
export declare function handleMousedown(workbook: Workbook, hitTestResult: HitTestResult, container: HTMLElement, mouseEvent: MouseEvent): void;

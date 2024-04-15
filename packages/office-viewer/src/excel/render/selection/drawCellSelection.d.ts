import { Workbook } from '../../Workbook';
import { RangeRef } from '../../types/RangeRef';
import { Canvas } from '../Canvas';
import { SheetSelection } from './SheetSelection';
/**
 * 绘制选中内容区域的高亮
 * @param workbook
 * @param canvas
 * @param selection
 * @param range
 * @returns
 */
export declare function drawCellSelection(workbook: Workbook, canvas: Canvas, selection: SheetSelection, range: RangeRef): void;

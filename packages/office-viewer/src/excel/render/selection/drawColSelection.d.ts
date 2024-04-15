import { Workbook } from '../../Workbook';
import { RangeRef } from '../../types/RangeRef';
import { Canvas } from '../Canvas';
import { SheetSelection } from './SheetSelection';
/**
 * 绘制选择整列的选框
 * @param workbook
 * @param canvas
 * @param selection
 * @param range
 */
export declare function drawColSelection(workbook: Workbook, canvas: Canvas, selection: SheetSelection, range: RangeRef): void;

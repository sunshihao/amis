/**
 * 绘制选择整行的选框
 * @param workbook
 * @param canvas
 * @param selection
 * @param range
 */
import { Workbook } from '../../Workbook';
import { RangeRef } from '../../types/RangeRef';
import { Canvas } from '../Canvas';
import { SheetSelection } from './SheetSelection';
export declare function drawRowSelection(workbook: Workbook, canvas: Canvas, selection: SheetSelection, range: RangeRef): void;

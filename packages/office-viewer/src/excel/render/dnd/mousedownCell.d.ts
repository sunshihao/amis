import type { Workbook } from '../../Workbook';
import { SheetSelection } from '../selection/SheetSelection';
import { HitTestResult } from '../selection/hitTest';
/**
 * 根据点击的单元格生成选区
 * @param workbook
 * @param hitTestResult
 * @returns 新的选区
 */
export declare function mousedownCell(workbook: Workbook, hitTestResult: HitTestResult): SheetSelection;

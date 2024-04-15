import { RangeRef } from '../../types/RangeRef';
import { FrozenViewRange } from '../cell/frozen/drawFrozen';
import { Position } from './Position';
import { IAbsoluteAnchor, IOneCellAnchor, ITwoCellAnchor } from '../../types/IDrawing';
import { Region, ViewRange } from '../../sheet/ViewRange';
export type HitTestCommon = Position & RangeRef;
/**
 * 点击到表头的最左上角
 */
export type HitTestResult = HitTestCommon & {
    /**
     * 点击到的类型
     */
    type: 'drawing' | 'corner' | 'cell' | 'row-header' | 'col-header' | 'row-grid' | 'col-grid';
    /**
     * 点击到的区域
     */
    region: Region;
    /**
     * 点到图形
     */
    drawing?: IOneCellAnchor | ITwoCellAnchor | IAbsoluteAnchor;
    /**
     * 点击到的单元格信息，这个不受合并单元格的影响
     */
    realRow?: number;
    /**
     * 点击到的单元格信息，这个不受合并单元格的影响
     */
    realCol?: number;
};
/**
 * 判断当前点击位置下是什么
 * @param offsetX 鼠标点击的 x 坐标
 * @param offsetY 鼠标点击的 y 坐标
 * @param rowHeaderWidth 表头行高
 * @param colHeaderHeight 表头列宽
 * @param viewRange 内容显示区的范围
 * @param frozenViewRange 冻结区域的范围
 */
export declare function hitTest(offsetX: number, offsetY: number, rowHeaderWidth: number, colHeaderHeight: number, gridLineHitRange: number, viewRange: ViewRange | undefined, frozenViewRange: FrozenViewRange | undefined, mergeCells: RangeRef[]): HitTestResult | null;

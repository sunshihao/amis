/**
 * 自动裁剪，Excel 中似乎会自动避免遮挡，目前还不清楚是怎么实现的
 */
import { IDataProvider } from '../../types/IDataProvider';
import { CellInfoWithSize } from './CellInfoWithSize';
export declare function autoClip(ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, dataProvider: IDataProvider, cellInfoMap: Map<string, CellInfoWithSize>): void;

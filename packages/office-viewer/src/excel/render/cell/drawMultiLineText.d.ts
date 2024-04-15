import { ST_HorizontalAlignment, ST_VerticalAlignment } from '../../../openxml/ExcelTypes';
import { Sheet } from '../../sheet/Sheet';
import { FontStyle } from '../../types/FontStyle';
import { IDataProvider } from '../../types/IDataProvider';
import type { ExcelRender } from '../ExcelRender';
import { LinkPosition } from './LinkPosition';
import { WrapLine } from './autoWrapText';
export declare function drawMultiLineText(excelRender: ExcelRender, sheet: Sheet, ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, dataProvider: IDataProvider, fontStyle: FontStyle, lines: WrapLine[], x: number, y: number, width: number, height: number, padding: number, horizontal: ST_HorizontalAlignment, vertical: ST_VerticalAlignment, text: string, row: number, linkPositionCache?: LinkPosition[]): void;

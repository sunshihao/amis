import { ST_HorizontalAlignment, ST_VerticalAlignment } from '../../../openxml/ExcelTypes';
import { IDataProvider } from '../../types/IDataProvider';
import { IRElt } from '../../types/IRElt';
import { FontStyle } from '../../types/FontStyle';
import { Sheet } from '../../sheet/Sheet';
import { ExcelRender } from '../ExcelRender';
/**
 * 绘制单行富文本，这里复用了多行富文本的逻辑，所以这里只进行 token 拆分
 */
export declare function drawSingleLineRichText(excelRender: ExcelRender, sheet: Sheet, ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, dataProvider: IDataProvider, fontStyle: FontStyle, richTexts: IRElt[], x: number, y: number, width: number, height: number, horizontal: ST_HorizontalAlignment, vertical: ST_VerticalAlignment, row: number): void;

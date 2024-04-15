import { XMLNode } from '../../../../util/xml';
import { IShape } from '../../../types/IDrawing';
import { IWorkbook } from '../../../types/IWorkbook';
export declare function parseShape(workbook: IWorkbook, child: XMLNode, twoCellAnchorElement: Element): IShape;

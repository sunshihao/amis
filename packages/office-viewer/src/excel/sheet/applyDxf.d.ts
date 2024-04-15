import { CT_Dxf } from '../../openxml/ExcelTypes';
import { CellInfo } from '../types/CellInfo';
/**
 * 应用单元格样式，xdf 是指 Differential formatting，所以只应用部分样式
 */
export declare function applyDxf(cellInfo: Partial<CellInfo>, dxf?: CT_Dxf | null): void;

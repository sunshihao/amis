import { CT_Table } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { RangeRef } from '../../types/RangeRef';
import { Sheet } from '../Sheet';
export declare function applyTableStyle(cellInfo: CellInfo, tablePart: CT_Table, ref: RangeRef, sheet: Sheet, row: number, col: number): void;

import { CellData } from '../../../types/worksheet/CellData';
import { RangeRef } from '../../../types/RangeRef';
/**
 * 制造空值，这个主要是给 containsBlanks 条件格式用，目前的实现下如果没有值就没法渲染
 */
export declare function makeBlankValue(cellData: CellData[][], range: RangeRef): void;

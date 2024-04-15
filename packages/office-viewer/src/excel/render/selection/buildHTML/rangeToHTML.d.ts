import { Workbook } from '../../../Workbook';
import { RangeRef } from '../../../types/RangeRef';
/**
 * 基于选区生成 HTML 表格
 * @param workbook
 * @param range 选区定义
 */
export declare function rangeToHTML(workbook: Workbook, range: RangeRef): {
    table: string;
    tsv: string[];
};

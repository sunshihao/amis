import { TableStyleDef } from '../../types/TableStyleDef';
/**
 * 构建演示表，这个主要原因是样式应用有顺序要求，所以先构建为对象格式
 */
export declare function buildTableStyle(tableStyle: TableStyleDef): {
    wholeTable: number | undefined;
    headerRow: number | undefined;
    firstRowStripe: number | undefined;
    firstColumnStripe: number | undefined;
    totalRow: number | undefined;
    firstColumn: number | undefined;
    lastColumn: number | undefined;
};

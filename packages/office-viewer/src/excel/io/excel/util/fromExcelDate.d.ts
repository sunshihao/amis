/**
 * 将 Excel 日期转换为 Date 对象
 * 来自 https://github.com/RaschidJFR/js-excel-date-convert
 * @param excelDate Excel 日期
 * @param date1904 是否使用 1904 年作为基准
 */
export declare function fromExcelDate(excelDate: number | string, date1904: boolean): Date;
/**
 * Encode date to excel
 * @param {Date} date
 * @param {boolean} [date1904] Whether to use the 1904 Date System. See https://bettersolutions.com/excel/dates-times/1904-date-system.htm
 * @author Raschid JF Rafaelly <hello&commat;raschidjdr.dev>
 */
export declare function toExcelDate(date: Date, date1904?: boolean): number;

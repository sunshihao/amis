/**
 * 将 A1 转成 {col: 0, row: 0}
 * 从 exceljs 中拷贝过来的方法
 * 简单进行了修改，必须同时有行和列，如果只有一个就用 lettersToNumber
 * 返回结果是从 0 开始的
 * @param value
 */
export declare function decodeAddress(value: string): {
    col: number;
    row: number;
};

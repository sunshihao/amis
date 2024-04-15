/**
 * 构建坐标轴
 */
import { CT_CatAx, CT_ValAx } from '../../../../openxml/ChartTypes';
/**
 * 将 Excel chart 的坐标轴转换为 Echarts 的坐标轴
 */
export declare function convertAxis(categories: string[], catAx?: CT_CatAx, valAx?: CT_ValAx): {
    xAxis: {};
    yAxis: {};
};

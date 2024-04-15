import { CT_Legend } from '../../../../openxml/ChartTypes';
/**
 * 将 Excel chart 的图例转换为 Echarts 的图例
 */
export declare function convertLegend(categories: string[], chartLegend?: CT_Legend): import("echarts").EChartOption.Legend;

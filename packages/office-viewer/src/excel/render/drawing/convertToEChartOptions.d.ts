import type echarts from 'echarts';
import { Workbook } from '../../Workbook';
import { IChartSpace } from '../../types/IChartSpace';
/**
 * 将 chartSpace 配置转成 EChartOptions
 * P3365
 */
export declare function convertToEChartOptions(workbook: Workbook, chartSpace: IChartSpace): echarts.EChartOption | null;

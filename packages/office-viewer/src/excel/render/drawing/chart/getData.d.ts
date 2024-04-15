import { CT_NumDataSource } from '../../../../openxml/ChartTypes';
import { Workbook } from '../../../Workbook';
/**
 * 获取数据，目前只从 cache 里获取，后续改成动态获取
 */
export declare function getData(workbook: Workbook, val?: CT_NumDataSource): number[];

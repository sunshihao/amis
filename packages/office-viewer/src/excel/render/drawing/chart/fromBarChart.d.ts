import { CT_BarChart } from '../../../../openxml/ChartTypes';
import { Workbook } from '../../../Workbook';
export declare function fromBarChart(workbook: Workbook, barChart: CT_BarChart): {
    categories: string[];
    series: {
        name: string;
        type: string;
        stack: string | undefined;
        data: number[];
    }[];
};

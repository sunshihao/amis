import { CT_PieChart } from '../../../../openxml/ChartTypes';
import { Workbook } from '../../../Workbook';
export declare function fromPieChart(workbook: Workbook, pieChart: CT_PieChart): {
    categories: string[];
    series: {
        name: string;
        data: number[];
        type: string;
    }[];
};

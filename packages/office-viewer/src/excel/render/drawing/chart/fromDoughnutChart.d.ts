import { CT_DoughnutChart } from '../../../../openxml/ChartTypes';
import { Workbook } from '../../../Workbook';
export declare function fromDoughnutChart(workbook: Workbook, doughnutChart: CT_DoughnutChart): {
    categories: string[];
    series: {
        name: string;
        data: number[];
        type: string;
        radius: string[];
        emphasis: {
            label: {
                show: boolean;
                fontSize: number;
                fontWeight: string;
            };
        };
    }[];
};

import { CT_Title } from '../../../../openxml/ChartTypes';
export declare function convertTitle(chartTitle?: CT_Title): {
    top?: string | number | undefined;
    right?: string | number | undefined;
    bottom?: string | number | undefined;
    left?: string | number | undefined;
    text: string;
};

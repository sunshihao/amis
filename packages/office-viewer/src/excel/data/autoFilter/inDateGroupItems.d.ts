import { ST_DateTimeGrouping } from '../../../openxml/ExcelTypes';
export type DateGroupItem = {
    date: Date;
    dateTimeGrouping: ST_DateTimeGrouping;
};
export declare function inDateGroupItems(dateGroupItems: DateGroupItem[], date: Date): boolean;

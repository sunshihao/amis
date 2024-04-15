import { CT_CfRule, ST_TimePeriod } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { RangeRef } from '../../types/RangeRef';
import { Sheet } from '../Sheet';
export declare function checkDate(date: Date, timePeriod: ST_TimePeriod): boolean;
/**
 * 时间相关的判断，这里不依赖公式
 */
export declare function timePeriod(sheet: Sheet, cellInfo: CellInfo, ranges: RangeRef[], cfRule: CT_CfRule): boolean;

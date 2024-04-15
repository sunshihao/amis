import { CT_CfRule } from '../../../openxml/ExcelTypes';
import { CellInfo } from '../../types/CellInfo';
import { Sheet } from '../Sheet';
export declare function equal(text: string, formula: string[]): boolean;
export declare function notEqual(text: string, formula: string[]): boolean;
export declare function greaterThan(text: string, formula: string[]): boolean;
export declare function greaterThanOrEqual(text: string, formula: string[]): boolean;
export declare function lessThan(text: string, formula: string[]): boolean;
export declare function lessThanOrEqual(text: string, formula: string[]): boolean;
export declare function between(text: string, formula: string[]): boolean;
export declare function notBetween(text: string, formula: string[]): boolean;
export declare function containsText(text: string, formula: string[]): boolean;
export declare function notContains(text: string, formula: string[]): boolean;
export declare function beginsWith(text: string, formula: string[]): boolean;
export declare function endsWith(text: string, formula: string[]): boolean;
/**
 * 类似
 *  <cfRule type="cellIs" dxfId="0" priority="1" operator="greaterThanOrEqual">
      <formula>50</formula>
    </cfRule>
 */
export declare function cellIs(sheet: Sheet, cellInfo: CellInfo, cfRule: CT_CfRule): boolean;

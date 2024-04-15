/**
 * lvl 的解析，只支持部分
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/abstractNum.html
 */
import { ST_MultiLevelType } from '../../Types';
import { Lvl } from './Lvl';
import Word from '../../../Word';
export declare class AbstractNum {
    abstractNumId: string;
    multiLevelType?: ST_MultiLevelType;
    lvls: Record<string, Lvl>;
    static fromXML(word: Word, element: Element): AbstractNum;
}

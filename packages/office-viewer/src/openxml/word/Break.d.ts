/**
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/br.html
 */
import Word from '../../Word';
import { ST_BrClear, ST_BrType } from '../Types';
export declare class Break {
    /**
     * 目前也只支持这种
     */
    type: ST_BrType;
    clear?: ST_BrClear;
    static fromXML(word: Word, element: Element): Break;
}

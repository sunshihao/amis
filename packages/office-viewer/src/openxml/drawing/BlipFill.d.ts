/**
 * http://webapp.docx4java.org/OnlineDemo/ecma376/DrawingML/blipFill_2.html
 */
import Word from '../../Word';
import { Blip } from './Blip';
export declare class BlipFill {
    blip?: Blip;
    static fromXML(word: Word, element?: Element | null): BlipFill;
}

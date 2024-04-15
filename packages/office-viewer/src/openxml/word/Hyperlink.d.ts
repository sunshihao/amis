/**
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/hyperlink_2.html
 */
import { Relationship } from '../../word/parse/parseRelationship';
import Word from '../../Word';
import { Run } from './Run';
export declare class Hyperlink {
    anchor?: string;
    relation?: Relationship;
    children: Run[];
    tooltip?: string;
    addChild(Run: Run): void;
    static fromXML(word: Word, element: Element): Hyperlink;
}

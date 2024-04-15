import { Relationship } from '../../word/parse/parseRelationship';
import Word from '../../Word';
export declare class Blip {
    embled?: Relationship;
    src?: string | null;
    static fromXML(word: Word, element: Element): Blip;
}

/**
 * 解析 _rels/.rels 文件
 */
export interface Relationship {
    id: string;
    type: string;
    target: string;
    targetMode?: string;
    part: 'root' | 'word';
}
export declare function parseRelationship(element: Element, part: 'root' | 'word'): Relationship;
export declare function parseRelationships(element: Document, part: 'root' | 'word'): Record<string, Relationship>;

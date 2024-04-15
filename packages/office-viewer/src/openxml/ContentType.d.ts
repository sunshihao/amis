interface Override {
    partName: string;
    contentType: string;
}
interface Default {
    extension: string;
    contentType: string;
}
export interface ContentTypes {
    overrides: Override[];
    defaults: Default[];
}
/**
 * 解析 [Content_Types].xml
 */
export declare function parseContentType(doc: Document): ContentTypes;
export {};

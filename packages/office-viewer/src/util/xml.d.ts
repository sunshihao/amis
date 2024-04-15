/**
 * 解析 xml
 */
export declare function parseXML(content: string): Document;
/**
 * 构建 xml 文本
 */
export declare function buildXML(doc: Node): string;
/**
 * xml 节点定义，这里字段名用缩写是为了减少 json 体积
 */
export interface XMLNode {
    /**
     * tag 标签名
     */
    tag: string;
    /**
     * attributes 属性
     */
    attrs: Record<string, string>;
    /**
     * children 子节点
     */
    children: XMLNode[];
    /**
     * text 文本内容
     */
    text?: string;
    /**
     * isSelfClosing 是否是闭合
     */
    s?: boolean;
}
/**
 * 将 xml 转换为 json 数据，主要用于 Word，不用 DOMParser 的好处是可以在浏览器和 node 环境下使用
 */
export declare function xml2json(xml: string): Promise<XMLNode>;
/**
 * 根据标签名获取节点
 * @param node 节点
 * @param tagName 标签名
 * @param deep 是否深度查找
 * @returns
 */
export declare function getNodeByTagName(node: XMLNode, tagName: string, deep?: boolean): XMLNode | null;
/**
 * 根据标签名获取节点列表
 * @param node 节点
 * @param tagName 标签名
 * @returns
 */
export declare function getNodesByTagName(node: XMLNode, tagName: string): XMLNode[];

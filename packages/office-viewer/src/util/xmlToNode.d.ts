import { XMLNode } from './xml';
/**
 * 简单 XML 解析，目前看和 SaxesParser 比快不了多少，10 万行快了 1 秒，因为实现可能不完全准确，目前先不用
 */
export declare function xmlToNode(xml: string): XMLNode;

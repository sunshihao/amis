import { Attributes } from '../openxml/Attributes';
import { XMLNode } from '../util/xml';
/**
 * 通用属性解析
 * @param node xml 节点
 * @param attributes 属性定义
 * @param fillDefault 是否补上默认值
 */
export declare function autoParse(node: XMLNode | null, attributes: Attributes, fillDefault?: boolean): any;

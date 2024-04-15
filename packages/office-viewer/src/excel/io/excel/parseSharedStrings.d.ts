/**
 * 解析 sharedStrings.xml 文件
 */
import { StringItem } from '../../types/StringItem';
/**
 * 这里接口使用字符串是为了方便单测
 * @param xml
 */
export declare function parseSharedStrings(xml: string): Promise<StringItem[]>;

/**
 * 解析 relationship 的 xml 文件
 */
import { IRelationship } from '../excel/types/IRelationship';
export declare function parseRelationship(xml: string): Promise<IRelationship[]>;

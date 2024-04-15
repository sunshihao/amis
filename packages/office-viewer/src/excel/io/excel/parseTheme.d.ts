/**
 * 解析主题，由于类型冲突，这里是用 DMLTypes
 * @param xml
 */
import { CT_Theme } from '../../types/CT_Theme';
export declare function parseTheme(xml: string): Promise<CT_Theme>;

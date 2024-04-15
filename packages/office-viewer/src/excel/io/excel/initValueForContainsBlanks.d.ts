import { IWorksheet } from '../../types/IWorksheet';
/**
 * 后面判断 containsBlanks 时需要单元格有值，不然 getViewPointData 会拿不到数据导致无法判断
 * 这个方法的作用是保证在 containsBlanks 检测范围内的单元格都有值
 */
export declare function initValueForContainsBlanks(worksheet: IWorksheet): void;

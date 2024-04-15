/**
 * section 属性
 * word 文档是按 section 组织的
 * 参考了 docx 里的类型定义
 */
import Word from '../../Word';
import { ST_PageOrientation } from '../Types';
import { Paragraph } from './Paragraph';
import { Table } from './Table';
import { Body } from './Body';
import { Header } from './Header';
export type PageSize = {
    width: string;
    height: string;
    orientation?: ST_PageOrientation;
};
export type PageMargin = {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    header?: string;
    footer?: string;
    gutter?: string;
};
/**
 * 列设置，其实这里支持
 */
export interface Column {
    num?: number;
    space?: string;
}
export type SectionChild = Paragraph | Table;
export interface SectionPr {
    pageSize?: PageSize;
    pageMargin?: PageMargin;
    cols?: Column;
    headers?: {
        [key in HeaderType]?: Header;
    };
    footers?: {
        [key in HeaderType]?: Header;
    };
}
export type HeaderType = 'default' | 'first' | 'even';
export declare class Section {
    properties: SectionPr;
    children: SectionChild[];
    addChild(child: SectionChild): void;
    static parsePr(word: Word, element: Element, body: Body): SectionPr;
}

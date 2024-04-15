/**
 * dom 相关的操作
 */
import { CSSStyle } from '../openxml/Style';
/**
 * 样式对象转成 css 文本
 */
export declare function styleToText(style?: CSSStyle): string;
/**
 * 设置元素样式
 */
export declare function applyStyle(el: HTMLElement, style?: CSSStyle): void;
/**
 * 创建元素
 */
export declare function createElement(tagName: string): HTMLElement;
/**
 * 创建 SVG 元素
 */
export declare function createSVGElement(tagName: string): SVGElement;
/**
 * 添加子节点，会做一些判断避免报错
 */
export declare function appendChild(parent: HTMLElement, child?: Node | null): void;
/**
 * 删除子节点，会做一些判断避免报错
 */
export declare function removeChild(parent: HTMLElement, child?: Node | null): void;
/**
 * 添加注释节点
 */
export declare function appendComment(parent: HTMLElement, comment: string): void;
/**
 * 添加 css 类
 */
export declare function addClassName(el: HTMLElement, className: string): void;
/**
 * 批量添加 css 类
 */
export declare function addClassNames(el: HTMLElement, classNames: string[]): void;

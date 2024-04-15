import { Workbook } from '../Workbook';
/**
 * 目前打印基于拷贝功能实现，所以还不支持图表及图片等 drawing 元素
 * @param iframe
 * @param workbook
 */
export declare function renderInIframe(iframe: HTMLIFrameElement, workbook: Workbook): void;

import { HitTestResult } from './hitTest';
/**
 * 根据 hitTest 结果更新鼠标样式
 */
export declare function updateCursor(container: HTMLElement, hitTestResult: HitTestResult | null, pointerOnLink: boolean | string): void;

/**
 * 用于缩放 drawing 的边框，目前没实现编辑功能所以还不能用，只是展示
 */
export declare class ResizeBox {
    /**
     * 边框元素
     */
    box: HTMLElement;
    /**
     * 左上角的操作节点
     */
    topLeft: HTMLElement;
    /**
     * 顶部的操作节点
     */
    top: HTMLElement;
    /**
     * 右上角的操作节点
     */
    topRight: HTMLElement;
    /**
     * 左侧的操作节点
     */
    left: HTMLElement;
    /**
     * 右侧的操作节点
     */
    right: HTMLElement;
    /**
     * 左下角的操作节点
     */
    bottomLeft: HTMLElement;
    /**
     * 底部的操作节点
     */
    bottom: HTMLElement;
    /**
     * 右下角的操作节点
     */
    bottomRight: HTMLElement;
    /**
     * 控制节点的大小，需要和 CSS 里保持一致
     */
    controllerSize: number;
    constructor(container: HTMLElement);
    /**
     * 更新位置信息
     */
    updatePosition(x: number, y: number, width: number, height: number): void;
    hide(): void;
}

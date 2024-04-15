/**
 * 排序按钮
 */
export declare class SortButtonUI {
    element: HTMLElement;
    /**
     * 是否是激活状态
     */
    active: boolean;
    constructor(container: HTMLElement, text: string, onClick: (active: boolean) => void, active: boolean, iconSVG: string);
    setActive(active: boolean): void;
}

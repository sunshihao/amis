import { EditorDNDManager } from '.';
import { EditorNodeType } from '../store/node';
import { DNDModeInterface } from './interface';
export declare class DefaultDNDMode implements DNDModeInterface {
    readonly dnd: EditorDNDManager;
    readonly region: EditorNodeType;
    readonly dndContainer: HTMLElement;
    dropBeforeId?: string;
    constructor(dnd: EditorDNDManager, region: EditorNodeType);
    /**
     * 记录上次交换时的鼠标位置。
     */
    exchangeX: number;
    exchangeY: number;
    /**
     * 首次拖入，把 ghost 插入进来。让用户有个直观感受。
     * @param e
     * @param ghost
     */
    enter(e: DragEvent, ghost: HTMLElement): void;
    /**
     * 拖出去了，就移除 ghost
     * @param e
     * @param ghost
     */
    leave(e: DragEvent, ghost: HTMLElement): void;
    over(e: DragEvent, ghost: HTMLElement): void;
    /**
     * 返回个相对位置，如果没有数据会插入到结尾。
     */
    getDropBeforeId(): string | undefined;
    /**
     * 获取当时拖动到了哪个节点上面。
     */
    getTarget(e: DragEvent): HTMLElement | null;
    /**
     * 获取区域的直接孩子，因为有时候会在孩子的孩子里面。
     * 但是插入 ghost 的相对位置，insertBefore 只能是当前孩子。
     * @param dom
     * @param descend
     */
    getChild(dom: HTMLElement, descend: HTMLElement): HTMLElement;
    /**
     * 销毁
     */
    dispose(): void;
}

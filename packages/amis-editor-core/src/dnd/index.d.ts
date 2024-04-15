import { EditorManager } from '../manager';
import { EditorStoreType } from '../store/editor';
import { EditorNodeType } from '../store/node';
import { DNDModeInterface } from './interface';
export declare class EditorDNDManager {
    readonly manager: EditorManager;
    readonly store: EditorStoreType;
    toDispose: Array<() => void>;
    /**
     * 这个会随着 region 的切换，每次动态创建。
     */
    dndMode?: DNDModeInterface;
    /**
     * 拖拽对象 dom。
     */
    readonly dragGhost: HTMLElement;
    /**
     * 统计dragEnter 的次数，因为这个方法会调用很多次，
     * 有时候只想第一次进来的时候处理逻辑
     */
    dragEnterCount: number;
    /**
     * 当前被拖动的渲染器元素。注意这里不一定是 e.target。
     */
    dragElement?: HTMLElement;
    /**
     * 拖拽跟随元素
     */
    dragImage?: HTMLElement;
    /**
     * 记录上次鼠标位置信息，协助拖拽计算的。
     */
    lastX: number;
    lastY: number;
    lastMoveAt: number;
    curDragId: string;
    startX: number;
    startY: number;
    constructor(manager: EditorManager, store: EditorStoreType);
    /**
     * 创建拖拽跟随元素，如果用默认太大了，而且有时候不统一。
     * @param id
     * @param node
     */
    createDragImage(id: string, node?: EditorNodeType): HTMLDivElement;
    /**
     * 销毁拖拽跟随元素
     */
    disposeDragImage(): void;
    /**
     * 切换到目标区域。
     * @param e
     * @param id
     * @param region
     */
    switchToRegion(e: DragEvent, id: string, region: string): boolean;
    /**
     * 根据区域的配置，创建拖拽模式实例。
     * 比如 table 列区域的拖拽就是放根线表示拖入的位置。
     * @param region
     */
    makeDNDModeInstance(region: EditorNodeType): DNDModeInterface | null;
    /**
     * 拖拽入口，一个是拖拽按钮 toolbar，一个是 outline 里面的导航项
     * @param id
     * @param e
     */
    startDrag(id: string, e: DragEvent): void;
    /**
     * 有东西拖进来了。目前只支持内部面边里面的可用组件，后续还会支持其他类型。
     * @param e
     */
    dragEnter(e: DragEvent): void;
    /**
     * 拖入后的每一次移动，除了切换区域的逻辑外都丢给 DNDMode 那个去处理了。
     * @param e
     */
    dragOver(e: DragEvent): void;
    /**
     * 拖拽释放的逻辑。
     * @param e
     */
    drop(e: DragEvent): Promise<void>;
    /**
     * 拖拽离开时调用。
     * @param e
     */
    dragLeave(e: DragEvent): void;
    /**
     * 拖拽结束了。
     * @param e
     */
    dragEnd(e: DragEvent): void;
    /**
     * 自动给正在拖拽的元素加 is-draging 之类的 css。
     */
    updateDragElements(dragId: string): void;
    /**
     * 自动给拖入的区域添加 is-dragenter 之类的 css。
     */
    updateDropRegion(value: {
        id: string;
        region: string;
    }, oldValue?: {
        id: string;
        region: string;
    }): void;
    /**
     * 自动给即将激活的区域添加高亮。
     */
    updatePlanDropRegion(value: {
        id: string;
        region: string;
    }, oldValue?: {
        id: string;
        region: string;
    }): void;
    /**
     * 销毁函数。
     */
    dispose(): void;
}

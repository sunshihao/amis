/**
 * 点击元素外部时触发回调，用于一直存在的对象，需要手动调用删除监听器
 */
export declare function onClickOutside(element: HTMLElement, onClickOutside: () => void): () => void;

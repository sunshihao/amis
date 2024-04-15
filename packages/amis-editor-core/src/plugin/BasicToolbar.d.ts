import { BasePlugin, BaseEventContext, BasicToolbarItem, ContextMenuItem, ContextMenuEventContext, BasicPanelItem, BuildPanelEventContext, PluginEvent, InsertEventContext } from '../plugin';
/**
 * 用来给当前选中的元素添加一些基本的工具栏按钮。
 */
export declare class BasicToolbarPlugin extends BasePlugin {
    static scene: string[];
    order: number;
    buildEditorToolbar({ id, schema, info }: BaseEventContext, toolbars: Array<BasicToolbarItem>): void;
    buildEditorContextMenu({ id, schema, region, info, selections }: ContextMenuEventContext, menus: Array<ContextMenuItem>): void;
    buildEditorPanel(context: BuildPanelEventContext, panels: Array<BasicPanelItem>): void;
    afterInsert(event: PluginEvent<InsertEventContext>): void;
}

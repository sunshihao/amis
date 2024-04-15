import { BuildPanelEventContext, BasePlugin, BasicPanelItem } from '../plugin';
/**
 * 添加源码编辑功能
 */
export declare class AvailableRenderersPlugin extends BasePlugin {
    static scene: string[];
    order: number;
    buildEditorPanel(context: BuildPanelEventContext, panels: Array<BasicPanelItem>): void;
}

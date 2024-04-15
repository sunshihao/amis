import { BuildPanelEventContext, BasePlugin, BasicPanelItem } from '../plugin';
/**
 * 大纲面板
 */
export declare class OutlinePlugin extends BasePlugin {
    static scene: string[];
    order: number;
    buildEditorPanel(context: BuildPanelEventContext, panels: Array<BasicPanelItem>): void;
}

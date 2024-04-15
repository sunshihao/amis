import { BuildPanelEventContext, BasePlugin, BasicPanelItem, RendererJSONSchemaResolveEventContext } from '../plugin';
/**
 * 添加源码编辑功能
 */
export declare class CodePlugin extends BasePlugin {
    static scene: string[];
    order: number;
    buildJSONSchema({ info }: RendererJSONSchemaResolveEventContext): string | undefined;
    buildEditorPanel({ info, selections }: BuildPanelEventContext, panels: Array<BasicPanelItem>): void;
}

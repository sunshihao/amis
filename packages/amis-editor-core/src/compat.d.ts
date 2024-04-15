/**
 * 兼容 1.x 里面的注册渲染器的方法。
 */
import { EditorManager } from './manager';
import { BasePlugin } from './plugin';
/**
 * 旧版本注册渲染器编辑器的方法。
 *
 * @deprecated
 * @param rendererName
 * @param config
 */
export declare function RendererEditor(rendererName: string, config: {
    name: string;
    description?: string;
    type?: string;
    previewSchema?: any;
    scaffold?: any;
}): (Klass: new (manager: EditorManager) => BasicEditor) => void;
/**
 * 为了兼容旧版的注册方法
 * @deprecated
 */
export declare class BasicEditor extends BasePlugin {
    tipName?: string;
    settingsSchema?: {
        title: string;
        body: Array<any>;
    };
}

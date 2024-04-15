import { RendererEvent } from '../utils/renderer-event';
import { RendererAction, ListenerAction, ListenerContext } from './Action';
export interface IPrintAction extends ListenerAction {
    actionType: 'copy';
    args: {
        testid?: string;
        testids?: string[];
    };
}
/**
 * 打印动作
 *
 * @export
 * @class PrintAction
 * @implements {Action}
 */
export declare class PrintAction implements RendererAction {
    run(action: IPrintAction, renderer: ListenerContext, event: RendererEvent<any>): Promise<void>;
}

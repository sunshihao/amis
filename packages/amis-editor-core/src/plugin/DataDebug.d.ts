import { BaseEventContext, BasePlugin, BasicToolbarItem } from '../plugin';
import React from 'react';
export declare const JsonView: React.LazyExoticComponent<React.ComponentType<any>>;
/**
 * 添加调试功能
 */
export declare class DataDebugPlugin extends BasePlugin {
    static scene: string[];
    static id: string;
    buildEditorToolbar({ id, schema, node }: BaseEventContext, toolbars: Array<BasicToolbarItem>): void;
    dataViewer: {
        type: string;
        name: string;
        asFormItem: boolean;
        className: string;
        component: ({ value }: {
            value: any;
        }) => React.JSX.Element;
    };
    openDebugForm(data: any): Promise<void>;
}

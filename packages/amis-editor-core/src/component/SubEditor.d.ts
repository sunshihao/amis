import React from 'react';
import { EditorManager } from '../manager';
import { EditorStoreType } from '../store/editor';
import { RenderOptions } from 'amis-core';
import { BuildPanelEventContext, PluginEvent, RendererInfoResolveEventContext } from '../plugin';
export interface SubEditorProps {
    store: EditorStoreType;
    manager: EditorManager;
    theme?: string;
    amisEnv?: RenderOptions;
}
export declare class SubEditor extends React.Component<SubEditorProps> {
    afterResolveEditorInfo(event: PluginEvent<RendererInfoResolveEventContext>): void;
    handleBuildPanels(event: PluginEvent<BuildPanelEventContext>): void;
    buildSchema(): {
        size: string;
        title: string | undefined;
        onClose: () => void;
        onConfirm: ([valueRaw]: any) => void;
        body: {
            type: string;
            mode: string;
            wrapperComponent: string;
            onValidate: (value: any) => Promise<{
                schema: string;
            } | undefined>;
            onChange: () => void;
            body: {
                name: string;
                asFormItem: boolean;
                children: ({ value, onChange }: {
                    value: any;
                    onChange: (value: any) => void;
                }) => React.JSX.Element;
            }[];
            tpl?: undefined;
        } | {
            type: string;
            tpl: string;
            mode?: undefined;
            wrapperComponent?: undefined;
            onValidate?: undefined;
            onChange?: undefined;
            body?: undefined;
        };
        actions: ({
            children: React.JSX.Element | null;
            type?: undefined;
            label?: undefined;
            level?: undefined;
            actionType?: undefined;
        } | {
            type: string;
            label: string;
            level: string;
            children?: undefined;
            actionType?: undefined;
        } | {
            type: string;
            label: string;
            actionType: string;
            children?: undefined;
            level?: undefined;
        })[][];
        closeOnEsc: boolean;
        bodyClassName: string;
    };
    render(): JSX.Element;
}

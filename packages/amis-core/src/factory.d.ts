import React from 'react';
import { IRendererStore, IIRendererStore } from './store/index';
import { TestIdBuilder } from './utils/helper';
import { fetcherResult, SchemaNode, Schema, PlainObject } from './types';
import { ThemeProps } from './theme';
import { LocaleProps } from './locale';
import type { RendererEnv } from './env';
import { OnEventProps, RendererEvent } from './utils/renderer-event';
import { StatusScopedProps } from './StatusScoped';
export interface TestFunc {
    (path: string, schema?: Schema, resolveRenderer?: (path: string, schema?: Schema, props?: any) => null | RendererConfig): boolean;
}
export interface RendererBasicConfig {
    test?: RegExp | TestFunc;
    type?: string;
    name?: string;
    storeType?: string;
    shouldSyncSuperStore?: (store: any, props: any, prevProps: any) => boolean | undefined;
    storeExtendsData?: boolean | ((props: any) => boolean);
    weight?: number;
    isolateScope?: boolean;
    isFormItem?: boolean;
    autoVar?: boolean;
}
export interface RendererProps extends ThemeProps, LocaleProps, OnEventProps, StatusScopedProps {
    render: (region: string, node: SchemaNode, props?: PlainObject) => JSX.Element;
    env: RendererEnv;
    $path: string;
    $schema: any;
    testIdBuilder?: TestIdBuilder;
    store?: IIRendererStore;
    syncSuperStore?: boolean;
    data: {
        [propName: string]: any;
    };
    defaultData?: object;
    className?: any;
    style?: {
        [propName: string]: any;
    };
    onBroadcast?: (type: string, rawEvent: RendererEvent<any>, ctx: any) => any;
    mobileUI?: boolean;
    [propName: string]: any;
}
export type RendererComponent = React.ComponentType<RendererProps> & {
    propsList?: Array<any>;
};
export interface RendererConfig extends RendererBasicConfig {
    component: RendererComponent;
    Renderer?: RendererComponent;
}
export interface RenderSchemaFilter {
    (schema: Schema, renderer: RendererConfig, props?: any): Schema;
}
export interface WsObject {
    url: string;
    responseKey?: string;
    body?: any;
}
export interface FetcherConfig {
    url: string;
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'jsonp' | 'js';
    data?: any;
    config?: any;
}
export interface RenderOptions extends Partial<Omit<RendererEnv, 'fetcher' | 'theme'>> {
    session?: string;
    theme?: string;
    fetcher?: (config: FetcherConfig) => Promise<fetcherResult>;
}
export declare const renderersMap: {
    [propName: string]: boolean;
};
export declare function addSchemaFilter(fn: RenderSchemaFilter): void;
export declare function filterSchema(schema: Schema, render: RendererConfig, props?: any): Schema;
export declare function Renderer(config: RendererBasicConfig): <T extends RendererComponent>(component: T) => T;
export declare function registerRenderer(config: RendererConfig): RendererConfig;
export declare function unRegisterRenderer(config: RendererConfig | string): void;
export declare function loadRenderer(schema: Schema, path: string): React.JSX.Element;
export declare const defaultOptions: RenderOptions;
export declare const stores: {
    [propName: string]: IRendererStore;
};
export declare function clearStoresCache(sessions?: Array<string> | string): void;
export declare function updateEnv(options: Partial<RenderOptions>, session?: string): void;
export declare function extendDefaultEnv(env: Partial<RenderOptions>): void;
export declare function resolveRenderer(path: string, schema?: Schema): null | RendererConfig;
export declare function getRenderers(): RendererConfig[];
export declare function getRendererByName(name: string): RendererConfig | undefined;
export { RendererEnv };

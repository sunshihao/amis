/// <reference types="react" />
/// <reference types="lodash" />
import { DataSchema } from 'amis';
import { RenderOptions } from 'amis-core';
import { PluginInterface, BasicPanelItem, RendererInfo, SubRendererInfo, PluginEvent, RegionConfig, ContextMenuItem, ContextMenuEventContext, EventContext, PluginEventFn, ScaffoldForm, RendererPluginEvent, PluginEvents, PluginActions } from './plugin';
import { EditorStoreType, SubEditorContext } from './store/editor';
import { EditorNodeType } from './store/node';
import { EditorProps } from './component/Editor';
import { EditorDNDManager } from './dnd';
import { VariableManager } from './variable';
import type { IScopedContext } from 'amis';
import type { SchemaObject, SchemaCollection } from 'amis';
import type { RendererConfig } from 'amis-core';
export interface EditorManagerConfig extends Omit<EditorProps, 'value' | 'onChange'> {
}
export interface PluginClass {
    new (manager: EditorManager, options?: any): PluginInterface;
    id?: string;
    /** 优先级，值为整数，当存在两个ID相同的Plugin时，数字更大的优先级更高 */
    priority?: number;
    scene?: Array<string>;
}
/**
 * 自动加载预先注册的自定义插件
 * 备注：新版 amis-widget[3.0.0] 需要
 */
export declare function autoPreRegisterEditorCustomPlugins(): void;
/**
 * 注册Editor插件
 * 备注: 支持覆盖原有组件，注册新的组件时需配置 priority。
 * @param editor
 */
export declare function registerEditorPlugin(klass: PluginClass): void;
/**
 * 获取当前已经注册的插件。
 */
export declare function getEditorPlugins(options?: any): (PluginClass | [PluginClass, Record<string, any> | (() => Record<string, any>)])[];
/**
 * 注销插件
 */
export declare function unRegisterEditorPlugin(id: string): void;
/**
 * 在 component/Editor.tsx 里面实例化的。
 * 辅助 component/Editor.tsx 实现一些非 UI 相关的功能。
 */
export declare class EditorManager {
    readonly config: EditorManagerConfig;
    readonly store: EditorStoreType;
    readonly plugins: Array<PluginInterface>;
    readonly env: RenderOptions;
    toDispose: Array<() => void>;
    readonly dnd: EditorDNDManager;
    readonly id: string;
    disableHover: boolean;
    private clipboardData;
    readonly hackIn: any;
    readonly broadcasts: RendererPluginEvent[];
    readonly pluginEvents: PluginEvents;
    readonly pluginActions: PluginActions;
    dataSchema: DataSchema;
    /** 变量管理 */
    readonly variableManager: VariableManager;
    constructor(config: EditorManagerConfig, store: EditorStoreType);
    normalizeScene(plugins?: Array<PluginClass | [PluginClass, Record<string, any> | (() => Record<string, any>)]>): (PluginClass | [PluginClass, Record<string, any> | (() => Record<string, any>)])[];
    dynamicAddPlugin(pluginName: string): void;
    buildRenderersAndPanels(): void;
    buildEventContext(idOrNode: string | EditorNodeType): {
        node: {
            parentId: string;
            parentRegion: string;
            isCommonConfig: boolean;
            id: string;
            type: string;
            label: string;
            regionInfo: (RegionConfig & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>>) | undefined;
            path: string;
            schemaPath: string;
            region: string;
            preferTag: string;
            state: any;
            widthMutable: boolean;
            heightMutable: boolean;
            memberIndex: number;
            folded: boolean;
            patched: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
            dialogTitle: string;
            dialogType: string;
            children: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IAnyModelType> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            getData: import("mobx-state-tree").IType<() => any, () => any, () => any>;
        } & {
            readonly info: RendererInfo;
            getNodeById(id: string, regionOrType?: string | undefined): any;
            setInfo(value: RendererInfo): void;
            updateSharedContext(value: Record<string, any>): void;
            readonly rendererConfig: RendererConfig | undefined;
            setRendererConfig(value: RendererConfig): void;
            readonly isVitualRenderer: boolean;
            readonly clickable: boolean;
            readonly draggable: boolean;
            readonly moveable: boolean;
            readonly canMoveUp: boolean;
            readonly canMoveDown: boolean;
            readonly removable: boolean;
            readonly duplicatable: boolean;
            readonly replaceable: boolean;
            memberImmutable(region: string): boolean;
            readonly isRegion: boolean;
            readonly childRegions: any[];
            readonly uniqueChildren: any[];
            readonly sameIdChild: any;
            readonly singleRegion: boolean;
            isExists(id: string): boolean;
            getChildById(id: string): any;
            readonly parent: any;
            readonly ancestorField: any;
            readonly host: any;
            readonly firstChild: any;
            readonly index: any;
            readonly prevSibling: any;
            readonly nextSibling: any;
            readonly schema: any;
            readonly schemaParent: any;
            readonly isSecondFactor: boolean;
        } & {
            getClosestParentByType: (type: string) => void | ({
                parentId: string;
                parentRegion: string;
                isCommonConfig: boolean;
                id: string;
                type: string;
                label: string;
                regionInfo: (RegionConfig & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>>) | undefined;
                path: string;
                schemaPath: string;
                region: string;
                preferTag: string;
                state: any;
                widthMutable: boolean;
                heightMutable: boolean;
                memberIndex: number;
                folded: boolean;
                patched: boolean;
                x: number;
                y: number;
                w: number;
                h: number;
                dialogTitle: string;
                dialogType: string;
                children: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IAnyModelType> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                getData: import("mobx-state-tree").IType<() => any, () => any, () => any>;
            } & {
                readonly info: RendererInfo;
                getNodeById(id: string, regionOrType?: string | undefined): any;
                setInfo(value: RendererInfo): void;
                updateSharedContext(value: Record<string, any>): void;
                readonly rendererConfig: RendererConfig | undefined;
                setRendererConfig(value: RendererConfig): void;
                readonly isVitualRenderer: boolean;
                readonly clickable: boolean;
                readonly draggable: boolean;
                readonly moveable: boolean;
                readonly canMoveUp: boolean;
                readonly canMoveDown: boolean;
                readonly removable: boolean;
                readonly duplicatable: boolean;
                readonly replaceable: boolean;
                memberImmutable(region: string): boolean;
                readonly isRegion: boolean;
                readonly childRegions: any[];
                readonly uniqueChildren: any[];
                readonly sameIdChild: any;
                readonly singleRegion: boolean;
                isExists(id: string): boolean;
                getChildById(id: string): any;
                readonly parent: any;
                readonly ancestorField: any;
                readonly host: any;
                readonly firstChild: any;
                readonly index: any;
                readonly prevSibling: any;
                readonly nextSibling: any;
                readonly schema: any;
                readonly schemaParent: any;
                readonly isSecondFactor: boolean;
            } & any & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                parentId: import("mobx-state-tree").IType<string | undefined, string, string>;
                parentRegion: import("mobx-state-tree").IType<string | undefined, string, string>;
                isCommonConfig: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                id: import("mobx-state-tree").IType<string | undefined, string, string>;
                type: import("mobx-state-tree").IType<string | undefined, string, string>;
                label: import("mobx-state-tree").IType<string | undefined, string, string>;
                regionInfo: import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>;
                path: import("mobx-state-tree").IType<string | undefined, string, string>;
                schemaPath: import("mobx-state-tree").IType<string | undefined, string, string>;
                region: import("mobx-state-tree").IType<string | undefined, string, string>;
                preferTag: import("mobx-state-tree").IType<string | undefined, string, string>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
                widthMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                heightMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                memberIndex: import("mobx-state-tree").IType<number | undefined, number, number>;
                folded: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                patched: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                x: import("mobx-state-tree").IType<number | undefined, number, number>;
                y: import("mobx-state-tree").IType<number | undefined, number, number>;
                w: import("mobx-state-tree").IType<number | undefined, number, number>;
                h: import("mobx-state-tree").IType<number | undefined, number, number>;
                dialogTitle: import("mobx-state-tree").IType<string | undefined, string, string>;
                dialogType: import("mobx-state-tree").IType<string | undefined, string, string>;
                children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>;
            }, {
                getData: import("mobx-state-tree").IType<() => any, () => any, () => any>;
            } & {
                readonly info: RendererInfo;
                getNodeById(id: string, regionOrType?: string | undefined): any;
                setInfo(value: RendererInfo): void;
                updateSharedContext(value: Record<string, any>): void;
                readonly rendererConfig: RendererConfig | undefined;
                setRendererConfig(value: RendererConfig): void;
                readonly isVitualRenderer: boolean;
                readonly clickable: boolean;
                readonly draggable: boolean;
                readonly moveable: boolean;
                readonly canMoveUp: boolean;
                readonly canMoveDown: boolean;
                readonly removable: boolean;
                readonly duplicatable: boolean;
                readonly replaceable: boolean;
                memberImmutable(region: string): boolean;
                readonly isRegion: boolean;
                readonly childRegions: any[];
                readonly uniqueChildren: any[];
                readonly sameIdChild: any;
                readonly singleRegion: boolean;
                isExists(id: string): boolean;
                getChildById(id: string): any;
                readonly parent: any;
                readonly ancestorField: any;
                readonly host: any;
                readonly firstChild: any;
                readonly index: any;
                readonly prevSibling: any;
                readonly nextSibling: any;
                readonly schema: any;
                readonly schemaParent: any;
                readonly isSecondFactor: boolean;
            } & any, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>);
            getParentNodeByCB: (callback: (node: import("mobx-state-tree").ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
                parentId: import("mobx-state-tree").IType<string | undefined, string, string>;
                parentRegion: import("mobx-state-tree").IType<string | undefined, string, string>;
                isCommonConfig: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                id: import("mobx-state-tree").IType<string | undefined, string, string>;
                type: import("mobx-state-tree").IType<string | undefined, string, string>;
                label: import("mobx-state-tree").IType<string | undefined, string, string>;
                regionInfo: import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>;
                path: import("mobx-state-tree").IType<string | undefined, string, string>;
                schemaPath: import("mobx-state-tree").IType<string | undefined, string, string>;
                region: import("mobx-state-tree").IType<string | undefined, string, string>;
                preferTag: import("mobx-state-tree").IType<string | undefined, string, string>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
                widthMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                heightMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                memberIndex: import("mobx-state-tree").IType<number | undefined, number, number>;
                folded: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                patched: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                x: import("mobx-state-tree").IType<number | undefined, number, number>;
                y: import("mobx-state-tree").IType<number | undefined, number, number>;
                w: import("mobx-state-tree").IType<number | undefined, number, number>;
                h: import("mobx-state-tree").IType<number | undefined, number, number>;
                dialogTitle: import("mobx-state-tree").IType<string | undefined, string, string>;
                dialogType: import("mobx-state-tree").IType<string | undefined, string, string>;
                children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>;
            }>>) => Boolean) => {
                parentId: string;
                parentRegion: string;
                isCommonConfig: boolean;
                id: string;
                type: string;
                label: string;
                regionInfo: (RegionConfig & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>>) | undefined;
                path: string;
                schemaPath: string;
                region: string;
                preferTag: string;
                state: any;
                widthMutable: boolean;
                heightMutable: boolean;
                memberIndex: number;
                folded: boolean;
                patched: boolean;
                x: number;
                y: number;
                w: number;
                h: number;
                dialogTitle: string;
                dialogType: string;
                children: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IAnyModelType> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                getData: import("mobx-state-tree").IType<() => any, () => any, () => any>;
            } & {
                readonly info: RendererInfo;
                getNodeById(id: string, regionOrType?: string | undefined): any;
                setInfo(value: RendererInfo): void;
                updateSharedContext(value: Record<string, any>): void;
                readonly rendererConfig: RendererConfig | undefined;
                setRendererConfig(value: RendererConfig): void;
                readonly isVitualRenderer: boolean;
                readonly clickable: boolean;
                readonly draggable: boolean;
                readonly moveable: boolean;
                readonly canMoveUp: boolean;
                readonly canMoveDown: boolean;
                readonly removable: boolean;
                readonly duplicatable: boolean;
                readonly replaceable: boolean;
                memberImmutable(region: string): boolean;
                readonly isRegion: boolean;
                readonly childRegions: any[];
                readonly uniqueChildren: any[];
                readonly sameIdChild: any;
                readonly singleRegion: boolean;
                isExists(id: string): boolean;
                getChildById(id: string): any;
                readonly parent: any;
                readonly ancestorField: any;
                readonly host: any;
                readonly firstChild: any;
                readonly index: any;
                readonly prevSibling: any;
                readonly nextSibling: any;
                readonly schema: any;
                readonly schemaParent: any;
                readonly isSecondFactor: boolean;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                parentId: import("mobx-state-tree").IType<string | undefined, string, string>;
                parentRegion: import("mobx-state-tree").IType<string | undefined, string, string>;
                isCommonConfig: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                id: import("mobx-state-tree").IType<string | undefined, string, string>;
                type: import("mobx-state-tree").IType<string | undefined, string, string>;
                label: import("mobx-state-tree").IType<string | undefined, string, string>;
                regionInfo: import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>;
                path: import("mobx-state-tree").IType<string | undefined, string, string>;
                schemaPath: import("mobx-state-tree").IType<string | undefined, string, string>;
                region: import("mobx-state-tree").IType<string | undefined, string, string>;
                preferTag: import("mobx-state-tree").IType<string | undefined, string, string>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
                widthMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                heightMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                memberIndex: import("mobx-state-tree").IType<number | undefined, number, number>;
                folded: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                patched: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                x: import("mobx-state-tree").IType<number | undefined, number, number>;
                y: import("mobx-state-tree").IType<number | undefined, number, number>;
                w: import("mobx-state-tree").IType<number | undefined, number, number>;
                h: import("mobx-state-tree").IType<number | undefined, number, number>;
                dialogTitle: import("mobx-state-tree").IType<string | undefined, string, string>;
                dialogType: import("mobx-state-tree").IType<string | undefined, string, string>;
                children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>;
            }, {
                getData: import("mobx-state-tree").IType<() => any, () => any, () => any>;
            } & {
                readonly info: RendererInfo;
                getNodeById(id: string, regionOrType?: string | undefined): any;
                setInfo(value: RendererInfo): void;
                updateSharedContext(value: Record<string, any>): void;
                readonly rendererConfig: RendererConfig | undefined;
                setRendererConfig(value: RendererConfig): void;
                readonly isVitualRenderer: boolean;
                readonly clickable: boolean;
                readonly draggable: boolean;
                readonly moveable: boolean;
                readonly canMoveUp: boolean;
                readonly canMoveDown: boolean;
                readonly removable: boolean;
                readonly duplicatable: boolean;
                readonly replaceable: boolean;
                memberImmutable(region: string): boolean;
                readonly isRegion: boolean;
                readonly childRegions: any[];
                readonly uniqueChildren: any[];
                readonly sameIdChild: any;
                readonly singleRegion: boolean;
                isExists(id: string): boolean;
                getChildById(id: string): any;
                readonly parent: any;
                readonly ancestorField: any;
                readonly host: any;
                readonly firstChild: any;
                readonly index: any;
                readonly prevSibling: any;
                readonly nextSibling: any;
                readonly schema: any;
                readonly schemaParent: any;
                readonly isSecondFactor: boolean;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            updateIsCommonConfig: (value: boolean) => void;
            addChild(props: {
                id: string;
                type: string;
                label: string;
                path: string;
                isCommonConfig?: boolean | undefined;
                info?: RendererInfo | undefined;
                region?: string | undefined;
                getData?: (() => any) | undefined;
                preferTag?: string | undefined;
                schemaPath?: string | undefined;
                dialogTitle?: string | undefined;
                dialogType?: string | undefined;
                regionInfo?: RegionConfig | undefined;
                widthMutable?: boolean | undefined;
                memberIndex?: number | undefined;
            }): any;
            removeChild(child: any): void;
            toggleFold(e: import("react").MouseEvent<HTMLAnchorElement, MouseEvent>): void;
            patch(store: any, force?: boolean, setPatchInfo?: ((id: string, value: any) => void) | undefined): void;
            updateSchema(value: any): void;
            updateSchemaStyle(value: any): void;
            setComponent(value: any): void;
            getComponent(): any;
            calculateHighlightBox(root?: any): void;
            resetHighlightBox(root: any): void;
            updateState(state: any, replace?: boolean): void;
            setWidthMutable(value: any): void;
            setHeightMutable(value: any): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            parentId: import("mobx-state-tree").IType<string | undefined, string, string>;
            parentRegion: import("mobx-state-tree").IType<string | undefined, string, string>;
            isCommonConfig: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            id: import("mobx-state-tree").IType<string | undefined, string, string>;
            type: import("mobx-state-tree").IType<string | undefined, string, string>;
            label: import("mobx-state-tree").IType<string | undefined, string, string>;
            regionInfo: import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>;
            path: import("mobx-state-tree").IType<string | undefined, string, string>;
            schemaPath: import("mobx-state-tree").IType<string | undefined, string, string>;
            region: import("mobx-state-tree").IType<string | undefined, string, string>;
            preferTag: import("mobx-state-tree").IType<string | undefined, string, string>;
            state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
            widthMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            heightMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            memberIndex: import("mobx-state-tree").IType<number | undefined, number, number>;
            folded: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            patched: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            x: import("mobx-state-tree").IType<number | undefined, number, number>;
            y: import("mobx-state-tree").IType<number | undefined, number, number>;
            w: import("mobx-state-tree").IType<number | undefined, number, number>;
            h: import("mobx-state-tree").IType<number | undefined, number, number>;
            dialogTitle: import("mobx-state-tree").IType<string | undefined, string, string>;
            dialogType: import("mobx-state-tree").IType<string | undefined, string, string>;
            children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>;
        }, {
            getData: import("mobx-state-tree").IType<() => any, () => any, () => any>;
        } & {
            readonly info: RendererInfo;
            getNodeById(id: string, regionOrType?: string | undefined): any;
            setInfo(value: RendererInfo): void;
            updateSharedContext(value: Record<string, any>): void;
            readonly rendererConfig: RendererConfig | undefined;
            setRendererConfig(value: RendererConfig): void;
            readonly isVitualRenderer: boolean;
            readonly clickable: boolean;
            readonly draggable: boolean;
            readonly moveable: boolean;
            readonly canMoveUp: boolean;
            readonly canMoveDown: boolean;
            readonly removable: boolean;
            readonly duplicatable: boolean;
            readonly replaceable: boolean;
            memberImmutable(region: string): boolean;
            readonly isRegion: boolean;
            readonly childRegions: any[];
            readonly uniqueChildren: any[];
            readonly sameIdChild: any;
            readonly singleRegion: boolean;
            isExists(id: string): boolean;
            getChildById(id: string): any;
            readonly parent: any;
            readonly ancestorField: any;
            readonly host: any;
            readonly firstChild: any;
            readonly index: any;
            readonly prevSibling: any;
            readonly nextSibling: any;
            readonly schema: any;
            readonly schemaParent: any;
            readonly isSecondFactor: boolean;
        } & {
            getClosestParentByType: (type: string) => void | ({
                parentId: string;
                parentRegion: string;
                isCommonConfig: boolean;
                id: string;
                type: string;
                label: string;
                regionInfo: (RegionConfig & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>>) | undefined;
                path: string;
                schemaPath: string;
                region: string;
                preferTag: string;
                state: any;
                widthMutable: boolean;
                heightMutable: boolean;
                memberIndex: number;
                folded: boolean;
                patched: boolean;
                x: number;
                y: number;
                w: number;
                h: number;
                dialogTitle: string;
                dialogType: string;
                children: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IAnyModelType> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                getData: import("mobx-state-tree").IType<() => any, () => any, () => any>;
            } & {
                readonly info: RendererInfo;
                getNodeById(id: string, regionOrType?: string | undefined): any;
                setInfo(value: RendererInfo): void;
                updateSharedContext(value: Record<string, any>): void;
                readonly rendererConfig: RendererConfig | undefined;
                setRendererConfig(value: RendererConfig): void;
                readonly isVitualRenderer: boolean;
                readonly clickable: boolean;
                readonly draggable: boolean;
                readonly moveable: boolean;
                readonly canMoveUp: boolean;
                readonly canMoveDown: boolean;
                readonly removable: boolean;
                readonly duplicatable: boolean;
                readonly replaceable: boolean;
                memberImmutable(region: string): boolean;
                readonly isRegion: boolean;
                readonly childRegions: any[];
                readonly uniqueChildren: any[];
                readonly sameIdChild: any;
                readonly singleRegion: boolean;
                isExists(id: string): boolean;
                getChildById(id: string): any;
                readonly parent: any;
                readonly ancestorField: any;
                readonly host: any;
                readonly firstChild: any;
                readonly index: any;
                readonly prevSibling: any;
                readonly nextSibling: any;
                readonly schema: any;
                readonly schemaParent: any;
                readonly isSecondFactor: boolean;
            } & any & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                parentId: import("mobx-state-tree").IType<string | undefined, string, string>;
                parentRegion: import("mobx-state-tree").IType<string | undefined, string, string>;
                isCommonConfig: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                id: import("mobx-state-tree").IType<string | undefined, string, string>;
                type: import("mobx-state-tree").IType<string | undefined, string, string>;
                label: import("mobx-state-tree").IType<string | undefined, string, string>;
                regionInfo: import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>;
                path: import("mobx-state-tree").IType<string | undefined, string, string>;
                schemaPath: import("mobx-state-tree").IType<string | undefined, string, string>;
                region: import("mobx-state-tree").IType<string | undefined, string, string>;
                preferTag: import("mobx-state-tree").IType<string | undefined, string, string>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
                widthMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                heightMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                memberIndex: import("mobx-state-tree").IType<number | undefined, number, number>;
                folded: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                patched: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                x: import("mobx-state-tree").IType<number | undefined, number, number>;
                y: import("mobx-state-tree").IType<number | undefined, number, number>;
                w: import("mobx-state-tree").IType<number | undefined, number, number>;
                h: import("mobx-state-tree").IType<number | undefined, number, number>;
                dialogTitle: import("mobx-state-tree").IType<string | undefined, string, string>;
                dialogType: import("mobx-state-tree").IType<string | undefined, string, string>;
                children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>;
            }, {
                getData: import("mobx-state-tree").IType<() => any, () => any, () => any>;
            } & {
                readonly info: RendererInfo;
                getNodeById(id: string, regionOrType?: string | undefined): any;
                setInfo(value: RendererInfo): void;
                updateSharedContext(value: Record<string, any>): void;
                readonly rendererConfig: RendererConfig | undefined;
                setRendererConfig(value: RendererConfig): void;
                readonly isVitualRenderer: boolean;
                readonly clickable: boolean;
                readonly draggable: boolean;
                readonly moveable: boolean;
                readonly canMoveUp: boolean;
                readonly canMoveDown: boolean;
                readonly removable: boolean;
                readonly duplicatable: boolean;
                readonly replaceable: boolean;
                memberImmutable(region: string): boolean;
                readonly isRegion: boolean;
                readonly childRegions: any[];
                readonly uniqueChildren: any[];
                readonly sameIdChild: any;
                readonly singleRegion: boolean;
                isExists(id: string): boolean;
                getChildById(id: string): any;
                readonly parent: any;
                readonly ancestorField: any;
                readonly host: any;
                readonly firstChild: any;
                readonly index: any;
                readonly prevSibling: any;
                readonly nextSibling: any;
                readonly schema: any;
                readonly schemaParent: any;
                readonly isSecondFactor: boolean;
            } & any, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>);
            getParentNodeByCB: (callback: (node: import("mobx-state-tree").ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
                parentId: import("mobx-state-tree").IType<string | undefined, string, string>;
                parentRegion: import("mobx-state-tree").IType<string | undefined, string, string>;
                isCommonConfig: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                id: import("mobx-state-tree").IType<string | undefined, string, string>;
                type: import("mobx-state-tree").IType<string | undefined, string, string>;
                label: import("mobx-state-tree").IType<string | undefined, string, string>;
                regionInfo: import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>;
                path: import("mobx-state-tree").IType<string | undefined, string, string>;
                schemaPath: import("mobx-state-tree").IType<string | undefined, string, string>;
                region: import("mobx-state-tree").IType<string | undefined, string, string>;
                preferTag: import("mobx-state-tree").IType<string | undefined, string, string>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
                widthMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                heightMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                memberIndex: import("mobx-state-tree").IType<number | undefined, number, number>;
                folded: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                patched: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                x: import("mobx-state-tree").IType<number | undefined, number, number>;
                y: import("mobx-state-tree").IType<number | undefined, number, number>;
                w: import("mobx-state-tree").IType<number | undefined, number, number>;
                h: import("mobx-state-tree").IType<number | undefined, number, number>;
                dialogTitle: import("mobx-state-tree").IType<string | undefined, string, string>;
                dialogType: import("mobx-state-tree").IType<string | undefined, string, string>;
                children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>;
            }>>) => Boolean) => {
                parentId: string;
                parentRegion: string;
                isCommonConfig: boolean;
                id: string;
                type: string;
                label: string;
                regionInfo: (RegionConfig & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>>) | undefined;
                path: string;
                schemaPath: string;
                region: string;
                preferTag: string;
                state: any;
                widthMutable: boolean;
                heightMutable: boolean;
                memberIndex: number;
                folded: boolean;
                patched: boolean;
                x: number;
                y: number;
                w: number;
                h: number;
                dialogTitle: string;
                dialogType: string;
                children: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IAnyModelType> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                getData: import("mobx-state-tree").IType<() => any, () => any, () => any>;
            } & {
                readonly info: RendererInfo;
                getNodeById(id: string, regionOrType?: string | undefined): any;
                setInfo(value: RendererInfo): void;
                updateSharedContext(value: Record<string, any>): void;
                readonly rendererConfig: RendererConfig | undefined;
                setRendererConfig(value: RendererConfig): void;
                readonly isVitualRenderer: boolean;
                readonly clickable: boolean;
                readonly draggable: boolean;
                readonly moveable: boolean;
                readonly canMoveUp: boolean;
                readonly canMoveDown: boolean;
                readonly removable: boolean;
                readonly duplicatable: boolean;
                readonly replaceable: boolean;
                memberImmutable(region: string): boolean;
                readonly isRegion: boolean;
                readonly childRegions: any[];
                readonly uniqueChildren: any[];
                readonly sameIdChild: any;
                readonly singleRegion: boolean;
                isExists(id: string): boolean;
                getChildById(id: string): any;
                readonly parent: any;
                readonly ancestorField: any;
                readonly host: any;
                readonly firstChild: any;
                readonly index: any;
                readonly prevSibling: any;
                readonly nextSibling: any;
                readonly schema: any;
                readonly schemaParent: any;
                readonly isSecondFactor: boolean;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                parentId: import("mobx-state-tree").IType<string | undefined, string, string>;
                parentRegion: import("mobx-state-tree").IType<string | undefined, string, string>;
                isCommonConfig: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                id: import("mobx-state-tree").IType<string | undefined, string, string>;
                type: import("mobx-state-tree").IType<string | undefined, string, string>;
                label: import("mobx-state-tree").IType<string | undefined, string, string>;
                regionInfo: import("mobx-state-tree").IMaybe<import("mobx-state-tree").IType<RegionConfig, RegionConfig, RegionConfig>>;
                path: import("mobx-state-tree").IType<string | undefined, string, string>;
                schemaPath: import("mobx-state-tree").IType<string | undefined, string, string>;
                region: import("mobx-state-tree").IType<string | undefined, string, string>;
                preferTag: import("mobx-state-tree").IType<string | undefined, string, string>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
                widthMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                heightMutable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                memberIndex: import("mobx-state-tree").IType<number | undefined, number, number>;
                folded: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                patched: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                x: import("mobx-state-tree").IType<number | undefined, number, number>;
                y: import("mobx-state-tree").IType<number | undefined, number, number>;
                w: import("mobx-state-tree").IType<number | undefined, number, number>;
                h: import("mobx-state-tree").IType<number | undefined, number, number>;
                dialogTitle: import("mobx-state-tree").IType<string | undefined, string, string>;
                dialogType: import("mobx-state-tree").IType<string | undefined, string, string>;
                children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyModelType>, [undefined]>;
            }, {
                getData: import("mobx-state-tree").IType<() => any, () => any, () => any>;
            } & {
                readonly info: RendererInfo;
                getNodeById(id: string, regionOrType?: string | undefined): any;
                setInfo(value: RendererInfo): void;
                updateSharedContext(value: Record<string, any>): void;
                readonly rendererConfig: RendererConfig | undefined;
                setRendererConfig(value: RendererConfig): void;
                readonly isVitualRenderer: boolean;
                readonly clickable: boolean;
                readonly draggable: boolean;
                readonly moveable: boolean;
                readonly canMoveUp: boolean;
                readonly canMoveDown: boolean;
                readonly removable: boolean;
                readonly duplicatable: boolean;
                readonly replaceable: boolean;
                memberImmutable(region: string): boolean;
                readonly isRegion: boolean;
                readonly childRegions: any[];
                readonly uniqueChildren: any[];
                readonly sameIdChild: any;
                readonly singleRegion: boolean;
                isExists(id: string): boolean;
                getChildById(id: string): any;
                readonly parent: any;
                readonly ancestorField: any;
                readonly host: any;
                readonly firstChild: any;
                readonly index: any;
                readonly prevSibling: any;
                readonly nextSibling: any;
                readonly schema: any;
                readonly schemaParent: any;
                readonly isSecondFactor: boolean;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            updateIsCommonConfig: (value: boolean) => void;
            addChild(props: {
                id: string;
                type: string;
                label: string;
                path: string;
                isCommonConfig?: boolean | undefined;
                info?: RendererInfo | undefined;
                region?: string | undefined;
                getData?: (() => any) | undefined;
                preferTag?: string | undefined;
                schemaPath?: string | undefined;
                dialogTitle?: string | undefined;
                dialogType?: string | undefined;
                regionInfo?: RegionConfig | undefined;
                widthMutable?: boolean | undefined;
                memberIndex?: number | undefined;
            }): any;
            removeChild(child: any): void;
            toggleFold(e: import("react").MouseEvent<HTMLAnchorElement, MouseEvent>): void;
            patch(store: any, force?: boolean, setPatchInfo?: ((id: string, value: any) => void) | undefined): void;
            updateSchema(value: any): void;
            updateSchemaStyle(value: any): void;
            setComponent(value: any): void;
            getComponent(): any;
            calculateHighlightBox(root?: any): void;
            resetHighlightBox(root: any): void;
            updateState(state: any, replace?: boolean): void;
            setWidthMutable(value: any): void;
            setHeightMutable(value: any): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        id: string;
        info: RendererInfo;
        path: string;
        schemaPath: string;
        schema: any;
        data: string;
    };
    /**
     * 构建 JSONSchema Uri，这样可以用代码模式编辑了。
     */
    buildJSONSchemaUri(): void;
    buildToolbars(): void;
    collectPanels(node: EditorNodeType, triggerEvent?: boolean, secondFactor?: boolean): BasicPanelItem[];
    buildPanels(curRendererId?: string): void;
    collectRenderers(region?: string, activeContainerId?: string): Promise<SubRendererInfo[]>;
    buildRenderers(region?: string): Promise<void>;
    rebuild(): Promise<void>;
    /**
     * 刷新属性配置面板
     * 备注1: 组件类型更换时需要，以及表单编辑器实体绑定需要;
     * 备注2: 仅适用于新版属性配置面板（仅有一个一级属性配置面板）;
     * 备注3: 建议优先使用当前选中组件ID（this.store.activeId）来更新属性配置面板;
     * @param pluginType 组件类型
     */
    updateConfigPanel(pluginType?: string): void;
    /**
     * 可用组件面板里面会点进来，不同的区域可能可插入的组件不一样。
     * @param region 区域的 key
     */
    switchToRegion(region: string): void;
    /**
     * 显示插入面板
     * @param region
     * @param preferTag
     */
    showInsertPanel(region: string, id?: string, preferTag?: string, mode?: 'insert' | 'replace', originId?: string, beforeId?: string): Promise<void>;
    /**
     * 显示组件更换面板
     * @param region
     * @param preferTag
     */
    showReplacePanel(id: string, preferTag?: string): void;
    /** 显示左侧组件面板（主要在属性面板中使用）*/
    showRendererPanel(tag?: string, msg?: string): void;
    readonly listeners: Array<{
        type: string;
        fn: PluginEventFn;
    }>;
    on(event: string, fn: PluginEventFn): () => void;
    off(event: string, fn: PluginEventFn): void;
    /**
     * 派发事件。
     * @param type
     * @param context
     */
    trigger<T extends EventContext>(type: string, context: T): PluginEvent<T>;
    /**
     * 在当前选中元素插入或追加新的元素
     * @param rendererIdOrSchema
     * 备注：可以根据渲染器ID添加新元素，也可以根据现有schema片段添加新元素
     */
    addElem(rendererIdOrSchema: string | any, reGenerateId?: boolean, activeChild?: boolean): Promise<void>;
    /**
     * 判断当前节点是否可以添加同级节点
     */
    canAppendSiblings(): boolean;
    /**
     * 在当前选中元素追加新的schema
     * 备注：目前主要用在复制&粘贴快捷功能键中
     * @param rendererSchema
     */
    appendSiblingSchema(rendererSchema: Object, beforeInsert?: boolean, disabledAutoSelectInsertElem?: boolean, reGenerateId?: boolean): Promise<void>;
    /**
     * 给插入面板使用的，将当前选中的节点插入到当前选中的节点容器内。
     * @param position
     */
    insert(): Promise<void>;
    /**
     * 给插入面板使用的，替换组件类型。
     * @param position
     */
    replace(): Promise<void>;
    /**
     * 判断当前元素定位是否为flex容器
     */
    isFlexContainer(id: string): boolean;
    /**
     * 判断当前元素是否为flex布局子容器
     * 备注: 以便额外增加布局相关配置项
     */
    isFlexItem(id: string): boolean;
    isFlexColumnItem(id: string): boolean;
    isSpecialLayout(curSchema: any): boolean;
    /**
     * 判断当前元素是否为特殊布局元素（fixed、absolute）
     * 备注: 以便支持拖拽位置
     */
    draggableContainer(id: string): boolean;
    /**
     * 更新特殊布局元素的位置（fixed、absolute）
     */
    updateContainerStyleByDrag(dragId: string, dx: number, dy: number): void;
    /**
     * 入口在 Preview 里面，用来获取渲染器对应的编辑器信息。
     * 拿到这些信息后会在渲染原本渲染器的地方包一层，并创建高亮框在点选或者 hover 的时候显示。
     * @param renderer  amis元素渲染器，比如 { type: 'audio', component: 'xxx渲染器'}
     * @param path 节点路径
     * @param schema 节点 schema 数据
     */
    getEditorInfo(renderer: RendererConfig, path: string, schema: any): RendererInfo | null | undefined;
    /**
     * 面板的配置修改方法，不直接调用 store.changeValue 的原因是，
     * 这里面还有事件逻辑，插件里面可以写些逻辑。
     * @param value
     * @param diff
     */
    panelChangeValue(value: any, diff?: any, changeFilter?: (schema: any, value: any, id: string, diff?: any) => any, id?: string): void;
    /**
     * 打开子编辑器，比如弹框什么的，没办法直接编辑器，靠弹窗个新的编辑器来编辑。
     * @param config
     */
    openSubEditor(config: SubEditorContext): void;
    /**
     * 打开对应节点的右键菜单。
     * @param id
     * @param region
     * @param info
     */
    openContextMenu(id: string, region: string, info: {
        x: number;
        y: number;
    }): void;
    buildContextMenus(context: ContextMenuEventContext): ContextMenuItem[];
    closeContextMenu(): void;
    /**
     * 将当前选中的节点上移
     */
    moveUp(): void;
    /**
     * 将当前选中的节点下移
     */
    moveDown(): void;
    /**
     * 删除节点
     */
    del(ids: string | Array<string>): void;
    /**
     * 重复节点
     * @param id
     */
    duplicate(id: string | Array<string>): void;
    /**
     * 复制节点配置
     * @param id
     */
    copy(id: string, toastText?: string): void;
    /**
     * 剪切当前节点，并复制配置到剪切板。
     * @param id
     */
    cut(id: string): void;
    /**
     * 在节点上应用粘贴。
     * @param id
     * @param region
     */
    paste(id: string, region?: string): Promise<void>;
    /**
     * 清空区域
     * @param id
     * @param region
     */
    emptyRegion(id: string, region: string): void;
    /**
     * 添加孩子，成功后返回节点，失败后返回 null。
     * @param id 目标组件 id
     * @param region 目标组件区域
     * @param json
     * @param position
     */
    addChild(id: string, region: string, json: any, beforeId?: string, subRenderer?: SubRendererInfo | RendererInfo, dragInfo?: {
        id: string;
        type: string;
        data: any;
    }, reGenerateId?: boolean): any | null;
    /**
     * 移动节点
     * @param id 目标组件 id
     * @param region 目标组件区域
     * @param sourceId 移动的节点 id
     * @param beforeId 移动到哪个节点前面
     */
    move(id: string, region: string, sourceId: string, beforeId?: string): boolean;
    /**
     * 替换节点。
     * @param id
     * @param json
     */
    replaceChild(id: string, json: any, subRenderer?: SubRendererInfo | RendererInfo, region?: string, reGenerateId?: boolean): boolean;
    setActiveId(id: string): void;
    /**
     * 打开某节点的编辑面板
     * @param id
     */
    openConfigPanel(id: string): void;
    /**
     * 打开某节点的代码面板
     * @param id
     */
    openCodePanel(id: string): void;
    toggleSelection(id: string): void;
    setSelection(selections: Array<string>, id?: string): void;
    startDrag(id: string, e: React.DragEvent): void;
    scaffold(form: any, value: any): Promise<SchemaObject>;
    reScaffold(id: string, form: ScaffoldForm, value: any): Promise<void>;
    reScaffoldV2(id: string): Promise<void>;
    lazyPatchSchema: import("lodash").DebouncedFunc<(force?: boolean) => void>;
    patching: boolean;
    patchingInvalid: boolean;
    patchSchema(force?: boolean): void;
    /**
     * 把设置了特殊 region 的，hack 一下。
     */
    hackRenderers(renderers?: RendererConfig[]): void;
    /**
     * 入口在 Preview，用来生成包括元素头部快捷工具栏。
     * @param info
     * @param render
     */
    makeWrapper(info: RendererInfo, render: RendererConfig): any;
    /**
     * 用来生成属性配置面板。
     * @param schema
     */
    makeSchemaFormRender(schema: {
        body?: SchemaCollection;
        controls?: Array<any>;
        definitions?: any;
        api?: any;
        submitOnChange?: boolean;
        justify?: boolean;
        panelById?: string;
        formKey?: string;
        pipeIn?: (value: any) => any;
        pipeOut?: (value: any) => any;
    }): ({ value, onChange, popOverContainer, id, store, node }: import("./plugin").PanelProps) => import("react").JSX.Element;
    onWidthChangeStart(e: MouseEvent, ctx: {
        dom: HTMLElement;
        node: EditorNodeType;
        resizer: HTMLElement;
    }): PluginEvent<{
        nativeEvent: MouseEvent;
        dom: HTMLElement;
        node: EditorNodeType;
        resizer: HTMLElement;
    }, any>;
    onHeightChangeStart(e: MouseEvent, ctx: {
        dom: HTMLElement;
        node: EditorNodeType;
        resizer: HTMLElement;
    }): PluginEvent<{
        nativeEvent: MouseEvent;
        dom: HTMLElement;
        node: EditorNodeType;
        resizer: HTMLElement;
    }, any>;
    onSizeChangeStart(e: MouseEvent, ctx: {
        dom: HTMLElement;
        node: EditorNodeType;
        resizer: HTMLElement;
        store: EditorStoreType;
    }): PluginEvent<{
        nativeEvent: MouseEvent;
        dom: HTMLElement;
        node: EditorNodeType;
        resizer: HTMLElement;
        store: EditorStoreType;
    }, any>;
    openNodePopOverForm(id: string | EditorNodeType): void;
    /**
     * 更新广播事件集（还没想好怎么存）
     *
     * @param {string} key 插件名称
     * @param {RendererEvent[]} events 事件集
     * @memberof EditorManager
     */
    addBroadcast(event: RendererPluginEvent): void;
    /**
     * 删除指定广播（还没想好怎么存）
     *
     * @param {string} id
     * @memberof EditorManager
     */
    removeBroadcast(id: string): void;
    /**
     * 获取上下文数据结构
     * @param id
     */
    getContextSchemas(id: string | EditorNodeType, withoutSuper?: boolean): Promise<import("amis").JSONSchema[]>;
    /**
     * 获取可用上下文待绑定字段
     */
    getAvailableContextFields(node: EditorNodeType): Promise<any>;
    beforeDispatchEvent(originHook: any, e: any, component: any, scoped: IScopedContext, data: any, broadcasts?: any): void;
    /**
     * 销毁函数
     */
    dispose(): void;
}

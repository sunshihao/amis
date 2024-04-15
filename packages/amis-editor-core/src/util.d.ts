/// <reference types="lodash" />
/**
 * @file 功能类函数集合。
 */
import { utils } from 'amis';
import type { Schema } from 'amis';
import { Diff } from 'deep-diff';
import { EditorModalBody } from './store/editor';
declare const guid: typeof utils.guid, omitControls: typeof utils.omitControls, isObjectShallowModified: typeof utils.isObjectShallowModified, cloneObject: typeof utils.cloneObject, anyChanged: typeof utils.anyChanged, noop: typeof utils.noop, makeHorizontalDeeper: typeof utils.makeHorizontalDeeper, isEmpty: typeof utils.isEmpty, eachTree: typeof utils.eachTree, createObject: typeof utils.createObject;
export { guid, isObjectShallowModified, anyChanged, noop, makeHorizontalDeeper, omitControls, isEmpty, cloneObject, eachTree, createObject };
export declare let themeConfig: any;
export declare let themeOptionsData: any;
export declare function __uri(id: string): string;
export declare function cleanUndefined(obj: any): any;
/**
 * 把 schema 处理一下传给 Preview 去渲染
 * 给每个节点加个 $$id 这样方便编辑
 * @param obj
 */
export declare function JSONPipeIn(obj: any, reGenerateId?: boolean, idMap?: any): any;
export declare function JSONPipeOut(obj: any, filterHiddenProps?: boolean | ((key: string, prop: any) => boolean)): any;
export declare function JSONGetByPath(json: any, paths: Array<string>, stacks?: Array<any>): any;
export declare function JSONGetPathById(json: any, id: string, idKey?: string): Array<string> | null;
export declare function JSONGetById(json: any, id: string, idKey?: string): any;
export declare function JSONGetParentById(json: any, id: string, skipArray?: boolean): any;
export declare function JSONUpdate(json: any, id: string, value: any, replace?: boolean): any;
export declare function JSONDelete(json: any, id: string, pathsRef?: Array<string>, deleteIfEmpty?: boolean): any;
export declare function JSONMerge(json: any, target: any): any;
export declare function JSONChangeInArray(json: any, id: string, operation: (arr: Array<any>, node: any, index: number) => void): any;
export declare function JSONCanMoveUp(json: any, id: string): boolean;
export declare function JSONMoveUpById(json: any, id: string): any;
export declare function JSONCanMoveDown(json: any, id: string): boolean | 0;
export declare function JSONMoveDownById(json: any, id: string): any;
export declare function JSONDuplicate(json: any, id: string, reIds?: {
    [propKey: string]: string;
}): any;
/**
 * 用于复制或粘贴的时候重新生成组件id
 * 【备注】需考虑以下两类使用场景：
 * 1. 组件模板插入到页面中，组件模板含事件动作，事件动作中的componentId需替换成最新的；
 * 2. 页面中的复制&粘贴，复制的组件含事件动作，且componentId关联的是页面其他组件，此时无需重置componentId。
 * 【逻辑说明】
 * 1. 第一次遍历，确保重置所有组件id，并记录下当前所有组件的新旧id对应关系(reIds)；
 * 2. 第一次遍历中，如果遇到事件动作，则将componentId替换成reIds中的新id，如果reIds中不存在对应的id，则重置componentId，并记录在reComptIds中；
 * 3. 完成第一次遍历后，检测reComptIds中是否存在reIds中没有的组件id（识别第2种场景），并将不在reIds种的id记录到resetComptIds，然后开始第二次遍历；
 * 4. 第二次遍历，恢复resetComptIds中的componentId。
 * 【额外说明】
 * 1. 仅第二类使用场景会触发第二次遍历，如果是第一类使用情况或者其他通用场景，则不会触发第二次遍历。
 * @param json
 */
export declare function reGenerateID(json: any, reIds?: {
    [propKey: string]: string;
}): any;
export declare function JsonGenerateID(json: any): void;
export declare function createElementFromHTML(htmlString: string): HTMLElement;
export declare function deepFind(schema: any, keyValue: any, result?: any): any;
/**
 * 处理一下schema的$$commonSchema
 * @param schema
 * @valueWithConfig 带commonConfig 配置项的schema
 */
export declare function filterSchemaForConfig(schema: any, valueWithConfig?: any): any;
/**
 * 给编辑器前处理一下，把 visibleOn, hiddenOn 什么的处理掉，要不没办法编辑。
 * @param schema
 */
export declare function filterSchemaForEditor(schema: any): any;
export declare function blackList(list: Array<string>): (str: string) => boolean;
export declare function sortByList(list: Array<string>, attr: string | Function): (a: any, b: any) => 0 | 1 | -1;
export declare function persistGet(key: string, defaultValue?: any): any;
export declare function persistSet(key: string, value: any): void;
export declare function normalizeId(id: string): string;
export declare const autobind: typeof import("amis").autobindMethod;
export declare function addDragingClass(el: HTMLElement): void;
export declare function removeDragingClass(el: HTMLElement): void;
export declare function camelize(str: string): string;
export declare const reactionWithOldValue: <T>(expression: () => T, effect: (newValue: T, oldValue?: T | undefined) => void) => import("mobx").IReactionDisposer;
export declare function repeatArray<T>(child: T, count?: number): Array<T>;
export type DiffChange = Diff<any, any>;
export declare function diff(left: any, right: any, prefilter?: (currentPath: Array<string>, key: string) => boolean): Array<DiffChange> | undefined;
export declare function patchDiff(left: any, changes: Array<DiffChange> | undefined): any;
/**
 * 遍历 schema
 * @param json
 * @param mapper
 * @param ignore
 */
export declare function JSONTraverse(json: any, mapper: (value: any, key: string | number, host: Object) => any, ignore?: (value: any, key: string | number) => boolean | void): void;
export type PanelSchemaObject = Schema;
/**
 * 判断输入内容是否为数字格式
 */
export declare const isNumeric: (value: any) => boolean;
export declare const string2CSSUnit: (value: any, unit?: string) => any;
export declare function isString(obj: any): boolean;
/**
 *  判断是否是对象类型
 * */
export declare function isObject(curObj: any): boolean;
export declare function jsonToJsonSchema(json?: any, titleBuilder?: (type: string, key: string) => string, maxDepth?: number): any;
/**
 * 生成节点id
 */
export declare function generateNodeId(): string;
export declare function isHasPluginIcon(plugin: any): any;
/**
 * 判断是否是布局容器类组件
 * 备注：当前只有一个flex布局容器
 */
export declare function isLayoutPlugin(plugin: any): boolean;
/**
 * 单位数值运算
 * 备注：支持带单位的数值进行运算
 */
export declare function unitFormula(insetStr: string, offsetVal: number): string;
/**
 * 过滤搜索字段中的特殊字符
 */
export declare function stringRegExp(keyword: string): string;
/**
 * 过滤搜索字段中的特殊字符
 */
export declare function needDefaultWidth(elemType: string): boolean;
/** 是否开启应用国际化 */
export declare function getI18nEnabled(): any;
/** schema 翻译方法 */
export declare function translateSchema(schema: any, replaceData?: any, skipFn?: any): any;
/** 应用级别的翻译方法 */
export declare function appTranslate(value?: string): any;
/**
 * 判断是否需要给组件增加填充占位样式
 */
export declare function needFillPlaceholder(curProps: any): boolean;
export declare function setThemeConfig(config: any): void;
export declare function getThemeConfig(): any;
/**
 * 将style转换为组件ThemeCSS格式
 *
 * @param data - 组件schema
 * @returns 处理后的数据
 */
export declare function style2ThemeCss(data: any): any;
export declare function clearDirtyCssKey(data: any): any;
/**
 * 从amis数据域中取变量数据
 * @param node
 * @param manager
 * @returns
 */
export declare function resolveVariablesFromScope(node: any, manager: any): Promise<any[]>;
/**
 * 整合 props & amis数据域 中的 variables
 * @param that  为组件的实例 this
 **/
export declare function getVariables(that: any): Promise<any>;
/**
 * 更新组件上下文中label为带层级说明
 * @param variables 变量列表
 * @returns
 */
export declare const updateComponentContext: (variables: any[]) => any[];
/**
 * dom 滚动到可见区域
 * @param selector dom 选择器
 */
export declare const scrollToActive: import("lodash").DebouncedFunc<(selector: string) => void>;
export declare function addModal(schema: any, modal: any, definitions?: any): any[];
/**
 * 弹窗转成 definitions 定义
 * 这样打开子弹窗的时候，可以把父级的弹窗列表透传到子弹窗里面去
 *
 * 这样子弹窗里面打开弹窗才能选到外面的弹窗
 * @param modals
 * @param definitions
 * @returns
 */
export declare function modalsToDefinitions(modals: Array<EditorModalBody>, definitions?: any): any;
/**
 * 从子弹窗的 definitions 合并回来到主弹窗的 definitions
 *
 * @param originSchema
 * @param definitions
 * @param modal
 * @returns
 */
export declare function mergeDefinitions(originSchema: any, definitions: any, modal: any): any;

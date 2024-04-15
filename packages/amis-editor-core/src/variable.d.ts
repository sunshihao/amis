/**
 * @file 变量管理
 * @desc 主要用于编辑器外部注入变量的管理，用于变量绑定
 */
import { JSONSchema, DataSchema } from 'amis-core';
import type { Option } from 'amis-core';
export interface VariableGroup {
    /** 变量命名空间 */
    name: string;
    /** 标题显示名称 */
    title: string;
    parentId: string;
    /** 顺序 */
    order: number;
    /** 结构定义，根结点必须为object */
    schema: JSONSchema;
}
export interface VariableOptions {
    /** 变量Schema被添加到Scope之前触发 */
    beforeScopeInsert?: (context: VariableManager, schema: JSONSchema) => JSONSchema;
    /** 事件：变量Schema被添加到Scope之后触发 */
    afterScopeInsert?: (context: VariableManager) => void;
    /** 获取上下文数据结构时触发，可以自定义返回的数据结构 */
    onContextSchemaChange?: (context: VariableManager, schema: JSONSchema[]) => JSONSchema[];
    /** 获取上下文数据Options时触发，可以自定义返回的数据结构 */
    onContextOptionChange?: (context: VariableManager, option: Option[], type: 'normal' | 'formula') => Option[];
}
export declare class VariableManager {
    readonly variables: VariableGroup[];
    readonly dataSchema: DataSchema;
    readonly options: VariableOptions;
    constructor(dataSchema: DataSchema | undefined, variables: VariableGroup[] | undefined, options: VariableOptions | undefined);
    /**
     * 初始化变量，预期的结构类似：
     * ──系统变量(root)
     *   └── 组织变量
     *   └── 应用变量
     *   └── 页面变量
     *       └── ...
     */
    init(): void;
    /**
     * 获取外部变量的上下文数据结构
     */
    getVariableContextSchema(): JSONSchema[];
    /**
     * 获取公式编辑器中变量的Option结构
     */
    getVariableFormulaOptions(reverseOrder?: boolean): Option[];
    /**
     * 获取通用的树形结构
     */
    getVariableOptions(): Option[];
    /**
     * 获取页面变量树形结构
     * @returns
     */
    getPageVariablesOptions(): Option[];
    /**
     * 根据变量路径获取变量名称
     */
    getNameByPath(path: string, valueField?: string, labelField?: string): any;
}

import { SnapshotIn, Instance } from 'mobx-state-tree';
import { Api, Payload, fetchOptions } from '../types';
export declare const FormItemStore: import("mobx-state-tree").IModelType<{
    id: import("mobx-state-tree").ISimpleType<string>;
    path: import("mobx-state-tree").IType<string | undefined, string, string>;
    storeType: import("mobx-state-tree").ISimpleType<string>;
    disposed: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    parentId: import("mobx-state-tree").IType<string | undefined, string, string>;
    childrenIds: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").ISimpleType<string>>, [undefined]>;
} & {
    isFocused: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    isControlled: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    type: import("mobx-state-tree").IType<string | undefined, string, string>;
    label: import("mobx-state-tree").IType<string | undefined, string, string>;
    unique: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    loading: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    required: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    isValueSchemaExp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    tmpValue: import("mobx-state-tree").IType<any, any, any>;
    emitedValue: import("mobx-state-tree").IType<any, any, any>;
    changeMotivation: import("mobx-state-tree").IType<string | undefined, string, string>;
    rules: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    messages: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    errorData: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        msg: import("mobx-state-tree").IType<string | undefined, string, string>;
        tag: import("mobx-state-tree").IType<string | undefined, string, string>;
        rule: import("mobx-state-tree").IType<string | undefined, string, string>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>, [undefined]>;
    name: import("mobx-state-tree").ISimpleType<string>;
    extraName: import("mobx-state-tree").IType<string | undefined, string, string>;
    itemId: import("mobx-state-tree").IType<string | undefined, string, string>;
    unsetValueOnInvisible: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    itemsRef: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").ISimpleType<string>>, [undefined]>;
    inited: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    validated: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    validating: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    multiple: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    delimiter: import("mobx-state-tree").IType<string | undefined, string, string>;
    valueField: import("mobx-state-tree").IType<string | undefined, string, string>;
    labelField: import("mobx-state-tree").IType<string | undefined, string, string>;
    joinValues: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    extractValue: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    options: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any[], any[], any[]>, [undefined]>;
    optionsRaw: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any[], any[], any[]>, [undefined]>;
    expressionsInOptions: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    selectFirst: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    autoFill: import("mobx-state-tree").IType<any, any, any>;
    clearValueOnHidden: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    validateApi: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    selectedOptions: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    filteredOptions: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    dialogSchema: import("mobx-state-tree").IType<any, any, any>;
    dialogOpen: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    dialogData: import("mobx-state-tree").IType<any, any, any>;
    resetValue: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    validateOnChange: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    inputGroupControl: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    colIndex: import("mobx-state-tree").IType<any, any, any>;
    rowIndex: import("mobx-state-tree").IType<any, any, any>;
    pagination: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    accumulatedOptions: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any[], any[], any[]>, [undefined]>;
}, {
    readonly parentStore: any;
    readonly __: any;
    readonly hasChildren: boolean;
    readonly children: any[];
} & {
    onChildStoreDispose(child: any): void;
    syncProps(props: any, prevProps: any, list?: string[]): void;
    dispose: (callback?: (() => void) | undefined) => void;
    addChildId: (id: string) => void;
    removeChildId: (id: string) => void;
} & {
    readonly subFormItems: any;
    readonly form: any;
    readonly value: any;
    readonly prinstine: any;
    readonly errors: string[];
    readonly valid: boolean;
    readonly errClassNames: string;
    readonly lastSelectValue: string;
    /** 数据源接口数据是否开启分页 */
    readonly enableSourcePagination: boolean;
    /** 数据源接口开启分页时当前页码 */
    readonly sourcePageNum: number;
    /** 数据源接口开启分页时每页显示条数 */
    readonly sourcePerPageNum: number;
    /** 数据源接口开启分页时数据总条数 */
    readonly sourceTotalNum: number;
    getSelectedOptions: (value?: any, nodeValueArray?: any[] | undefined) => any;
    splitExtraValue(value: any): any[];
    getMergedData(data: any): any;
} & {
    focus: () => void;
    blur: () => void;
    config: ({ name, extraName, required, unique, value, isValueSchemaExp, rules, messages, delimiter, multiple, valueField, labelField, joinValues, extractValue, type, id, selectFirst, autoFill, clearValueOnHidden, validateApi, maxLength, minLength, validateOnChange, label, inputGroupControl, pagination }: {
        name?: string | undefined;
        extraName?: string | undefined;
        required?: boolean | undefined;
        unique?: boolean | undefined;
        value?: any;
        isValueSchemaExp?: boolean | undefined;
        rules?: string | {
            [propName: string]: any;
        } | undefined;
        messages?: {
            [propName: string]: string;
        } | undefined;
        multiple?: boolean | undefined;
        delimiter?: string | undefined;
        valueField?: string | undefined;
        labelField?: string | undefined;
        joinValues?: boolean | undefined;
        extractValue?: boolean | undefined;
        type?: string | undefined;
        id?: string | undefined;
        selectFirst?: boolean | undefined;
        autoFill?: any;
        clearValueOnHidden?: boolean | undefined;
        validateApi?: boolean | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        validateOnChange?: boolean | undefined;
        label?: string | undefined;
        inputGroupControl?: {
            [propsName: string]: any;
            name: string;
            path: string;
        } | undefined;
        pagination?: {
            enable?: boolean | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
        } | undefined;
    }) => void;
    validate: (data: Object, hook?: any, customRules?: {
        [propName: string]: any;
    } | undefined) => Promise<boolean>;
    setError: (msg: string | Array<string>, tag?: string) => void;
    addError: (msg: string | (string | {
        msg: string;
        rule: string;
    })[], tag?: string) => void;
    clearError: (tag?: string) => void;
    setPagination: (params: {
        page?: number;
        perPage?: number;
        total?: number;
    }) => void;
    setOptions: (options: Array<object>, onChange?: ((value: any) => void) | undefined, data?: Object) => void;
    loadOptions: (api: Api, data?: object, config?: (fetchOptions & {
        extendsOptions?: boolean | undefined;
    }) | undefined, clearValue?: boolean, onChange?: ((value: any) => void) | undefined, setErrorFlag?: boolean) => Promise<Payload | null>;
    loadOptionsFromDataScope: (source: string, ctx: Record<string, any>, onChange?: ((value: any) => void) | undefined) => any[];
    deferLoadOptions: (option: any, api: Api, data?: object, config?: fetchOptions | undefined) => Promise<Payload | null>;
    deferLoadLeftOptions: (option: any, leftOptions: any, api: Api, data?: object, config?: fetchOptions | undefined) => Promise<Payload | null>;
    expandTreeOptions: (nodePathArr: any[], api: Api, data?: object, config?: fetchOptions | undefined) => Promise<Payload | null | void>;
    syncOptions: (originOptions?: Array<any>, data?: Object) => void;
    setLoading: (value: boolean) => void;
    setSubStore: (store: any) => void;
    getSubStore: () => any;
    reset: (keepErrors?: boolean) => void;
    resetValidationStatus: (tag?: string) => void;
    openDialog: (schema: any, ctx: any, callback?: ((confirmed?: any, value?: any) => void) | undefined) => void;
    closeDialog: (confirmed?: any, result?: any) => void;
    changeTmpValue: (value: any, changeReason?: 'initialValue' | 'formInited' | 'dataChanged' | 'formulaChanged' | 'controlled' | 'input' | 'defaultValue') => void;
    changeEmitedValue: (value: any) => void;
    addSubFormItem: (item: IFormItemStore) => void;
    removeSubFormItem: (item: IFormItemStore) => void;
    loadAutoUpdateData: (api: Api, data?: object, silent?: boolean) => Promise<Payload>;
    setIsControlled: (value: any) => void;
    init: () => Promise<void>;
    addInitHook(fn: (store: any) => any, weight?: number): () => void;
    beforeDestroy: () => void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export type IFormItemStore = Instance<typeof FormItemStore>;
export type SFormItemStore = SnapshotIn<typeof FormItemStore>;

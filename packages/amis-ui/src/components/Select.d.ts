/**
 * @file Select
 * @description
 * @author fex
 * @date 2017-11-07
 */
/// <reference types="hoist-non-react-statics" />
/// <reference types="lodash" />
import React from 'react';
import { ControllerStateAndHelpers } from 'downshift';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
import { SpinnerExtraProps } from './Spinner';
import type { Option, Options, TestIdBuilder } from 'amis-core';
import { RemoteOptionsProps } from './WithRemoteConfig';
import { PopOverOverlay } from './PopOverContainer';
import type { TooltipObject } from '../components/TooltipWrapper';
export { Option, Options };
export declare const defaultFilterOption: (options: Option[], inputValue: string, option: {
    keys: string[];
}) => Option[];
export type FilterOption = typeof defaultFilterOption;
export interface OptionProps {
    className?: string;
    multi?: boolean;
    multiple?: boolean;
    valueField?: string;
    labelField?: string;
    simpleValue?: boolean;
    options: Options;
    loading?: boolean;
    joinValues?: boolean;
    extractValue?: boolean;
    delimiter?: string;
    clearable?: boolean;
    resetValue: any;
    placeholder?: string;
    disabled?: boolean;
    creatable?: boolean;
    pathSeparator?: string;
    itemHeight?: number;
    virtualThreshold?: number;
    hasError?: boolean;
    block?: boolean;
    onAdd?: (idx?: number | Array<number>, value?: any, skipForm?: boolean, closePopOver?: () => void) => void;
    editable?: boolean;
    onEdit?: (value: Option, origin?: Option, skipForm?: boolean) => void;
    removable?: boolean;
    onDelete?: (value: Option) => void;
    testIdBuilder?: TestIdBuilder;
}
export type OptionValue = string | number | null | undefined | Option;
export declare function value2array(value: OptionValue | Array<OptionValue>, props: Pick<OptionProps, 'multi' | 'multiple' | 'delimiter' | 'valueField' | 'labelField' | 'options' | 'pathSeparator'>, enableNodePath?: boolean): Array<Option>;
export declare function expandValue(value: OptionValue, options: Options, valueField?: string): Option | null;
export declare function matchOptionValue(a: OptionValue, b: Option, valueField?: string): boolean;
export declare function optionValueCompare(a: OptionValue, valueField?: string): (b: Option) => boolean;
export declare function normalizeOptions(options: string | {
    [propName: string]: string;
} | Array<string> | Options, share?: {
    values: Array<any>;
    options: Array<any>;
}, valueField?: string): Options;
export interface SelectProps extends OptionProps, ThemeProps, LocaleProps, SpinnerExtraProps {
    className?: string;
    popoverClassName?: string;
    showInvalidMatch?: boolean;
    creatable: boolean;
    createBtnLabel: string;
    multiple: boolean;
    valuesNoWrap?: boolean;
    valueField: string;
    labelField: string;
    renderMenu?: (item: Option, states: {
        index: number;
        multiple?: boolean;
        checkAll?: boolean;
        checked: boolean;
        onChange: () => void;
        inputValue?: string;
        searchable?: boolean;
    }) => JSX.Element;
    renderValueLabel?: (item: Option) => JSX.Element;
    searchable?: boolean;
    options: Array<Option>;
    value: any;
    loadOptions?: Function;
    searchPromptText: string;
    loadingPlaceholder: string;
    spinnerClassName?: string;
    noResultsText: string;
    clearable: boolean;
    clearAllText: string;
    clearValueText: string;
    placeholder: string;
    inline: boolean;
    disabled: boolean;
    popOverContainer?: any;
    popOverContainerSelector?: string;
    overlayPlacement?: string;
    overlay?: PopOverOverlay;
    onChange: (value: void | string | Option | Array<Option>) => void;
    onFocus?: Function;
    onBlur?: Function;
    checkAll?: boolean;
    checkAllLabel?: string;
    checkAllBySearch?: boolean;
    defaultCheckAll?: boolean;
    simpleValue?: boolean;
    defaultOpen?: boolean;
    /**
     * 边框模式，全边框，还是半边框，或者没边框。
     */
    borderMode?: 'full' | 'half' | 'none';
    /**
     * 是否隐藏已选项
     */
    hideSelected?: boolean;
    /**
     * 移动端样式类名
     */
    mobileClassName?: string;
    /**
     * 标签的最大展示数量，超出数量后以收纳浮层的方式展示，仅在多选模式开启后生效
     */
    maxTagCount?: number;
    /**
     * 收纳标签的Popover配置
     */
    overflowTagPopover?: TooltipObject;
    /**
     * 检索函数
     */
    filterOption?: FilterOption;
}
interface SelectState {
    itemHeight: number;
    isOpen: boolean;
    isFocused: boolean;
    inputValue: string;
    highlightedIndex: number;
    selection: Array<Option>;
    pickerSelectItem: any;
}
export declare class Select extends React.Component<SelectProps, SelectState> {
    static defaultProps: {
        multiple: boolean;
        clearable: boolean;
        creatable: boolean;
        showInvalidMatch: boolean;
        createBtnLabel: string;
        searchPromptText: string;
        loadingPlaceholder: string;
        noResultsText: string;
        clearAllText: string;
        clearValueText: string;
        placeholder: string;
        valueField: string;
        labelField: string;
        resetValue: string;
        inline: boolean;
        disabled: boolean;
        checkAll: boolean;
        checkAllLabel: string;
        defaultCheckAll: boolean;
        overlayPlacement: string;
        virtualThreshold: number;
    };
    input: HTMLInputElement;
    target: HTMLElement;
    menu: React.RefObject<HTMLDivElement>;
    constructor(props: SelectProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: SelectProps): void;
    open(): void;
    close(): void;
    confirm(): void;
    toggle(e?: React.MouseEvent<HTMLDivElement>): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    focus(): void;
    blur(): void;
    getTarget(): HTMLElement;
    inputRef(ref: HTMLInputElement): void;
    toggleCheckAll(): void;
    removeItem(index: number, e?: React.MouseEvent<HTMLElement>): void;
    handleInputChange(evt: React.ChangeEvent<HTMLInputElement>): void;
    handlePickerChange(selectItem: any, index: number, confirm?: boolean): void;
    /**
     * DownShift中ESC按键动作会触发change事件，此时selectItem为null，需要单独处理，参考：
     * {@link https://github.com/downshift-js/downshift/issues/719 GitHub Issue #719}
     */
    handleChange(selectItem: any): void;
    handleStateChange(changes: any): void;
    handleKeyPress(e: React.KeyboardEvent): void;
    clearValue(e: React.MouseEvent<any>): void;
    clearSearchValue(): void;
    handleAddClick(): void;
    handleEditClick(e: Event, item: any): void;
    handleDeleteClick(e: Event, item: any): void;
    renderValue({ inputValue, isOpen }: ControllerStateAndHelpers<any>): React.JSX.Element | (string | React.JSX.Element)[];
    renderOuter({ selectedItem, getItemProps, highlightedIndex, inputValue, isOpen, getToggleButtonProps, getInputProps }: ControllerStateAndHelpers<any>): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const EnhancedSelect: {
    new (props: Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        valueField?: string | undefined;
        multiple?: boolean | undefined;
        inline?: boolean | undefined;
        clearable?: boolean | undefined;
        resetValue?: any;
        creatable?: boolean | undefined;
        createBtnLabel?: string | undefined;
        virtualThreshold?: number | undefined;
        showInvalidMatch?: boolean | undefined;
        labelField?: string | undefined;
        defaultCheckAll?: boolean | undefined;
        checkAll?: boolean | undefined;
        searchPromptText?: string | undefined;
        loadingPlaceholder?: string | undefined;
        noResultsText?: string | undefined;
        clearAllText?: string | undefined;
        clearValueText?: string | undefined;
        overlayPlacement?: string | undefined;
        checkAllLabel?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Select>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Select, {}> & {
        ComposedComponent: typeof Select;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        valueField?: string | undefined;
        multiple?: boolean | undefined;
        inline?: boolean | undefined;
        clearable?: boolean | undefined;
        resetValue?: any;
        creatable?: boolean | undefined;
        createBtnLabel?: string | undefined;
        virtualThreshold?: number | undefined;
        showInvalidMatch?: boolean | undefined;
        labelField?: string | undefined;
        defaultCheckAll?: boolean | undefined;
        checkAll?: boolean | undefined;
        searchPromptText?: string | undefined;
        loadingPlaceholder?: string | undefined;
        noResultsText?: string | undefined;
        clearAllText?: string | undefined;
        clearValueText?: string | undefined;
        overlayPlacement?: string | undefined;
        checkAllLabel?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Select>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Select, {}> & {
    ComposedComponent: typeof Select;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Select>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Select, {}> & {
        ComposedComponent: typeof Select;
    };
};
export default EnhancedSelect;
export declare const SelectWithRemoteOptions: {
    new (props: Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        valueField?: string | undefined;
        multiple?: boolean | undefined;
        inline?: boolean | undefined;
        clearable?: boolean | undefined;
        resetValue?: any;
        creatable?: boolean | undefined;
        createBtnLabel?: string | undefined;
        virtualThreshold?: number | undefined;
        showInvalidMatch?: boolean | undefined;
        labelField?: string | undefined;
        defaultCheckAll?: boolean | undefined;
        checkAll?: boolean | undefined;
        searchPromptText?: string | undefined;
        loadingPlaceholder?: string | undefined;
        noResultsText?: string | undefined;
        clearAllText?: string | undefined;
        clearValueText?: string | undefined;
        overlayPlacement?: string | undefined;
        checkAllLabel?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
        store: {
            fetching: boolean;
            errorMsg: string;
            config: any;
            data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            setComponent(c: any): void;
            load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
            setData(data: any): void;
            setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
            config: import("mobx-state-tree").IType<any, any, any>;
            data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
        }, {
            setComponent(c: any): void;
            load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
            setData(data: any): void;
            setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    }, "store">): {
        ref: any;
        store?: ({
            fetching: boolean;
            errorMsg: string;
            config: any;
            data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            setComponent(c: any): void;
            load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
            setData(data: any): void;
            setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
            config: import("mobx-state-tree").IType<any, any, any>;
            data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
        }, {
            setComponent(c: any): void;
            load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
            setData(data: any): void;
            setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | undefined;
        refFn: (ref: any) => void;
        componentWillUnmount(): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        valueField?: string | undefined;
        multiple?: boolean | undefined;
        inline?: boolean | undefined;
        clearable?: boolean | undefined;
        resetValue?: any;
        creatable?: boolean | undefined;
        createBtnLabel?: string | undefined;
        virtualThreshold?: number | undefined;
        showInvalidMatch?: boolean | undefined;
        labelField?: string | undefined;
        defaultCheckAll?: boolean | undefined;
        checkAll?: boolean | undefined;
        searchPromptText?: string | undefined;
        loadingPlaceholder?: string | undefined;
        noResultsText?: string | undefined;
        clearAllText?: string | undefined;
        clearValueText?: string | undefined;
        overlayPlacement?: string | undefined;
        checkAllLabel?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
        store: {
            fetching: boolean;
            errorMsg: string;
            config: any;
            data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            setComponent(c: any): void;
            load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
            setData(data: any): void;
            setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
            config: import("mobx-state-tree").IType<any, any, any>;
            data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
        }, {
            setComponent(c: any): void;
            load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
            setData(data: any): void;
            setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    }, "store">, context: any): {
        ref: any;
        store?: ({
            fetching: boolean;
            errorMsg: string;
            config: any;
            data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            setComponent(c: any): void;
            load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
            setData(data: any): void;
            setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
            config: import("mobx-state-tree").IType<any, any, any>;
            data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
        }, {
            setComponent(c: any): void;
            load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
            setData(data: any): void;
            setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | undefined;
        refFn: (ref: any) => void;
        componentWillUnmount(): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }, "store">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    ComposedComponent: React.ComponentType<{
        new (props: Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }): {
            toDispose: (() => void)[];
            loadOptions: import("lodash").DebouncedFunc<(input: string) => Promise<unknown>>;
            componentDidMount(): void;
            componentDidUpdate(prevProps: any): void;
            componentWillUnmount(): void;
            loadConfig(ctx?: any): Promise<void>;
            loadAutoComplete(input: string): Promise<unknown>;
            setConfig(value: any, ctx?: any): void;
            syncConfig(): void;
            deferLoadConfig(item: any): Promise<void>;
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, prevState: Readonly<{}>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        ComposedComponent: React.ComponentType<{
            new (props: RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
                render(): React.JSX.Element;
                context: unknown;
                setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
                state: Readonly<{}>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
                componentDidUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            };
            new (props: RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, context: any): {
                render(): React.JSX.Element;
                context: unknown;
                setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
                state: Readonly<{}>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
                componentDidUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            };
            contextType?: React.Context<any> | undefined;
        }>;
        contextType: React.Context<void | import("amis-core").RendererEnv>;
    }>;
    contextType?: React.Context<any> | undefined;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        valueField?: string | undefined;
        multiple?: boolean | undefined;
        inline?: boolean | undefined;
        clearable?: boolean | undefined;
        resetValue?: any;
        creatable?: boolean | undefined;
        createBtnLabel?: string | undefined;
        virtualThreshold?: number | undefined;
        showInvalidMatch?: boolean | undefined;
        labelField?: string | undefined;
        defaultCheckAll?: boolean | undefined;
        checkAll?: boolean | undefined;
        searchPromptText?: string | undefined;
        loadingPlaceholder?: string | undefined;
        noResultsText?: string | undefined;
        clearAllText?: string | undefined;
        clearValueText?: string | undefined;
        overlayPlacement?: string | undefined;
        checkAllLabel?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
        store: {
            fetching: boolean;
            errorMsg: string;
            config: any;
            data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            setComponent(c: any): void;
            load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
            setData(data: any): void;
            setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
            config: import("mobx-state-tree").IType<any, any, any>;
            data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
        }, {
            setComponent(c: any): void;
            load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
            setData(data: any): void;
            setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    }): {
        toDispose: (() => void)[];
        loadOptions: import("lodash").DebouncedFunc<(input: string) => Promise<unknown>>;
        componentDidMount(): void;
        componentDidUpdate(prevProps: any): void;
        componentWillUnmount(): void;
        loadConfig(ctx?: any): Promise<void>;
        loadAutoComplete(input: string): Promise<unknown>;
        setConfig(value: any, ctx?: any): void;
        syncConfig(): void;
        deferLoadConfig(item: any): Promise<void>;
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }>, prevState: Readonly<{}>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    ComposedComponent: React.ComponentType<{
        new (props: RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
            render(): React.JSX.Element;
            context: unknown;
            setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, context: any): {
            render(): React.JSX.Element;
            context: unknown;
            setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: React.Context<any> | undefined;
    }>;
    contextType: React.Context<void | import("amis-core").RendererEnv>;
}, {}> & {
    ComposedComponent: {
        new (props: Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
            store: {
                fetching: boolean;
                errorMsg: string;
                config: any;
                data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                config: import("mobx-state-tree").IType<any, any, any>;
                data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
            }, {
                setComponent(c: any): void;
                load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                setData(data: any): void;
                setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        }): {
            toDispose: (() => void)[];
            loadOptions: import("lodash").DebouncedFunc<(input: string) => Promise<unknown>>;
            componentDidMount(): void;
            componentDidUpdate(prevProps: any): void;
            componentWillUnmount(): void;
            loadConfig(ctx?: any): Promise<void>;
            loadAutoComplete(input: string): Promise<unknown>;
            setConfig(value: any, ctx?: any): void;
            syncConfig(): void;
            deferLoadConfig(item: any): Promise<void>;
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, prevState: Readonly<{}>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, keyof RemoteOptionsProps<P>> & import("./WithRemoteConfig").OutterProps & {
                store: {
                    fetching: boolean;
                    errorMsg: string;
                    config: any;
                    data: import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<{} | null | undefined, {}, {}>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
                    errorMsg: import("mobx-state-tree").IType<string | undefined, string, string>;
                    config: import("mobx-state-tree").IType<any, any, any>;
                    data: import("mobx-state-tree").IType<{} | null | undefined, {}, {}>;
                }, {
                    setComponent(c: any): void;
                    load: (env: import("amis-core").RendererEnv, api: import("amis-core").Api, ctx: any, config?: import("./WithRemoteConfig").WithRemoteConfigSettings | undefined) => Promise<unknown>;
                    setData(data: any): void;
                    setConfig(options: any, config: import("./WithRemoteConfig").WithRemoteConfigSettings, motivation?: any): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        ComposedComponent: React.ComponentType<{
            new (props: RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
                render(): React.JSX.Element;
                context: unknown;
                setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
                state: Readonly<{}>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
                componentDidUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            };
            new (props: RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, context: any): {
                render(): React.JSX.Element;
                context: unknown;
                setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
                state: Readonly<{}>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
                componentDidUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                    placeholder?: string | undefined;
                    disabled?: boolean | undefined;
                    valueField?: string | undefined;
                    multiple?: boolean | undefined;
                    inline?: boolean | undefined;
                    clearable?: boolean | undefined;
                    resetValue?: any;
                    creatable?: boolean | undefined;
                    createBtnLabel?: string | undefined;
                    virtualThreshold?: number | undefined;
                    showInvalidMatch?: boolean | undefined;
                    labelField?: string | undefined;
                    defaultCheckAll?: boolean | undefined;
                    checkAll?: boolean | undefined;
                    searchPromptText?: string | undefined;
                    loadingPlaceholder?: string | undefined;
                    noResultsText?: string | undefined;
                    clearAllText?: string | undefined;
                    clearValueText?: string | undefined;
                    overlayPlacement?: string | undefined;
                    checkAllLabel?: string | undefined;
                } & {} & {
                    locale?: string | undefined;
                    translate?: ((str: string, ...args: any[]) => string) | undefined;
                }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            };
            contextType?: React.Context<any> | undefined;
        }>;
        contextType: React.Context<void | import("amis-core").RendererEnv>;
    };
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        valueField?: string | undefined;
        multiple?: boolean | undefined;
        inline?: boolean | undefined;
        clearable?: boolean | undefined;
        resetValue?: any;
        creatable?: boolean | undefined;
        createBtnLabel?: string | undefined;
        virtualThreshold?: number | undefined;
        showInvalidMatch?: boolean | undefined;
        labelField?: string | undefined;
        defaultCheckAll?: boolean | undefined;
        checkAll?: boolean | undefined;
        searchPromptText?: string | undefined;
        loadingPlaceholder?: string | undefined;
        noResultsText?: string | undefined;
        clearAllText?: string | undefined;
        clearValueText?: string | undefined;
        overlayPlacement?: string | undefined;
        checkAllLabel?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        render(): React.JSX.Element;
        context: unknown;
        setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        valueField?: string | undefined;
        multiple?: boolean | undefined;
        inline?: boolean | undefined;
        clearable?: boolean | undefined;
        resetValue?: any;
        creatable?: boolean | undefined;
        createBtnLabel?: string | undefined;
        virtualThreshold?: number | undefined;
        showInvalidMatch?: boolean | undefined;
        labelField?: string | undefined;
        defaultCheckAll?: boolean | undefined;
        checkAll?: boolean | undefined;
        searchPromptText?: string | undefined;
        loadingPlaceholder?: string | undefined;
        noResultsText?: string | undefined;
        clearAllText?: string | undefined;
        clearValueText?: string | undefined;
        overlayPlacement?: string | undefined;
        checkAllLabel?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, context: any): {
        render(): React.JSX.Element;
        context: unknown;
        setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
}, {}> & {
    ComposedComponent: {
        new (props: RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
            render(): React.JSX.Element;
            context: unknown;
            setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            valueField?: string | undefined;
            multiple?: boolean | undefined;
            inline?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            creatable?: boolean | undefined;
            createBtnLabel?: string | undefined;
            virtualThreshold?: number | undefined;
            showInvalidMatch?: boolean | undefined;
            labelField?: string | undefined;
            defaultCheckAll?: boolean | undefined;
            checkAll?: boolean | undefined;
            searchPromptText?: string | undefined;
            loadingPlaceholder?: string | undefined;
            noResultsText?: string | undefined;
            clearAllText?: string | undefined;
            clearValueText?: string | undefined;
            overlayPlacement?: string | undefined;
            checkAllLabel?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, context: any): {
            render(): React.JSX.Element;
            context: unknown;
            setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<RemoteOptionsProps<Options[]> & Omit<Pick<Omit<SelectProps, keyof LocaleProps>, "style" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "popOverContainer" | "delimiter" | "joinValues" | "options" | "valuesNoWrap" | "extractValue" | "borderMode" | "searchable" | "itemHeight" | "overlay" | "block" | "mobileUI" | "classnames" | "classPrefix" | "loadOptions" | "onFocus" | "onBlur" | "multi" | "pathSeparator" | "spinnerClassName" | "onEdit" | "onDelete" | "hasError" | "popoverClassName" | "renderMenu" | "renderValueLabel" | "popOverContainerSelector" | "checkAllBySearch" | "simpleValue" | "defaultOpen" | "hideSelected" | "mobileClassName" | "maxTagCount" | "overflowTagPopover" | "filterOption" | "onAdd"> & {
                placeholder?: string | undefined;
                disabled?: boolean | undefined;
                valueField?: string | undefined;
                multiple?: boolean | undefined;
                inline?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                creatable?: boolean | undefined;
                createBtnLabel?: string | undefined;
                virtualThreshold?: number | undefined;
                showInvalidMatch?: boolean | undefined;
                labelField?: string | undefined;
                defaultCheckAll?: boolean | undefined;
                checkAll?: boolean | undefined;
                searchPromptText?: string | undefined;
                loadingPlaceholder?: string | undefined;
                noResultsText?: string | undefined;
                clearAllText?: string | undefined;
                clearValueText?: string | undefined;
                overlayPlacement?: string | undefined;
                checkAllLabel?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: React.Context<any> | undefined;
    };
};

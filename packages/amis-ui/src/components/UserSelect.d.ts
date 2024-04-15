/**
 * @file 移动端人员、部门、角色、岗位选择
 * @author fex
 */
/// <reference types="lodash" />
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { Payload, ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
import type { Option } from 'amis-core';
import Sortable from 'sortablejs';
import { SpinnerExtraProps } from './Spinner';
import { Api, PlainObject } from 'amis-core';
export interface UserSelectProps extends ThemeProps, LocaleProps, SpinnerExtraProps {
    showNav?: boolean;
    navTitle?: string;
    options: Array<any>;
    value?: Array<Option> | Option | string;
    selection?: Array<Option>;
    valueField?: string;
    labelField?: string;
    deferField?: string;
    multi?: boolean;
    multiple?: boolean;
    isDep?: boolean;
    isRef?: boolean;
    searchable?: boolean;
    showResultBox?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    controlled?: boolean;
    displayFields: Array<string>;
    isTab?: boolean;
    fetcher?: (api: Api, data?: any, options?: PlainObject | undefined) => Promise<Payload>;
    onSearch?: (term: string, cancelExecutor: Function) => Promise<any[]> | undefined;
    deferLoad: (data?: PlainObject, isRef?: boolean, param?: PlainObject) => Promise<Option[]>;
    onChange: (value: Array<Option> | Option, isReplace?: boolean, isDelete?: boolean) => void;
}
export interface UserSelectState {
    isOpened: boolean;
    isSearch: boolean;
    isSelectOpened: boolean;
    inputValue: string;
    breadList: Array<any>;
    options: Array<Option>;
    tempSelection: Array<Option>;
    selection: Array<Option>;
    searchList: Array<Option>;
    searchLoading: boolean;
    isEdit: boolean;
}
export declare class UserSelect extends React.Component<UserSelectProps, UserSelectState> {
    cancelSearch?: Function;
    sortable?: Sortable;
    unmounted: boolean;
    constructor(props: UserSelectProps);
    static defaultProps: {
        showResultBox: boolean;
        labelField: string;
        valueField: string;
        deferField: string;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: UserSelectProps): void;
    componentWillUnmount(): void;
    onClose(): void;
    handleSearch(text: string): void;
    handleSeachCancel(): void;
    lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
    swapSelectPosition(oldIndex: number, newIndex: number): void;
    dragRef(ref: any): void;
    initDragging(): void;
    destroyDragging(): void;
    onOpen(): void;
    handleBack(): void;
    handleExpand(option: Option): Promise<void>;
    handleSelectChange(option: Option, isReplace?: boolean): false | undefined;
    handleSubmit(): void;
    onDelete(option: Option, isTemp?: boolean): void;
    handleBreadChange(option: Option, index: number): void;
    handleSort(): void;
    handleEdit(): void;
    handleClear(): void;
    getResult(): Option[];
    renderIcon(option: Option, isSelect?: boolean): React.JSX.Element;
    renderList(options?: Array<object>, key?: number | string, isSearch?: boolean): React.JSX.Element;
    renderselectList(options?: Array<object>): React.JSX.Element;
    renderContent(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
        valueField?: string | undefined;
        deferField?: string | undefined;
        labelField?: string | undefined;
        showResultBox?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof UserSelect>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof UserSelect, {}> & {
        ComposedComponent: typeof UserSelect;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
        valueField?: string | undefined;
        deferField?: string | undefined;
        labelField?: string | undefined;
        showResultBox?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof UserSelect>;
} & import("hoist-non-react-statics").NonReactStatics<typeof UserSelect, {}> & {
    ComposedComponent: typeof UserSelect;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
            valueField?: string | undefined;
            deferField?: string | undefined;
            labelField?: string | undefined;
            showResultBox?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "value" | "onChange" | "theme" | "loadingConfig" | "multiple" | "options" | "searchable" | "searchPlaceholder" | "mobileUI" | "classnames" | "classPrefix" | "controlled" | "multi" | "onSearch" | "selection" | "fetcher" | "deferLoad" | "showNav" | "navTitle" | "isDep" | "isRef" | "displayFields" | "isTab"> & {
                valueField?: string | undefined;
                deferField?: string | undefined;
                labelField?: string | undefined;
                showResultBox?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof UserSelect>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof UserSelect, {}> & {
        ComposedComponent: typeof UserSelect;
    };
};
export default _default;

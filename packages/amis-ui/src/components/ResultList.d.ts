/// <reference types="hoist-non-react-statics" />
/**
 * 用来显示选择结果，垂直显示。支持移出、排序等操作。
 */
import React from 'react';
import Sortable from 'sortablejs';
import { Option, Options } from './Select';
import { ThemeProps } from 'amis-core';
import { LocaleProps, ClassNamesFn } from 'amis-core';
import type { TestIdBuilder } from 'amis-core';
export interface ResultListProps extends ThemeProps, LocaleProps {
    className?: string;
    value?: Array<Option>;
    onChange?: (value: Array<Option>, optionModified?: boolean) => void;
    sortable?: boolean;
    disabled?: boolean;
    title?: string;
    searchPlaceholder?: string;
    placeholder: string;
    itemRender: (option: Option, states: ItemRenderStates) => JSX.Element;
    itemClassName?: string;
    searchable?: boolean;
    onSearch?: Function;
    valueField?: string;
    labelField?: string;
    itemHeight?: number;
    virtualThreshold?: number;
    showInvalidMatch?: boolean;
    testIdBuilder?: TestIdBuilder;
}
export interface ItemRenderStates {
    index: number;
    disabled?: boolean;
    labelField?: string;
    classnames: ClassNamesFn;
    onChange: (value: any, name: string) => void;
}
interface ResultListState {
    searchResult: Options | null;
}
export declare class ResultList extends React.Component<ResultListProps, ResultListState> {
    static itemRender(option: Option, states: ItemRenderStates): React.JSX.Element;
    static defaultProps: Pick<ResultListProps, 'placeholder' | 'itemRender' | 'searchPlaceholder' | 'virtualThreshold' | 'itemHeight'>;
    state: ResultListState;
    cancelSearch?: () => void;
    id: string;
    sortable?: Sortable;
    unmounted: boolean;
    searchRef?: any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    domSearchRef(ref: any): void;
    initSortable(): void;
    desposeSortable(): void;
    handleValueChange(index: number, value: any, name: string): void;
    search(inputValue: string): void;
    clearSearch(): void;
    clearInput(): void;
    handleCloseItem(e: React.MouseEvent<HTMLElement>, option: Option): void;
    renderOption(option: any, index: number, value: Options, styles?: object): React.JSX.Element;
    renderNormalList(value?: Options): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
        placeholder?: string | undefined;
        searchPlaceholder?: string | undefined;
        itemHeight?: number | undefined;
        virtualThreshold?: number | undefined;
        itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ResultList>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ResultList, {}> & {
        ComposedComponent: typeof ResultList;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
        placeholder?: string | undefined;
        searchPlaceholder?: string | undefined;
        itemHeight?: number | undefined;
        virtualThreshold?: number | undefined;
        itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof ResultList>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ResultList, {}> & {
    ComposedComponent: typeof ResultList;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
            placeholder?: string | undefined;
            searchPlaceholder?: string | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ResultListProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "itemClassName" | "title" | "valueField" | "testIdBuilder" | "sortable" | "searchable" | "showInvalidMatch" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch"> & {
                placeholder?: string | undefined;
                searchPlaceholder?: string | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ResultList>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ResultList, {}> & {
        ComposedComponent: typeof ResultList;
    };
};
export default _default;

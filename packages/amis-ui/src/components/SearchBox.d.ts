/// <reference types="lodash" />
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { TestIdBuilder, ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
import { SpinnerExtraProps } from './Spinner';
export interface HistoryRecord {
    /** 历史记录值 */
    value: string;
    /** 历史记录生成的unix时间戳 */
    timestamp?: number;
}
export interface SearchHistoryOptions {
    /** 是否开启历史记录 */
    enable: boolean;
    /** 本地存储历史记录的key */
    key?: string;
    /** 历史记录数量上限 */
    limit?: number;
    /** 历史记录下拉面板CSS类名 */
    dropdownClassName?: string;
}
export interface SearchBoxProps extends ThemeProps, LocaleProps, SpinnerExtraProps {
    name?: string;
    disabled?: boolean;
    mini?: boolean;
    enhance?: boolean;
    clearable?: boolean;
    searchImediately?: boolean;
    onChange?: (text: string) => void;
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    active?: boolean;
    defaultActive?: boolean;
    onActiveChange?: (active: boolean) => void;
    onSearch?: (value: string) => any;
    onCancel?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    /** 历史记录配置 */
    history?: SearchHistoryOptions;
    clearAndSubmit?: boolean;
    loading?: boolean;
    testIdBuilder?: TestIdBuilder;
}
export interface SearchBoxState {
    isFocused: boolean;
    isHistoryOpened: boolean;
    inputValue: string;
    historyRecords: HistoryRecord[];
}
export declare class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
    inputRef: React.RefObject<HTMLInputElement>;
    static defaultProps: {
        mini: boolean;
        enhance: boolean;
        clearable: boolean;
        searchImediately: boolean;
        history: Required<SearchHistoryOptions>;
        clearAndSubmit: boolean;
    };
    state: {
        isHistoryOpened: boolean;
        isFocused: boolean;
        inputValue: string;
        historyRecords: any[];
    };
    lazyEmitSearch: import("lodash").DebouncedFunc<() => void>;
    componentDidUpdate(prevProps: SearchBoxProps): void;
    componentWillUnmount(): void;
    handleActive(): void;
    handleCancel(): void;
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleSearch(): void;
    handleKeyDown(e: React.KeyboardEvent<any>): void;
    handleClear(): void;
    handleFocus(): void;
    handleBlur(e: React.FocusEvent<HTMLInputElement>): void;
    handleHistoryRecordSelect(record: HistoryRecord): void;
    /** 获取历史搜索配置 */
    getHistoryOptions(): Required<SearchHistoryOptions>;
    /** 获取历史记录 */
    getHistoryRecords(): any[];
    /** 清空历史记录 */
    clearHistoryRecords(): HistoryRecord[];
    /** 删除一条历史记录 */
    removeHistoryRecord(record: HistoryRecord): HistoryRecord[];
    /** 新增一条历史记录 */
    insertHistoryRecord(value: string): HistoryRecord[];
    renderInput(isHistoryMode?: boolean): React.JSX.Element;
    renderTag(item: HistoryRecord, index: number): React.JSX.Element;
    renderHitoryMode(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
        clearable?: boolean | undefined;
        enhance?: boolean | undefined;
        mini?: boolean | undefined;
        searchImediately?: boolean | undefined;
        history?: SearchHistoryOptions | undefined;
        clearAndSubmit?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SearchBox>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SearchBox, {}> & {
        ComposedComponent: typeof SearchBox;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
        clearable?: boolean | undefined;
        enhance?: boolean | undefined;
        mini?: boolean | undefined;
        searchImediately?: boolean | undefined;
        history?: SearchHistoryOptions | undefined;
        clearAndSubmit?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof SearchBox>;
} & import("hoist-non-react-statics").NonReactStatics<typeof SearchBox, {}> & {
    ComposedComponent: typeof SearchBox;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
            clearable?: boolean | undefined;
            enhance?: boolean | undefined;
            mini?: boolean | undefined;
            searchImediately?: boolean | undefined;
            history?: SearchHistoryOptions | undefined;
            clearAndSubmit?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SearchBoxProps, keyof LocaleProps>, "style" | "placeholder" | "disabled" | "className" | "name" | "value" | "onChange" | "theme" | "testIdBuilder" | "loadingConfig" | "loading" | "active" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onCancel" | "onActiveChange" | "defaultActive" | "onSearch"> & {
                clearable?: boolean | undefined;
                enhance?: boolean | undefined;
                mini?: boolean | undefined;
                searchImediately?: boolean | undefined;
                history?: SearchHistoryOptions | undefined;
                clearAndSubmit?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SearchBox>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SearchBox, {}> & {
        ComposedComponent: typeof SearchBox;
    };
};
export default _default;

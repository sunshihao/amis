/**
 * @file 移动端人员、部门、角色、岗位选择
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
import type { Option } from 'amis-core';
import Sortable from 'sortablejs';
import { UserSelectProps } from './UserSelect';
import type { PlainObject } from 'amis-core';
export interface UserSelectTop extends UserSelectProps {
    title: string;
    deferApi?: string;
    searchApi?: string;
    searchable?: boolean;
    searchParam?: PlainObject;
    searchTerm?: string;
}
export interface UserTabSelectProps extends ThemeProps, LocaleProps {
    tabOptions?: Array<UserSelectTop>;
    multiple?: boolean;
    placeholder?: string;
    valueField?: string;
    labelField?: string;
    selection?: Array<Option>;
    data?: PlainObject;
    onChange: (value: Array<Option> | Option) => void;
    onSearch?: (term: string, cancelExecutor: Function, paramObj?: PlainObject) => Promise<any[]> | undefined;
    deferLoad: (data?: Object, isRef?: boolean, param?: PlainObject) => Promise<Option[]>;
}
export interface UserTabSelectState {
    isOpened: boolean;
    isSearch: boolean;
    isSelectOpened: boolean;
    inputValue: string;
    breadList: Array<any>;
    options: Array<Option>;
    selection: Array<Option>;
    searchList: Array<Option>;
    searchLoading: boolean;
    isEdit: boolean;
    activeKey: number;
}
export declare class UserTabSelect extends React.Component<UserTabSelectProps, UserTabSelectState> {
    cancelSearch?: Function;
    sortable?: Sortable;
    unmounted: boolean;
    constructor(props: UserTabSelectProps);
    static defaultProps: {};
    componentDidMount(): void;
    componentDidUpdate(prevProps: UserTabSelectProps): void;
    componentWillUnmount(): void;
    onClose(): void;
    onOpen(): void;
    handleSubmit(): void;
    handleSelectChange(option: Option | Array<Option>, isReplace?: boolean, isDelete?: boolean): boolean;
    handleImmediateChange(option: Array<Option>): void;
    handleTabChange(key: number): void;
    getResult(): Option[];
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof UserTabSelect>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof UserTabSelect, {}> & {
        ComposedComponent: typeof UserTabSelect;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof UserTabSelect>;
} & import("hoist-non-react-statics").NonReactStatics<typeof UserTabSelect, {}> & {
    ComposedComponent: typeof UserTabSelect;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<UserTabSelectProps, keyof LocaleProps>, "style" | "placeholder" | "className" | "onChange" | "theme" | "data" | "valueField" | "multiple" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onSearch" | "selection" | "deferLoad" | "tabOptions"> & {} & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof UserTabSelect>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof UserTabSelect, {}> & {
        ComposedComponent: typeof UserTabSelect;
    };
};
export default _default;

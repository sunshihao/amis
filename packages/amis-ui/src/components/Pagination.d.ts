/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { LocaleProps, TestIdBuilder } from 'amis-core';
import { ThemeProps } from 'amis-core';
export type MODE_TYPE = 'simple' | 'normal';
export declare const enum PaginationWidget {
    Pager = "pager",
    PerPage = "perpage",
    Total = "total",
    Go = "go"
}
export declare const enum KeyCode {
    ENTER = "Enter",
    UP = "ArrowUp",
    DOWN = "ArrowDown"
}
export interface BasicPaginationProps {
    /**
     * 通过控制layout属性的顺序，调整分页结构 total,perPage,pager,go
     * @default ['pager']
     */
    layout?: string | Array<string>;
    /**
     * 最多显示多少个分页按钮。
     *
     * @default 5
     */
    maxButtons: number;
    /**
     * 模式，默认normal，如果只想简单显示可以配置成 `simple`。
     * @default 'normal'
     */
    mode?: MODE_TYPE;
    /**
     * 当前页数
     */
    activePage: number;
    /**
     * 总条数
     */
    total?: number;
    /**
     * 最后一页，总页数（如果传入了total，会重新计算lastPage）
     */
    lastPage?: number;
    /**
     * 每页显示条数
     * @default 10
     */
    perPage?: number;
    /**
     * 是否展示分页切换，也同时受layout控制
     * @default false
     */
    showPerPage?: boolean;
    /**
     * 指定每页可以显示多少条
     * @default [10, 20, 50, 100]
     */
    perPageAvailable?: Array<number>;
    /**
     * 是否显示快速跳转输入框
     * @default false
     */
    showPageInput?: boolean;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    hasNext?: boolean;
    /**
     * 弹层挂载节点
     * @default false
     */
    popOverContainerSelector?: string;
    /**
     * 多页跳转页数
     *
     * @default 5
     */
    ellipsisPageGap?: number;
    /**
     * 组件尺寸
     *
     * @default 'md'
     */
    size?: string;
    onPageChange?: (page: number, perPage?: number, dir?: string) => void;
}
export interface PaginationProps extends BasicPaginationProps, ThemeProps, LocaleProps {
    popOverContainer?: any;
    testIdBuilder?: TestIdBuilder;
}
export interface PaginationState {
    pageNum: string;
    internalPageNum: string;
    perPage: number;
}
export declare class Pagination extends React.Component<PaginationProps, PaginationState> {
    static defaultProps: {
        layout: PaginationWidget[];
        maxButtons: number;
        mode: MODE_TYPE;
        activePage: number;
        perPage: number;
        perPageAvailable: number[];
        ellipsisPageGap: number;
        size: string;
    };
    state: {
        pageNum: string;
        internalPageNum: string;
        perPage: number;
    };
    constructor(props: PaginationProps);
    componentDidUpdate(prevProps: PaginationProps): void;
    componentWillReceiveProps(nextProps: PaginationProps): void;
    handlePageNumChange(page: number, perPage?: number, dir?: string): Promise<void>;
    /**
     * 渲染每个页码li
     *
     * @param page 页码
     */
    renderPageItem(page: number): React.JSX.Element;
    /**
     * 渲染...
     *
     * @param key 类型 'prev-ellipsis' | 'next-ellipsis'
     * @param page 页码
     */
    renderEllipsis(key: string): React.JSX.Element;
    /**
     * 渲染器事件方法装饰器
     *
     * @param cur 当前页数
     * @param counts 总共页码按钮数
     * @param min 最小页码
     * @param max 最大页码
     */
    handlePageNums(cur: number, counts: number, min: number, max: number): Array<any>;
    getLastPage(): number;
    handlePageChange(e: React.ChangeEvent<any>): void;
    /**
     * 简洁模式input onChange/onKeyUp事件
     *
     * @param event
     */
    handleSimpleKeyUp(e: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>): void;
    /**
     * 简洁模式input onBlur事件
     */
    handleSimpleBlur(): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
        size?: string | undefined;
        mode?: MODE_TYPE | undefined;
        layout?: string | string[] | undefined;
        perPage?: number | undefined;
        perPageAvailable?: number[] | undefined;
        maxButtons?: number | undefined;
        ellipsisPageGap?: number | undefined;
        activePage?: number | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Pagination>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Pagination, {}> & {
        ComposedComponent: typeof Pagination;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
        size?: string | undefined;
        mode?: MODE_TYPE | undefined;
        layout?: string | string[] | undefined;
        perPage?: number | undefined;
        perPageAvailable?: number[] | undefined;
        maxButtons?: number | undefined;
        ellipsisPageGap?: number | undefined;
        activePage?: number | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Pagination>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Pagination, {}> & {
    ComposedComponent: typeof Pagination;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
            size?: string | undefined;
            mode?: MODE_TYPE | undefined;
            layout?: string | string[] | undefined;
            perPage?: number | undefined;
            perPageAvailable?: number[] | undefined;
            maxButtons?: number | undefined;
            ellipsisPageGap?: number | undefined;
            activePage?: number | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "testIdBuilder" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "total" | "popOverContainerSelector" | "showPerPage" | "showPageInput" | "hasNext" | "lastPage" | "onPageChange"> & {
                size?: string | undefined;
                mode?: MODE_TYPE | undefined;
                layout?: string | string[] | undefined;
                perPage?: number | undefined;
                perPageAvailable?: number[] | undefined;
                maxButtons?: number | undefined;
                ellipsisPageGap?: number | undefined;
                activePage?: number | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Pagination>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Pagination, {}> & {
        ComposedComponent: typeof Pagination;
    };
};
export default _default;

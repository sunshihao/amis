/**
 * @file Breadcrumb 面包屑
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { Trigger } from './TooltipWrapper';
import { ClassNamesFn, ThemeProps } from 'amis-core';
import type { TestIdBuilder } from 'amis-core';
export type ItemPlace = 'start' | 'middle' | 'end';
export type TooltipPositionType = 'top' | 'bottom' | 'left' | 'right';
interface BreadcrumbItemState {
    isOpened: boolean;
    tooltipTrigger: Trigger | Array<Trigger>;
    tooltipRootClose: boolean;
}
interface BreadcrumbBaseItem {
    href: string;
    icon?: string;
    label?: string;
    dropdown?: Array<BreadcrumbBaseItem>;
}
interface BreadcrumbItemProps {
    item: BreadcrumbBaseItem;
    itemPlace: ItemPlace;
    labelMaxLength?: number;
    tooltipContainer?: any;
    tooltipPosition?: TooltipPositionType;
    classnames: ClassNamesFn;
    testIdBuilder?: TestIdBuilder;
    [propName: string]: any;
}
interface BreadcrumbProps extends ThemeProps {
    tooltipContainer?: any;
    tooltipPosition?: TooltipPositionType;
    items: Array<BreadcrumbBaseItem>;
    testIdBuilder?: TestIdBuilder;
    [propName: string]: any;
}
/**
 * Breadcrumb 面包屑类
 */
export declare class Breadcrumb extends React.Component<BreadcrumbProps> {
    Item: typeof BreadcrumbItem;
    static defaultProps: Pick<BreadcrumbProps, 'separator' | 'labelMaxLength' | 'tooltipPosition'>;
    render(): React.JSX.Element;
}
/**
 * BreadcrumbItem 面包项类
 */
export declare class BreadcrumbItem extends React.Component<BreadcrumbItemProps, BreadcrumbItemState> {
    target: any;
    state: BreadcrumbItemState;
    domRef: (ref: any) => void;
    toogle: (e: React.MouseEvent<any>) => void;
    close: () => void;
    /**
     * 渲染基础面包项
     * @param showHref 是否显示超链接
     * @param itemType 基础面包项类型
     * @param item 面包项
     * @param label 渲染文本
     * @returns
     */
    renderBreadcrumbBaseItem(showHref: boolean, itemType: 'default' | 'dropdown', item: BreadcrumbBaseItem, label?: string): React.JSX.Element;
    /**
     * 渲染基础面包项完整节点
     * @param item 面包项
     * @param tooltipPosition 浮窗提示位置
     * @param itemPlace 面包香所在相对位置
     * @param itemType 基础面包项类型
     * @returns
     */
    renderBreadcrumbNode(item: BreadcrumbBaseItem, tooltipPosition: TooltipPositionType | undefined, itemPlace: ItemPlace, itemType: 'default' | 'dropdown'): React.JSX.Element;
    /**
     * 渲染下拉菜单节点
     * @param dropdown 面包项下拉菜单
     * @returns
     */
    renderDropdownNode(dropdown: BreadcrumbBaseItem[]): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<BreadcrumbProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Breadcrumb>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Breadcrumb, {}> & {
    ComposedComponent: typeof Breadcrumb;
};
export default _default;

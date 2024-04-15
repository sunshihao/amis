/**
 * @file MenuItem
 * @description 导航项目
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { MenuItemProps as RcMenuItemProps } from 'rc-menu';
import { ClassNamesFn, TestIdBuilder } from 'amis-core';
import { Trigger } from '../TooltipWrapper';
import { MenuContextProps } from './MenuContext';
import type { NavigationItem } from './';
export interface MenuItemProps extends Omit<NavigationItem, 'children'>, RcMenuItemProps {
    depth?: number;
    icon?: string | React.ReactNode;
    children?: React.ReactNode;
    classPrefix: string;
    classnames: ClassNamesFn;
    tooltipClassName?: string;
    tooltipContainer?: HTMLElement | (() => HTMLElement);
    tooltipTrigger?: Trigger | Array<Trigger>;
    renderLink: Function;
    testid?: string;
    testIdBuilder?: TestIdBuilder;
    extra?: React.ReactNode;
}
export declare class MenuItem extends React.Component<MenuItemProps> {
    static defaultProps: Pick<MenuItemProps, 'tooltipTrigger' | 'disabled'>;
    static contextType: React.Context<MenuContextProps>;
    /**
     * Menu上下文数据
     *
     * @type {MenuContextProps}
     * @memberof MenuItem
     */
    context: MenuContextProps;
    /**
     * 内部使用的属性
     *
     * @memberof MenuItem
     */
    internalProps: string[];
    /** 检查icon参数值是否为文件路径 */
    isImgPath(raw: string): boolean;
    renderMenuItem(): React.JSX.Element;
    render(): React.JSX.Element | null;
}
declare const _default: {
    new (props: Omit<MenuItemProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<MenuItemProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<MenuItemProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<MenuItemProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<MenuItemProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<MenuItemProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<MenuItemProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<MenuItemProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<MenuItemProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<MenuItemProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof MenuItem>;
} & import("hoist-non-react-statics").NonReactStatics<typeof MenuItem, {}> & {
    ComposedComponent: typeof MenuItem;
};
export default _default;

/**
 * @file SubMenu
 * @description 导航子菜单
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { SubMenuProps as RcSubMenuProps } from 'rc-menu';
import { ClassNamesFn, TestIdBuilder } from 'amis-core';
import { MenuContextProps } from './MenuContext';
import type { NavigationItem } from './';
interface MenuItemTitleInfo {
    key: string;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
export interface SubMenuProps extends Omit<NavigationItem, 'children'>, Omit<RcSubMenuProps, 'expandIcon'> {
    depth?: number;
    icon?: string | React.ReactNode;
    children?: React.ReactNode;
    classPrefix: string;
    classnames: ClassNamesFn;
    popupClassName?: string;
    onTitleMouseEnter?: (e: MenuItemTitleInfo) => void;
    onTitleMouseLeave?: (e: MenuItemTitleInfo) => void;
    onTitleClick?: (e: MenuItemTitleInfo) => void;
    renderLink: Function;
    [propName: string]: any;
    testIdBuilder?: TestIdBuilder;
}
export declare class SubMenu extends React.Component<SubMenuProps> {
    static contextType: React.Context<MenuContextProps>;
    /**
     * Menu上下文数据
     *
     * @type {MenuContextProps}
     * @memberof SubMenu
     */
    context: MenuContextProps;
    /**
     * 内部使用的属性
     *
     * @memberof SubMenu
     */
    internalProps: string[];
    handleSubmenuTitleActived({ key, domEvent }: MenuItemTitleInfo): void;
    /** 检查icon参数值是否为文件路径 */
    isImgPath(raw: string): boolean;
    renderSubMenuTitle(): React.JSX.Element;
    render(): React.JSX.Element | null;
}
declare const _default: {
    new (props: Omit<SubMenuProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<SubMenuProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<SubMenuProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<SubMenuProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<SubMenuProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<SubMenuProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<SubMenuProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<SubMenuProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<SubMenuProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<SubMenuProps, keyof import("amis-core").ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof SubMenu>;
} & import("hoist-non-react-statics").NonReactStatics<typeof SubMenu, {}> & {
    ComposedComponent: typeof SubMenu;
};
export default _default;

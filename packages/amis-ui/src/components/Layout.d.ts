/**
 * @file Layout
 * @description 页面布局，支持左边栏、顶部、内容区域布局。
 * @author fex
 *
 * @param 参数说明：
 * * children 会渲染在内容区。
 * * header 头部区域
 * * aside 边栏
 * * asideClassName 边栏附加样式class
 * * footer 页脚
 * * folder 是否收起边栏
 * * asideFixed 边栏是否为固定模式，如果是会用 position:fixed 来定位.
 * * className 附件的样式名
 * * contentClassName 内容区域附加样式名称
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from 'amis-core';
interface LayoutProps {
    header?: boolean | React.ReactNode;
    headerClassName?: string;
    aside?: boolean | React.ReactNode;
    asideClassName: string;
    boxed?: boolean;
    folded?: boolean;
    asideFixed: boolean;
    headerFixed: boolean;
    className?: string;
    contentClassName?: string;
    footer: boolean | React.ReactNode;
    offScreen: boolean;
    classPrefix: string;
    classnames: ClassNamesFn;
    size?: 'sm' | 'base' | 'md' | 'lg';
    children?: React.ReactNode;
    bodyClassName?: string;
    mainClassName?: string;
}
export declare function Layout({ header, headerClassName, aside, asideClassName, children, className, contentClassName, folded, asideFixed, headerFixed, footer, offScreen, size, boxed, classnames: cx, bodyClassName, mainClassName }: LayoutProps): React.JSX.Element;
export declare namespace Layout {
    var defaultProps: {
        asideFixed: boolean;
        asideClassName: string;
        headerFixed: boolean;
        offScreen: boolean;
        footer: boolean;
    };
}
declare const _default: {
    new (props: Pick<Omit<LayoutProps, keyof import("amis-core").ThemeProps>, "folded" | "children" | "headerClassName" | "header" | "size" | "bodyClassName" | "aside" | "contentClassName" | "boxed" | "mainClassName"> & {
        footer?: React.ReactNode;
        asideClassName?: string | undefined;
        offScreen?: boolean | undefined;
        asideFixed?: boolean | undefined;
        headerFixed?: boolean | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<LayoutProps, keyof import("amis-core").ThemeProps>, "folded" | "children" | "headerClassName" | "header" | "size" | "bodyClassName" | "aside" | "contentClassName" | "boxed" | "mainClassName"> & {
            footer?: React.ReactNode;
            asideClassName?: string | undefined;
            offScreen?: boolean | undefined;
            asideFixed?: boolean | undefined;
            headerFixed?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<LayoutProps, keyof import("amis-core").ThemeProps>, "folded" | "children" | "headerClassName" | "header" | "size" | "bodyClassName" | "aside" | "contentClassName" | "boxed" | "mainClassName"> & {
            footer?: React.ReactNode;
            asideClassName?: string | undefined;
            offScreen?: boolean | undefined;
            asideFixed?: boolean | undefined;
            headerFixed?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<LayoutProps, keyof import("amis-core").ThemeProps>, "folded" | "children" | "headerClassName" | "header" | "size" | "bodyClassName" | "aside" | "contentClassName" | "boxed" | "mainClassName"> & {
            footer?: React.ReactNode;
            asideClassName?: string | undefined;
            offScreen?: boolean | undefined;
            asideFixed?: boolean | undefined;
            headerFixed?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<LayoutProps, keyof import("amis-core").ThemeProps>, "folded" | "children" | "headerClassName" | "header" | "size" | "bodyClassName" | "aside" | "contentClassName" | "boxed" | "mainClassName"> & {
            footer?: React.ReactNode;
            asideClassName?: string | undefined;
            offScreen?: boolean | undefined;
            asideFixed?: boolean | undefined;
            headerFixed?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<LayoutProps, keyof import("amis-core").ThemeProps>, "folded" | "children" | "headerClassName" | "header" | "size" | "bodyClassName" | "aside" | "contentClassName" | "boxed" | "mainClassName"> & {
            footer?: React.ReactNode;
            asideClassName?: string | undefined;
            offScreen?: boolean | undefined;
            asideFixed?: boolean | undefined;
            headerFixed?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<LayoutProps, keyof import("amis-core").ThemeProps>, "folded" | "children" | "headerClassName" | "header" | "size" | "bodyClassName" | "aside" | "contentClassName" | "boxed" | "mainClassName"> & {
            footer?: React.ReactNode;
            asideClassName?: string | undefined;
            offScreen?: boolean | undefined;
            asideFixed?: boolean | undefined;
            headerFixed?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<LayoutProps, keyof import("amis-core").ThemeProps>, "folded" | "children" | "headerClassName" | "header" | "size" | "bodyClassName" | "aside" | "contentClassName" | "boxed" | "mainClassName"> & {
            footer?: React.ReactNode;
            asideClassName?: string | undefined;
            offScreen?: boolean | undefined;
            asideFixed?: boolean | undefined;
            headerFixed?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<LayoutProps, keyof import("amis-core").ThemeProps>, "folded" | "children" | "headerClassName" | "header" | "size" | "bodyClassName" | "aside" | "contentClassName" | "boxed" | "mainClassName"> & {
            footer?: React.ReactNode;
            asideClassName?: string | undefined;
            offScreen?: boolean | undefined;
            asideFixed?: boolean | undefined;
            headerFixed?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<LayoutProps, keyof import("amis-core").ThemeProps>, "folded" | "children" | "headerClassName" | "header" | "size" | "bodyClassName" | "aside" | "contentClassName" | "boxed" | "mainClassName"> & {
            footer?: React.ReactNode;
            asideClassName?: string | undefined;
            offScreen?: boolean | undefined;
            asideFixed?: boolean | undefined;
            headerFixed?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Layout>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Layout, {}> & {
    ComposedComponent: typeof Layout;
};
export default _default;

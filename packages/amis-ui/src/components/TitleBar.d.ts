/**
 * @file TitleBar。
 * @description
 * @author fex
 * @param 参数说明：
 * title 标题内容
 * titleClassName 标题类名，默认为 bg-light lter b-b
 * right 可以传入右侧节点, 当有右侧时自动采用 hbox 来左右布局。
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from 'amis-core';
interface TitleBarProps {
    className?: string;
    title: React.ReactNode;
    titleClassName?: string;
    right?: boolean;
    classPrefix: string;
    classnames: ClassNamesFn;
}
export declare class TitleBar extends React.PureComponent<TitleBarProps, any> {
    static defaultProps: {
        className: string;
        title: string;
        titleClassName: string;
        right: boolean;
    };
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<TitleBarProps, keyof import("amis-core").ThemeProps>, never> & {
        right?: boolean | undefined;
        title?: React.ReactNode;
        titleClassName?: string | undefined;
    } & {
        className?: string | undefined;
    } & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TitleBarProps, keyof import("amis-core").ThemeProps>, never> & {
            right?: boolean | undefined;
            title?: React.ReactNode;
            titleClassName?: string | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TitleBarProps, keyof import("amis-core").ThemeProps>, never> & {
            right?: boolean | undefined;
            title?: React.ReactNode;
            titleClassName?: string | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TitleBarProps, keyof import("amis-core").ThemeProps>, never> & {
            right?: boolean | undefined;
            title?: React.ReactNode;
            titleClassName?: string | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TitleBarProps, keyof import("amis-core").ThemeProps>, never> & {
            right?: boolean | undefined;
            title?: React.ReactNode;
            titleClassName?: string | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TitleBarProps, keyof import("amis-core").ThemeProps>, never> & {
            right?: boolean | undefined;
            title?: React.ReactNode;
            titleClassName?: string | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TitleBarProps, keyof import("amis-core").ThemeProps>, never> & {
            right?: boolean | undefined;
            title?: React.ReactNode;
            titleClassName?: string | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TitleBarProps, keyof import("amis-core").ThemeProps>, never> & {
            right?: boolean | undefined;
            title?: React.ReactNode;
            titleClassName?: string | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TitleBarProps, keyof import("amis-core").ThemeProps>, never> & {
            right?: boolean | undefined;
            title?: React.ReactNode;
            titleClassName?: string | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TitleBarProps, keyof import("amis-core").ThemeProps>, never> & {
            right?: boolean | undefined;
            title?: React.ReactNode;
            titleClassName?: string | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof TitleBar>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TitleBar, {}> & {
    ComposedComponent: typeof TitleBar;
};
export default _default;

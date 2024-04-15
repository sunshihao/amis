/**
 * @file 角标组件
 */
import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { ClassNamesFn } from 'amis-core';
/**
 * Badge 角标。
 * 文档：https://aisuda.bce.baidu.com/amis/zh-CN/components/badge
 */
export interface BadgeObject {
    className?: string;
    /**
     * 文本内容
     */
    text?: string | number;
    /**
     * 大小
     */
    size?: number;
    /**
     * 角标类型
     */
    mode?: 'text' | 'dot' | 'ribbon';
    /**
     * 角标位置，相对于position的位置进行偏移
     */
    offset?: [number | string, number | string];
    /**
     * 角标位置
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    /**
     * 封顶的数字值
     */
    overflowCount?: number;
    /**
     * 动态控制是否显示
     */
    visibleOn?: string;
    /**
     * 是否显示动画
     */
    animation?: boolean;
    /**
     * 角标的自定义样式
     */
    style?: {
        [propName: string]: any;
    };
    /**
     * 提示类型
     */
    level?: 'info' | 'warning' | 'success' | 'danger' | string;
}
export interface BadgeProps {
    badge?: BadgeObject;
    classnames: ClassNamesFn;
    data?: any;
    children?: React.ReactNode | Array<React.ReactNode>;
}
export declare class Badge extends React.Component<BadgeProps, object> {
    static propsList: Array<string>;
    constructor(props: BadgeProps);
    renderBadge(text: any, size: number, position: any, offsetStyle: any, sizeStyle: any, animationElement: any): React.JSX.Element | null;
    render(): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
}
export declare function withBadge<P extends object>(Component: React.ComponentType<P>): {
    new (props: P & BadgeProps): {
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & BadgeProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & BadgeProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & BadgeProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & BadgeProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & BadgeProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & BadgeProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & BadgeProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & BadgeProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & BadgeProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: P & BadgeProps, context: any): {
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & BadgeProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & BadgeProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & BadgeProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & BadgeProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & BadgeProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & BadgeProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & BadgeProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & BadgeProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & BadgeProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType?: React.Context<any> | undefined;
} & hoistNonReactStatic.NonReactStatics<React.ComponentType<P>, {}>;

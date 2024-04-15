/**
 * @file OverflowTpl
 * @desc 文字提示组件，会基于内部文字是否触发ellipsis，动态展示tooltip提示, 默认使用子节点文本作为tooltip内容
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import type { ThemeProps } from 'amis-core';
import type { TooltipWrapperProps } from './TooltipWrapper';
export interface OverflowTplProps extends ThemeProps {
    className?: string;
    /**
     * tooltip相关配置
     */
    tooltip?: TooltipWrapperProps['tooltip'];
    /**
     * 是否使用行内标签，默认为 true，使用 span 标签，否则使用 div 标签
     */
    inline?: boolean;
    /**
     * 目标元素的selector，通常不需要指定
     */
    targetSelector?: string;
    /**
     * 内部节点
     */
    children?: React.ReactNode | React.ReactNode[];
}
declare const _default: {
    new (props: Omit<OverflowTplProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<OverflowTplProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<OverflowTplProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<OverflowTplProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<OverflowTplProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<OverflowTplProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<OverflowTplProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<OverflowTplProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<OverflowTplProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<OverflowTplProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<React.FC<OverflowTplProps>>;
} & import("hoist-non-react-statics").NonReactStatics<React.FC<OverflowTplProps>, {}> & {
    ComposedComponent: React.FC<OverflowTplProps>;
};
export default _default;

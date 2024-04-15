/**
 * @file PullRefresh.tsx
 * @description 下拉刷新
 * @author hongyang03
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from 'amis-core';
import { TranslateFn } from 'amis-core';
export interface PullRefreshProps {
    classnames: ClassNamesFn;
    classPrefix: string;
    translate: TranslateFn;
    disabled?: boolean;
    pullingText?: string;
    loosingText?: string;
    loadingText?: string;
    successText?: string;
    onRefresh?: () => void;
    loading?: boolean;
    successDuration?: number;
    loadingDuration?: number;
    children?: React.ReactNode | Array<React.ReactNode>;
}
type statusText = 'normal' | 'pulling' | 'loosing' | 'success' | 'loading';
export interface PullRefreshState {
    status: statusText;
    offsetY: number;
}
declare const _default: {
    new (props: Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<React.ForwardRefExoticComponent<PullRefreshProps & React.RefAttributes<{}>>>;
} & import("hoist-non-react-statics").NonReactStatics<React.ForwardRefExoticComponent<PullRefreshProps & React.RefAttributes<{}>>, {}> & {
    ComposedComponent: React.ForwardRefExoticComponent<PullRefreshProps & React.RefAttributes<{}>>;
};
export default _default;

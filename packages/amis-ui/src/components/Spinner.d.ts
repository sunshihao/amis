/**
 * @file Spinner
 * @description
 * @author fex
 * @date 2017-11-07
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
export interface SpinnerProps extends ThemeProps, SpinnerExtraProps {
    show?: boolean;
    className?: string;
    spinnerClassName?: string;
    /**
     * @deprecated 已废弃，没有作用
     */
    mode?: string;
    size?: 'sm' | 'lg' | '';
    icon?: string | React.ReactNode;
    tip?: string;
    tipPlacement?: 'top' | 'right' | 'bottom' | 'left';
    delay?: number;
    overlay?: boolean;
    /** 是否处于禁用状态 */
    disabled?: boolean;
}
export interface SpinnerExtraProps {
    loadingConfig?: {
        root?: string;
        show?: boolean;
    };
}
export declare class Spinner extends React.Component<SpinnerProps, {
    spinning: boolean;
    showMarker: boolean;
    idDarkBg: boolean;
}> {
    static defaultProps: {
        show: boolean;
        className: string;
        spinnerClassName: string;
        size: "";
        icon: string;
        tip: string;
        tipPlacement: "bottom";
        delay: number;
        overlay: boolean;
        loadingConfig: {};
        disabled: boolean;
    };
    state: {
        spinning: boolean;
        showMarker: boolean;
        idDarkBg: boolean;
    };
    parent: HTMLElement | null;
    /**
     * 解决同级（same parent node） spinner 的 show 不全为 true 时
     * 标记 loading 是由当前组件触发的
     */
    loadingTriggered: boolean;
    spinnerRef: (dom: HTMLElement) => void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * 监控着 spinningContainers 的变化
     */
    loadingChecker: import("mobx").IReactionDisposer;
    renderBody(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & {
        icon?: React.ReactNode;
        disabled?: boolean | undefined;
        loadingConfig?: {
            root?: string | undefined;
            show?: boolean | undefined;
        } | undefined;
        size?: "" | "sm" | "lg" | undefined;
        overlay?: boolean | undefined;
        show?: boolean | undefined;
        delay?: number | undefined;
        spinnerClassName?: string | undefined;
        tip?: string | undefined;
        tipPlacement?: "right" | "left" | "top" | "bottom" | undefined;
    } & {
        className?: string | undefined;
    } & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & {
            icon?: React.ReactNode;
            disabled?: boolean | undefined;
            loadingConfig?: {
                root?: string | undefined;
                show?: boolean | undefined;
            } | undefined;
            size?: "" | "sm" | "lg" | undefined;
            overlay?: boolean | undefined;
            show?: boolean | undefined;
            delay?: number | undefined;
            spinnerClassName?: string | undefined;
            tip?: string | undefined;
            tipPlacement?: "right" | "left" | "top" | "bottom" | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & {
            icon?: React.ReactNode;
            disabled?: boolean | undefined;
            loadingConfig?: {
                root?: string | undefined;
                show?: boolean | undefined;
            } | undefined;
            size?: "" | "sm" | "lg" | undefined;
            overlay?: boolean | undefined;
            show?: boolean | undefined;
            delay?: number | undefined;
            spinnerClassName?: string | undefined;
            tip?: string | undefined;
            tipPlacement?: "right" | "left" | "top" | "bottom" | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & {
            icon?: React.ReactNode;
            disabled?: boolean | undefined;
            loadingConfig?: {
                root?: string | undefined;
                show?: boolean | undefined;
            } | undefined;
            size?: "" | "sm" | "lg" | undefined;
            overlay?: boolean | undefined;
            show?: boolean | undefined;
            delay?: number | undefined;
            spinnerClassName?: string | undefined;
            tip?: string | undefined;
            tipPlacement?: "right" | "left" | "top" | "bottom" | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & {
            icon?: React.ReactNode;
            disabled?: boolean | undefined;
            loadingConfig?: {
                root?: string | undefined;
                show?: boolean | undefined;
            } | undefined;
            size?: "" | "sm" | "lg" | undefined;
            overlay?: boolean | undefined;
            show?: boolean | undefined;
            delay?: number | undefined;
            spinnerClassName?: string | undefined;
            tip?: string | undefined;
            tipPlacement?: "right" | "left" | "top" | "bottom" | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & {
            icon?: React.ReactNode;
            disabled?: boolean | undefined;
            loadingConfig?: {
                root?: string | undefined;
                show?: boolean | undefined;
            } | undefined;
            size?: "" | "sm" | "lg" | undefined;
            overlay?: boolean | undefined;
            show?: boolean | undefined;
            delay?: number | undefined;
            spinnerClassName?: string | undefined;
            tip?: string | undefined;
            tipPlacement?: "right" | "left" | "top" | "bottom" | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & {
            icon?: React.ReactNode;
            disabled?: boolean | undefined;
            loadingConfig?: {
                root?: string | undefined;
                show?: boolean | undefined;
            } | undefined;
            size?: "" | "sm" | "lg" | undefined;
            overlay?: boolean | undefined;
            show?: boolean | undefined;
            delay?: number | undefined;
            spinnerClassName?: string | undefined;
            tip?: string | undefined;
            tipPlacement?: "right" | "left" | "top" | "bottom" | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & {
            icon?: React.ReactNode;
            disabled?: boolean | undefined;
            loadingConfig?: {
                root?: string | undefined;
                show?: boolean | undefined;
            } | undefined;
            size?: "" | "sm" | "lg" | undefined;
            overlay?: boolean | undefined;
            show?: boolean | undefined;
            delay?: number | undefined;
            spinnerClassName?: string | undefined;
            tip?: string | undefined;
            tipPlacement?: "right" | "left" | "top" | "bottom" | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & {
            icon?: React.ReactNode;
            disabled?: boolean | undefined;
            loadingConfig?: {
                root?: string | undefined;
                show?: boolean | undefined;
            } | undefined;
            size?: "" | "sm" | "lg" | undefined;
            overlay?: boolean | undefined;
            show?: boolean | undefined;
            delay?: number | undefined;
            spinnerClassName?: string | undefined;
            tip?: string | undefined;
            tipPlacement?: "right" | "left" | "top" | "bottom" | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & {
            icon?: React.ReactNode;
            disabled?: boolean | undefined;
            loadingConfig?: {
                root?: string | undefined;
                show?: boolean | undefined;
            } | undefined;
            size?: "" | "sm" | "lg" | undefined;
            overlay?: boolean | undefined;
            show?: boolean | undefined;
            delay?: number | undefined;
            spinnerClassName?: string | undefined;
            tip?: string | undefined;
            tipPlacement?: "right" | "left" | "top" | "bottom" | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Spinner>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Spinner, {}> & {
    ComposedComponent: typeof Spinner;
};
export default _default;

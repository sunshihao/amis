/**
 * @file Alert2
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from 'amis-core';
export interface AlertProps {
    level: 'danger' | 'info' | 'success' | 'warning';
    title?: string;
    className?: string;
    style?: any;
    showCloseButton: boolean;
    showIcon?: boolean;
    icon?: string | React.ReactNode;
    iconClassName?: string;
    closeButtonClassName?: string;
    onClose?: () => void;
    classnames: ClassNamesFn;
    classPrefix: string;
    children?: React.ReactNode | Array<React.ReactNode>;
    actions?: React.ReactNode | React.ReactNode[];
}
export interface AlertState {
    show: boolean;
}
export declare class Alert extends React.Component<AlertProps, AlertState> {
    static defaultProps: Pick<AlertProps, 'level' | 'className' | 'showCloseButton'>;
    static propsList: Array<string>;
    constructor(props: AlertProps);
    handleClick(): void;
    render(): React.JSX.Element | null;
}
declare const _default: {
    new (props: Pick<Omit<AlertProps, keyof import("amis-core").ThemeProps>, "icon" | "children" | "title" | "actions" | "onClose" | "iconClassName" | "showIcon" | "closeButtonClassName"> & {
        level?: "info" | "success" | "warning" | "danger" | undefined;
        showCloseButton?: boolean | undefined;
    } & {
        className?: string | undefined;
    } & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AlertProps, keyof import("amis-core").ThemeProps>, "icon" | "children" | "title" | "actions" | "onClose" | "iconClassName" | "showIcon" | "closeButtonClassName"> & {
            level?: "info" | "success" | "warning" | "danger" | undefined;
            showCloseButton?: boolean | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<AlertProps, keyof import("amis-core").ThemeProps>, "icon" | "children" | "title" | "actions" | "onClose" | "iconClassName" | "showIcon" | "closeButtonClassName"> & {
            level?: "info" | "success" | "warning" | "danger" | undefined;
            showCloseButton?: boolean | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof import("amis-core").ThemeProps>, "icon" | "children" | "title" | "actions" | "onClose" | "iconClassName" | "showIcon" | "closeButtonClassName"> & {
            level?: "info" | "success" | "warning" | "danger" | undefined;
            showCloseButton?: boolean | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AlertProps, keyof import("amis-core").ThemeProps>, "icon" | "children" | "title" | "actions" | "onClose" | "iconClassName" | "showIcon" | "closeButtonClassName"> & {
            level?: "info" | "success" | "warning" | "danger" | undefined;
            showCloseButton?: boolean | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<AlertProps, keyof import("amis-core").ThemeProps>, "icon" | "children" | "title" | "actions" | "onClose" | "iconClassName" | "showIcon" | "closeButtonClassName"> & {
            level?: "info" | "success" | "warning" | "danger" | undefined;
            showCloseButton?: boolean | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AlertProps, keyof import("amis-core").ThemeProps>, "icon" | "children" | "title" | "actions" | "onClose" | "iconClassName" | "showIcon" | "closeButtonClassName"> & {
            level?: "info" | "success" | "warning" | "danger" | undefined;
            showCloseButton?: boolean | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AlertProps, keyof import("amis-core").ThemeProps>, "icon" | "children" | "title" | "actions" | "onClose" | "iconClassName" | "showIcon" | "closeButtonClassName"> & {
            level?: "info" | "success" | "warning" | "danger" | undefined;
            showCloseButton?: boolean | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof import("amis-core").ThemeProps>, "icon" | "children" | "title" | "actions" | "onClose" | "iconClassName" | "showIcon" | "closeButtonClassName"> & {
            level?: "info" | "success" | "warning" | "danger" | undefined;
            showCloseButton?: boolean | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof import("amis-core").ThemeProps>, "icon" | "children" | "title" | "actions" | "onClose" | "iconClassName" | "showIcon" | "closeButtonClassName"> & {
            level?: "info" | "success" | "warning" | "danger" | undefined;
            showCloseButton?: boolean | undefined;
        } & {
            className?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Alert>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Alert, {}> & {
    ComposedComponent: typeof Alert;
};
export default _default;

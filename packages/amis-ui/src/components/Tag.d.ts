/**
 * @file Tag
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
export interface TagProps extends ThemeProps {
    style: React.CSSProperties;
    color?: string;
    label?: string | React.ReactNode;
    displayMode?: 'normal' | 'rounded' | 'status';
    icon?: string | React.ReactNode;
    closable?: boolean;
    disabled?: boolean;
    closeIcon?: string | React.ReactNode;
    onClose?: (e: React.MouseEvent) => void;
    onClick?: (e: React.MouseEvent) => void;
    onMouseEnter?: (e: React.MouseEvent) => void;
    onMouseLeave?: (e: React.MouseEvent) => void;
    children?: React.ReactNode | Array<React.ReactNode>;
}
export interface CheckableTagProps extends TagProps {
    onClick?: (e: React.MouseEvent) => void;
    onChange?: (checked: boolean) => void;
    checked?: boolean;
}
export type TagLevel = 'inactive' | 'active' | 'success' | 'processing' | 'error' | 'warning';
export declare class Tag extends React.Component<TagProps> {
    static defaultProps: Partial<TagProps>;
    renderCloseIcon(): React.JSX.Element | null;
    handleClose(e: React.MouseEvent<HTMLElement>): void;
    handleClick(e: React.MouseEvent<HTMLElement>): void;
    handleMouseEnter(e: React.MouseEvent<any>): void;
    handleMouseLeave(e: React.MouseEvent<any>): void;
    render(): React.JSX.Element;
}
declare class CheckableTagComp extends React.Component<CheckableTagProps> {
    handleClick(e: React.MouseEvent): void;
    render(): React.JSX.Element;
}
export declare const CheckableTag: {
    new (props: Omit<CheckableTagProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof CheckableTagComp>;
} & import("hoist-non-react-statics").NonReactStatics<typeof CheckableTagComp, {}> & {
    ComposedComponent: typeof CheckableTagComp;
};
declare const _default: {
    new (props: Pick<Omit<TagProps, keyof ThemeProps>, never> & {
        icon?: React.ReactNode;
        label?: React.ReactNode;
        disabled?: boolean | undefined;
        children?: React.ReactNode | React.ReactNode[];
        color?: string | undefined;
        onClick?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
        onMouseEnter?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
        onMouseLeave?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
        onClose?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
        displayMode?: "status" | "normal" | "rounded" | undefined;
        closable?: boolean | undefined;
        closeIcon?: React.ReactNode;
    } & {
        style?: React.CSSProperties | undefined;
        className?: string | undefined;
        theme?: string | undefined;
        mobileUI?: boolean | undefined;
        classnames?: import("amis-core").ClassNamesFn | undefined;
        classPrefix?: string | undefined;
    } & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & {
            icon?: React.ReactNode;
            label?: React.ReactNode;
            disabled?: boolean | undefined;
            children?: React.ReactNode | React.ReactNode[];
            color?: string | undefined;
            onClick?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseEnter?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseLeave?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onClose?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            displayMode?: "status" | "normal" | "rounded" | undefined;
            closable?: boolean | undefined;
            closeIcon?: React.ReactNode;
        } & {
            style?: React.CSSProperties | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: import("amis-core").ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & {
            icon?: React.ReactNode;
            label?: React.ReactNode;
            disabled?: boolean | undefined;
            children?: React.ReactNode | React.ReactNode[];
            color?: string | undefined;
            onClick?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseEnter?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseLeave?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onClose?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            displayMode?: "status" | "normal" | "rounded" | undefined;
            closable?: boolean | undefined;
            closeIcon?: React.ReactNode;
        } & {
            style?: React.CSSProperties | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: import("amis-core").ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & {
            icon?: React.ReactNode;
            label?: React.ReactNode;
            disabled?: boolean | undefined;
            children?: React.ReactNode | React.ReactNode[];
            color?: string | undefined;
            onClick?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseEnter?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseLeave?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onClose?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            displayMode?: "status" | "normal" | "rounded" | undefined;
            closable?: boolean | undefined;
            closeIcon?: React.ReactNode;
        } & {
            style?: React.CSSProperties | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: import("amis-core").ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & {
            icon?: React.ReactNode;
            label?: React.ReactNode;
            disabled?: boolean | undefined;
            children?: React.ReactNode | React.ReactNode[];
            color?: string | undefined;
            onClick?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseEnter?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseLeave?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onClose?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            displayMode?: "status" | "normal" | "rounded" | undefined;
            closable?: boolean | undefined;
            closeIcon?: React.ReactNode;
        } & {
            style?: React.CSSProperties | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: import("amis-core").ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & {
            icon?: React.ReactNode;
            label?: React.ReactNode;
            disabled?: boolean | undefined;
            children?: React.ReactNode | React.ReactNode[];
            color?: string | undefined;
            onClick?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseEnter?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseLeave?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onClose?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            displayMode?: "status" | "normal" | "rounded" | undefined;
            closable?: boolean | undefined;
            closeIcon?: React.ReactNode;
        } & {
            style?: React.CSSProperties | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: import("amis-core").ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & {
            icon?: React.ReactNode;
            label?: React.ReactNode;
            disabled?: boolean | undefined;
            children?: React.ReactNode | React.ReactNode[];
            color?: string | undefined;
            onClick?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseEnter?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseLeave?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onClose?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            displayMode?: "status" | "normal" | "rounded" | undefined;
            closable?: boolean | undefined;
            closeIcon?: React.ReactNode;
        } & {
            style?: React.CSSProperties | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: import("amis-core").ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & {
            icon?: React.ReactNode;
            label?: React.ReactNode;
            disabled?: boolean | undefined;
            children?: React.ReactNode | React.ReactNode[];
            color?: string | undefined;
            onClick?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseEnter?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseLeave?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onClose?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            displayMode?: "status" | "normal" | "rounded" | undefined;
            closable?: boolean | undefined;
            closeIcon?: React.ReactNode;
        } & {
            style?: React.CSSProperties | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: import("amis-core").ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & {
            icon?: React.ReactNode;
            label?: React.ReactNode;
            disabled?: boolean | undefined;
            children?: React.ReactNode | React.ReactNode[];
            color?: string | undefined;
            onClick?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseEnter?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseLeave?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onClose?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            displayMode?: "status" | "normal" | "rounded" | undefined;
            closable?: boolean | undefined;
            closeIcon?: React.ReactNode;
        } & {
            style?: React.CSSProperties | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: import("amis-core").ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & {
            icon?: React.ReactNode;
            label?: React.ReactNode;
            disabled?: boolean | undefined;
            children?: React.ReactNode | React.ReactNode[];
            color?: string | undefined;
            onClick?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseEnter?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onMouseLeave?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            onClose?: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
            displayMode?: "status" | "normal" | "rounded" | undefined;
            closable?: boolean | undefined;
            closeIcon?: React.ReactNode;
        } & {
            style?: React.CSSProperties | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: import("amis-core").ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Tag>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Tag, {}> & {
    ComposedComponent: typeof Tag;
};
export default _default;

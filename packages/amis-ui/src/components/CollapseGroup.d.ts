/**
 * @file CollapseGroup
 * @description 折叠面板group
 * @author hongyang03
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
export interface CollapseItem {
    [propName: string]: any;
}
import { ClassNamesFn } from 'amis-core';
import type { SchemaNode, ThemeProps } from 'amis-core';
export interface CollapseGroupProps extends ThemeProps {
    defaultActiveKey?: Array<string | number | never> | string | number;
    accordion?: boolean;
    expandIcon?: SchemaNode;
    expandIconPosition?: 'left' | 'right';
    body?: Array<React.ReactElement>;
    className?: string;
    style?: any;
    children?: React.ReactNode | Array<React.ReactNode>;
    onCollapseChange?: (activeKeys: Array<string | number>, collapseId: string | number, collapsed: boolean) => void;
}
export interface CollapseGroupState {
    activeKeys: Array<string | number | never>;
}
declare class CollapseGroup extends React.Component<CollapseGroupProps, CollapseGroupState> {
    static defaultProps: Partial<CollapseGroupProps>;
    constructor(props: CollapseGroupProps);
    UNSAFE_componentWillReceiveProps(nextProps: CollapseGroupProps): void;
    updateActiveKey(propsActiveKey: any, isInit?: boolean): void;
    collapseChange(collapseId: string, collapsed: boolean): void;
    getItems: (children: React.ReactNode) => React.ReactNode;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<CollapseGroupProps, keyof ThemeProps>, never> & {
        children?: React.ReactNode | React.ReactNode[];
        body?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        expandIcon?: SchemaNode | undefined;
        defaultActiveKey?: string | number | (string | number)[] | undefined;
        accordion?: boolean | undefined;
        expandIconPosition?: "right" | "left" | undefined;
        onCollapseChange?: ((activeKeys: (string | number)[], collapseId: string | number, collapsed: boolean) => void) | undefined;
    } & {
        style?: any;
        className?: string | undefined;
        theme?: string | undefined;
        mobileUI?: boolean | undefined;
        classnames?: ClassNamesFn | undefined;
        classPrefix?: string | undefined;
    } & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CollapseGroupProps, keyof ThemeProps>, never> & {
            children?: React.ReactNode | React.ReactNode[];
            body?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
            expandIcon?: SchemaNode | undefined;
            defaultActiveKey?: string | number | (string | number)[] | undefined;
            accordion?: boolean | undefined;
            expandIconPosition?: "right" | "left" | undefined;
            onCollapseChange?: ((activeKeys: (string | number)[], collapseId: string | number, collapsed: boolean) => void) | undefined;
        } & {
            style?: any;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<CollapseGroupProps, keyof ThemeProps>, never> & {
            children?: React.ReactNode | React.ReactNode[];
            body?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
            expandIcon?: SchemaNode | undefined;
            defaultActiveKey?: string | number | (string | number)[] | undefined;
            accordion?: boolean | undefined;
            expandIconPosition?: "right" | "left" | undefined;
            onCollapseChange?: ((activeKeys: (string | number)[], collapseId: string | number, collapsed: boolean) => void) | undefined;
        } & {
            style?: any;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CollapseGroupProps, keyof ThemeProps>, never> & {
            children?: React.ReactNode | React.ReactNode[];
            body?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
            expandIcon?: SchemaNode | undefined;
            defaultActiveKey?: string | number | (string | number)[] | undefined;
            accordion?: boolean | undefined;
            expandIconPosition?: "right" | "left" | undefined;
            onCollapseChange?: ((activeKeys: (string | number)[], collapseId: string | number, collapsed: boolean) => void) | undefined;
        } & {
            style?: any;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CollapseGroupProps, keyof ThemeProps>, never> & {
            children?: React.ReactNode | React.ReactNode[];
            body?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
            expandIcon?: SchemaNode | undefined;
            defaultActiveKey?: string | number | (string | number)[] | undefined;
            accordion?: boolean | undefined;
            expandIconPosition?: "right" | "left" | undefined;
            onCollapseChange?: ((activeKeys: (string | number)[], collapseId: string | number, collapsed: boolean) => void) | undefined;
        } & {
            style?: any;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<CollapseGroupProps, keyof ThemeProps>, never> & {
            children?: React.ReactNode | React.ReactNode[];
            body?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
            expandIcon?: SchemaNode | undefined;
            defaultActiveKey?: string | number | (string | number)[] | undefined;
            accordion?: boolean | undefined;
            expandIconPosition?: "right" | "left" | undefined;
            onCollapseChange?: ((activeKeys: (string | number)[], collapseId: string | number, collapsed: boolean) => void) | undefined;
        } & {
            style?: any;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CollapseGroupProps, keyof ThemeProps>, never> & {
            children?: React.ReactNode | React.ReactNode[];
            body?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
            expandIcon?: SchemaNode | undefined;
            defaultActiveKey?: string | number | (string | number)[] | undefined;
            accordion?: boolean | undefined;
            expandIconPosition?: "right" | "left" | undefined;
            onCollapseChange?: ((activeKeys: (string | number)[], collapseId: string | number, collapsed: boolean) => void) | undefined;
        } & {
            style?: any;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CollapseGroupProps, keyof ThemeProps>, never> & {
            children?: React.ReactNode | React.ReactNode[];
            body?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
            expandIcon?: SchemaNode | undefined;
            defaultActiveKey?: string | number | (string | number)[] | undefined;
            accordion?: boolean | undefined;
            expandIconPosition?: "right" | "left" | undefined;
            onCollapseChange?: ((activeKeys: (string | number)[], collapseId: string | number, collapsed: boolean) => void) | undefined;
        } & {
            style?: any;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<CollapseGroupProps, keyof ThemeProps>, never> & {
            children?: React.ReactNode | React.ReactNode[];
            body?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
            expandIcon?: SchemaNode | undefined;
            defaultActiveKey?: string | number | (string | number)[] | undefined;
            accordion?: boolean | undefined;
            expandIconPosition?: "right" | "left" | undefined;
            onCollapseChange?: ((activeKeys: (string | number)[], collapseId: string | number, collapsed: boolean) => void) | undefined;
        } & {
            style?: any;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CollapseGroupProps, keyof ThemeProps>, never> & {
            children?: React.ReactNode | React.ReactNode[];
            body?: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
            expandIcon?: SchemaNode | undefined;
            defaultActiveKey?: string | number | (string | number)[] | undefined;
            accordion?: boolean | undefined;
            expandIconPosition?: "right" | "left" | undefined;
            onCollapseChange?: ((activeKeys: (string | number)[], collapseId: string | number, collapsed: boolean) => void) | undefined;
        } & {
            style?: any;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof CollapseGroup>;
} & import("hoist-non-react-statics").NonReactStatics<typeof CollapseGroup, {}> & {
    ComposedComponent: typeof CollapseGroup;
};
export default _default;

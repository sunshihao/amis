/**
 * @file Html
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from 'amis-core';
export interface HtmlProps {
    className?: string;
    html?: string;
    wrapperComponent?: any;
    inline: boolean;
    classPrefix: string;
    classnames: ClassNamesFn;
    filterHtml?: (input: string) => string;
}
export declare class Html extends React.Component<HtmlProps> {
    static defaultProps: {
        inline: boolean;
    };
    dom: any;
    constructor(props: HtmlProps);
    componentDidUpdate(prevProps: HtmlProps): void;
    htmlRef(dom: any): void;
    _render(): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<HtmlProps, keyof import("amis-core").ThemeProps>, "html" | "wrapperComponent" | "filterHtml"> & {
        inline?: boolean | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<HtmlProps, keyof import("amis-core").ThemeProps>, "html" | "wrapperComponent" | "filterHtml"> & {
            inline?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<HtmlProps, keyof import("amis-core").ThemeProps>, "html" | "wrapperComponent" | "filterHtml"> & {
            inline?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<HtmlProps, keyof import("amis-core").ThemeProps>, "html" | "wrapperComponent" | "filterHtml"> & {
            inline?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<HtmlProps, keyof import("amis-core").ThemeProps>, "html" | "wrapperComponent" | "filterHtml"> & {
            inline?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<HtmlProps, keyof import("amis-core").ThemeProps>, "html" | "wrapperComponent" | "filterHtml"> & {
            inline?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<HtmlProps, keyof import("amis-core").ThemeProps>, "html" | "wrapperComponent" | "filterHtml"> & {
            inline?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<HtmlProps, keyof import("amis-core").ThemeProps>, "html" | "wrapperComponent" | "filterHtml"> & {
            inline?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<HtmlProps, keyof import("amis-core").ThemeProps>, "html" | "wrapperComponent" | "filterHtml"> & {
            inline?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<HtmlProps, keyof import("amis-core").ThemeProps>, "html" | "wrapperComponent" | "filterHtml"> & {
            inline?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Html>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Html, {}> & {
    ComposedComponent: typeof Html;
};
export default _default;

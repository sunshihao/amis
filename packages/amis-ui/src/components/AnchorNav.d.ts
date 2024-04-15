/**
 * @file AnchorNav
 * @description 锚点导航
 * @author hsm-lv
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
import type { Schema } from 'amis-core';
export interface AnchorNavSectionProps extends ThemeProps {
    title?: string;
    name: string | number;
    body?: Schema;
    className?: string;
    style?: any;
    children?: React.ReactNode | Array<React.ReactNode>;
}
declare class AnchorNavSectionComponent extends React.PureComponent<AnchorNavSectionProps> {
    contentDom: any;
    contentRef: (ref: any) => any;
    render(): React.JSX.Element;
}
export declare const AnchorNavSection: {
    new (props: Omit<AnchorNavSectionProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<AnchorNavSectionProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<AnchorNavSectionProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<AnchorNavSectionProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<AnchorNavSectionProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<AnchorNavSectionProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<AnchorNavSectionProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<AnchorNavSectionProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<AnchorNavSectionProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<AnchorNavSectionProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof AnchorNavSectionComponent>;
} & import("hoist-non-react-statics").NonReactStatics<typeof AnchorNavSectionComponent, {}> & {
    ComposedComponent: typeof AnchorNavSectionComponent;
};
export interface AnchorNavProps extends ThemeProps {
    links?: Array<AnchorNavSectionProps>;
    active?: string | number;
    linkClassName?: string;
    sectionClassName?: string;
    sectionRender?: (section: AnchorNavSectionProps, props?: AnchorNavProps) => JSX.Element;
    onSelect?: (key: string | number) => void;
    direction?: 'vertical' | 'horizontal';
    children?: React.ReactNode | Array<React.ReactNode>;
}
interface SectionOffset {
    key: string | number;
    offsetTop: number;
}
export interface AnchorNavState {
    offsetArr: SectionOffset[];
    fromSelect: boolean;
}
export declare class AnchorNav extends React.Component<AnchorNavProps, AnchorNavState> {
    static defaultProps: Pick<AnchorNavProps, 'linkClassName' | 'sectionClassName' | 'direction'>;
    contentDom: React.RefObject<HTMLDivElement>;
    observer: MutationObserver;
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateSectionOffset(parentNode: HTMLElement, inited: boolean): void;
    scrollToNav(e: Event): void;
    scrollToSection(key: string | number): void;
    handleSelect(key: string | number): void;
    fireSelect(key: string | number): void;
    renderLink(link: any, index: number): React.JSX.Element | undefined;
    renderSection(section: any, index: number): React.DetailedReactHTMLElement<any, HTMLElement> | undefined;
    render(): React.JSX.Element | null;
}
declare const _default: {
    new (props: Pick<Omit<AnchorNavProps, keyof ThemeProps>, "children" | "active" | "onSelect" | "links" | "sectionRender"> & {
        direction?: "horizontal" | "vertical" | undefined;
        linkClassName?: string | undefined;
        sectionClassName?: string | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AnchorNavProps, keyof ThemeProps>, "children" | "active" | "onSelect" | "links" | "sectionRender"> & {
            direction?: "horizontal" | "vertical" | undefined;
            linkClassName?: string | undefined;
            sectionClassName?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<AnchorNavProps, keyof ThemeProps>, "children" | "active" | "onSelect" | "links" | "sectionRender"> & {
            direction?: "horizontal" | "vertical" | undefined;
            linkClassName?: string | undefined;
            sectionClassName?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AnchorNavProps, keyof ThemeProps>, "children" | "active" | "onSelect" | "links" | "sectionRender"> & {
            direction?: "horizontal" | "vertical" | undefined;
            linkClassName?: string | undefined;
            sectionClassName?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AnchorNavProps, keyof ThemeProps>, "children" | "active" | "onSelect" | "links" | "sectionRender"> & {
            direction?: "horizontal" | "vertical" | undefined;
            linkClassName?: string | undefined;
            sectionClassName?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<AnchorNavProps, keyof ThemeProps>, "children" | "active" | "onSelect" | "links" | "sectionRender"> & {
            direction?: "horizontal" | "vertical" | undefined;
            linkClassName?: string | undefined;
            sectionClassName?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AnchorNavProps, keyof ThemeProps>, "children" | "active" | "onSelect" | "links" | "sectionRender"> & {
            direction?: "horizontal" | "vertical" | undefined;
            linkClassName?: string | undefined;
            sectionClassName?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AnchorNavProps, keyof ThemeProps>, "children" | "active" | "onSelect" | "links" | "sectionRender"> & {
            direction?: "horizontal" | "vertical" | undefined;
            linkClassName?: string | undefined;
            sectionClassName?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<AnchorNavProps, keyof ThemeProps>, "children" | "active" | "onSelect" | "links" | "sectionRender"> & {
            direction?: "horizontal" | "vertical" | undefined;
            linkClassName?: string | undefined;
            sectionClassName?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AnchorNavProps, keyof ThemeProps>, "children" | "active" | "onSelect" | "links" | "sectionRender"> & {
            direction?: "horizontal" | "vertical" | undefined;
            linkClassName?: string | undefined;
            sectionClassName?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof AnchorNav>;
} & import("hoist-non-react-statics").NonReactStatics<typeof AnchorNav, {}> & {
    ComposedComponent: typeof AnchorNav;
} & {
    AnchorNavSection: typeof AnchorNavSection;
};
export default _default;

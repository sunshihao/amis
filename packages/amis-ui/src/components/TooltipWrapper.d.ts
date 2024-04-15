/**
 * @file TooltipWrapper
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from 'amis-core';
export type Trigger = 'hover' | 'click' | 'focus';
export interface TooltipObject {
    /**
     * 文字提示标题
     */
    title?: string;
    /**
     * 文字提示内容
     */
    content?: string;
    /**
     * 浮层出现位置
     */
    placement?: 'top' | 'right' | 'bottom' | 'left' | 'auto';
    /**
     * 主题样式
     */
    tooltipTheme?: 'light' | 'dark';
    /**
     * 浮层位置相对偏移量
     */
    offset?: [number, number];
    /**
     * 内容区自定义样式
     */
    style?: React.CSSProperties;
    /**
     * 是否可以移入浮层中, 默认true
     */
    enterable?: boolean;
    /**
     * 是否展示浮层指向箭头
     */
    showArrow?: boolean;
    /**
     * 是否禁用提示
     */
    disabled?: boolean;
    /**
     * 浮层延迟显示时间, 单位 ms
     */
    mouseEnterDelay?: number;
    /**
     * 浮层延迟隐藏时间, 单位 ms
     */
    mouseLeaveDelay?: number;
    /**
     * 浮层内容可通过JSX渲染
     */
    children?: () => JSX.Element;
    /**
     * 挂载容器元素
     */
    container?: HTMLElement | (() => HTMLElement | null | undefined);
    /**
     * 浮层触发方式
     */
    trigger?: Trigger | Array<Trigger>;
    /**
     * 是否点击非内容区域关闭提示，默认为true
     */
    rootClose?: boolean;
    /**
     * 文字提示浮层CSS类名
     */
    tooltipClassName?: string;
    /**
     * 文字提示浮层Body的CSS类名
     */
    tooltipBodyClassName?: string;
    /**
     * html xss filter
     */
    filterHtml?: (input: string) => string;
}
export interface TooltipWrapperProps {
    tooltip?: string | TooltipObject;
    classPrefix: string;
    classnames: ClassNamesFn;
    placement: 'top' | 'right' | 'bottom' | 'left' | 'auto';
    container?: HTMLElement | (() => HTMLElement | null | undefined);
    trigger: Trigger | Array<Trigger>;
    rootClose: boolean;
    overlay?: any;
    delay: number;
    tooltipTheme?: string;
    tooltipClassName?: string;
    style?: React.CSSProperties;
    /**
     * 显示&隐藏时触发
     */
    onVisibleChange?: (visible: boolean) => void;
    children?: React.ReactNode | Array<React.ReactNode>;
    disabled?: boolean;
}
interface TooltipWrapperState {
    show?: boolean;
}
export declare class TooltipWrapper extends React.Component<TooltipWrapperProps, TooltipWrapperState> {
    static defaultProps: Pick<TooltipWrapperProps, 'placement' | 'trigger' | 'rootClose' | 'delay'>;
    target: HTMLElement;
    timer: ReturnType<typeof setTimeout>;
    moutned: boolean;
    constructor(props: TooltipWrapperProps);
    componentWillUnmount(): void;
    getTarget(): Element | Text | null;
    show(): void;
    hide(): void;
    getChildProps(): any;
    tooltipMouseEnter: (e: MouseEvent) => void;
    tooltipMouseLeave: (e: MouseEvent) => void;
    handleShow(): void;
    handleHide(): void;
    handleFocus(e: any): void;
    handleBlur(e: any): void;
    handleMouseOver(e: any): void;
    handleMouseOut(e: any): void;
    handleMouseOverOut(handler: Function, e: React.MouseEvent<HTMLElement>, relatedNative: string): void;
    handleClick(e: any): void;
    render(): string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | (React.JSX.Element | null)[] | null | undefined;
}
declare const _default: {
    new (props: Pick<Omit<TooltipWrapperProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "container" | "tooltipClassName" | "overlay" | "tooltip" | "onVisibleChange" | "tooltipTheme"> & {
        trigger?: Trigger | Trigger[] | undefined;
        placement?: "right" | "left" | "top" | "bottom" | "auto" | undefined;
        rootClose?: boolean | undefined;
        delay?: number | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "container" | "tooltipClassName" | "overlay" | "tooltip" | "onVisibleChange" | "tooltipTheme"> & {
            trigger?: Trigger | Trigger[] | undefined;
            placement?: "right" | "left" | "top" | "bottom" | "auto" | undefined;
            rootClose?: boolean | undefined;
            delay?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "container" | "tooltipClassName" | "overlay" | "tooltip" | "onVisibleChange" | "tooltipTheme"> & {
            trigger?: Trigger | Trigger[] | undefined;
            placement?: "right" | "left" | "top" | "bottom" | "auto" | undefined;
            rootClose?: boolean | undefined;
            delay?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "container" | "tooltipClassName" | "overlay" | "tooltip" | "onVisibleChange" | "tooltipTheme"> & {
            trigger?: Trigger | Trigger[] | undefined;
            placement?: "right" | "left" | "top" | "bottom" | "auto" | undefined;
            rootClose?: boolean | undefined;
            delay?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "container" | "tooltipClassName" | "overlay" | "tooltip" | "onVisibleChange" | "tooltipTheme"> & {
            trigger?: Trigger | Trigger[] | undefined;
            placement?: "right" | "left" | "top" | "bottom" | "auto" | undefined;
            rootClose?: boolean | undefined;
            delay?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "container" | "tooltipClassName" | "overlay" | "tooltip" | "onVisibleChange" | "tooltipTheme"> & {
            trigger?: Trigger | Trigger[] | undefined;
            placement?: "right" | "left" | "top" | "bottom" | "auto" | undefined;
            rootClose?: boolean | undefined;
            delay?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "container" | "tooltipClassName" | "overlay" | "tooltip" | "onVisibleChange" | "tooltipTheme"> & {
            trigger?: Trigger | Trigger[] | undefined;
            placement?: "right" | "left" | "top" | "bottom" | "auto" | undefined;
            rootClose?: boolean | undefined;
            delay?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "container" | "tooltipClassName" | "overlay" | "tooltip" | "onVisibleChange" | "tooltipTheme"> & {
            trigger?: Trigger | Trigger[] | undefined;
            placement?: "right" | "left" | "top" | "bottom" | "auto" | undefined;
            rootClose?: boolean | undefined;
            delay?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "container" | "tooltipClassName" | "overlay" | "tooltip" | "onVisibleChange" | "tooltipTheme"> & {
            trigger?: Trigger | Trigger[] | undefined;
            placement?: "right" | "left" | "top" | "bottom" | "auto" | undefined;
            rootClose?: boolean | undefined;
            delay?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "container" | "tooltipClassName" | "overlay" | "tooltip" | "onVisibleChange" | "tooltipTheme"> & {
            trigger?: Trigger | Trigger[] | undefined;
            placement?: "right" | "left" | "top" | "bottom" | "auto" | undefined;
            rootClose?: boolean | undefined;
            delay?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof TooltipWrapper>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TooltipWrapper, {}> & {
    ComposedComponent: typeof TooltipWrapper;
};
export default _default;

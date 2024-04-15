/**
 * @file Drawer
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from 'amis-core';
type DrawerPosition = 'top' | 'right' | 'bottom' | 'left';
export interface DrawerProps {
    className?: string;
    bodyClassName?: string;
    size: any;
    overlay: boolean;
    onHide: (e: any) => void;
    closeOnEsc?: boolean;
    container: any;
    show?: boolean;
    showCloseButton?: boolean;
    width?: number | string;
    height?: number | string;
    position: DrawerPosition;
    disabled?: boolean;
    closeOnOutside?: boolean;
    classPrefix: string;
    resizable?: boolean;
    classnames: ClassNamesFn;
    children?: React.ReactNode | Array<React.ReactNode>;
    onExited?: () => void;
    onEntered?: () => void;
    drawerClassName?: string;
    drawerMaskClassName?: string;
}
export interface DrawerState {
}
export declare class Drawer extends React.Component<DrawerProps, DrawerState> {
    static defaultProps: Pick<DrawerProps, 'container' | 'position' | 'size' | 'overlay' | 'showCloseButton'>;
    modalDom: HTMLElement;
    contentDom: HTMLElement;
    isRootClosed: boolean;
    resizer: React.RefObject<HTMLDivElement>;
    resizeCoord: number;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DrawerProps): void;
    componentWillUnmount(): void;
    contentRef: (ref: any) => any;
    handleEnter: () => void;
    handleEntered: () => void;
    handleExited: () => void;
    modalRef: (ref: any) => void;
    handleRootMouseDownCapture(e: MouseEvent): void;
    handleRootMouseUpCapture(e: MouseEvent): void;
    handleRootMouseUp(e: MouseEvent): void;
    getDrawerStyle(): {
        width?: string | number | undefined;
        height?: string | number | undefined;
    };
    resizeMouseDown(e: React.MouseEvent<any>): void;
    bindResize(e: any): void;
    removeResize(): void;
    renderResizeCtrl(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<DrawerProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "resizable" | "bodyClassName" | "height" | "show" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "drawerClassName" | "drawerMaskClassName"> & {
        size?: any;
        container?: any;
        overlay?: boolean | undefined;
        position?: DrawerPosition | undefined;
        showCloseButton?: boolean | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DrawerProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "resizable" | "bodyClassName" | "height" | "show" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "drawerClassName" | "drawerMaskClassName"> & {
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
            position?: DrawerPosition | undefined;
            showCloseButton?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<DrawerProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "resizable" | "bodyClassName" | "height" | "show" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "drawerClassName" | "drawerMaskClassName"> & {
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
            position?: DrawerPosition | undefined;
            showCloseButton?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DrawerProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "resizable" | "bodyClassName" | "height" | "show" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "drawerClassName" | "drawerMaskClassName"> & {
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
            position?: DrawerPosition | undefined;
            showCloseButton?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DrawerProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "resizable" | "bodyClassName" | "height" | "show" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "drawerClassName" | "drawerMaskClassName"> & {
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
            position?: DrawerPosition | undefined;
            showCloseButton?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<DrawerProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "resizable" | "bodyClassName" | "height" | "show" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "drawerClassName" | "drawerMaskClassName"> & {
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
            position?: DrawerPosition | undefined;
            showCloseButton?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DrawerProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "resizable" | "bodyClassName" | "height" | "show" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "drawerClassName" | "drawerMaskClassName"> & {
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
            position?: DrawerPosition | undefined;
            showCloseButton?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DrawerProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "resizable" | "bodyClassName" | "height" | "show" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "drawerClassName" | "drawerMaskClassName"> & {
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
            position?: DrawerPosition | undefined;
            showCloseButton?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<DrawerProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "resizable" | "bodyClassName" | "height" | "show" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "drawerClassName" | "drawerMaskClassName"> & {
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
            position?: DrawerPosition | undefined;
            showCloseButton?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DrawerProps, keyof import("amis-core").ThemeProps>, "disabled" | "children" | "resizable" | "bodyClassName" | "height" | "show" | "closeOnOutside" | "closeOnEsc" | "width" | "onHide" | "onEntered" | "onExited" | "drawerClassName" | "drawerMaskClassName"> & {
            size?: any;
            container?: any;
            overlay?: boolean | undefined;
            position?: DrawerPosition | undefined;
            showCloseButton?: boolean | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Drawer>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Drawer, {}> & {
    ComposedComponent: typeof Drawer;
};
export default _default;

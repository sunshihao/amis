/// <reference types="hoist-non-react-statics" />
import { ClassNamesFn } from 'amis-core';
import React from 'react';
import type { DebouncedFunc } from 'lodash';
interface ContextMenuProps {
    className?: string;
    classPrefix: string;
    classnames: ClassNamesFn;
    container?: HTMLElement | null | (() => HTMLElement);
}
export type MenuItem = {
    id?: string;
    label: string;
    icon?: string;
    disabled?: boolean;
    children?: Array<MenuItem | MenuDivider>;
    data?: any;
    className?: string;
    onSelect?: (data: any) => void;
    onHighlight?: (isHiglight: boolean, data: any) => void;
};
export type MenuDivider = '|';
interface ContextMenuState {
    isOpened: boolean;
    menus: Array<MenuItem | MenuDivider> | (() => JSX.Element);
    x: number;
    y: number;
    cursorX: number;
    cursorY: number;
    align?: 'left' | 'right';
    onClose?: (ctx: ContextMenu) => void;
    contentClassName?: string;
}
export declare class ContextMenu extends React.Component<ContextMenuProps, ContextMenuState> {
    static instance: any;
    debounceCalculatePosition: DebouncedFunc<(menu: HTMLElement) => void>;
    static getInstance(): Promise<any>;
    state: ContextMenuState;
    menuRef: React.RefObject<HTMLDivElement>;
    contentRef: React.RefObject<HTMLDivElement>;
    originInstance: this | null;
    prevInfo: {
        x: number;
        y: number;
    } | null;
    unmount: boolean;
    menuEntered: boolean;
    constructor(props: ContextMenuProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    openContextMenus(info: {
        x: number;
        y: number;
    }, menus: Array<MenuItem>, onClose?: (ctx: ContextMenu) => void, options?: {
        contentClassName?: string;
    }): void;
    close(): void;
    handleOutClick(e: Event): void;
    handleClick(item: MenuItem): void;
    handleKeyDown(e: KeyboardEvent): void;
    handleMouseEnter(item: MenuItem): void;
    handleMouseLeave(item: MenuItem): void;
    resizeObserver: null | ResizeObserver;
    handleEnter(menu: HTMLElement): void;
    handleEntered(menu: HTMLElement): void;
    autoCalculatePosition(menu: HTMLElement): void;
    handleSelfContextMenu(e: React.MouseEvent): void;
    renderMenus(menus: Array<MenuItem | MenuDivider>): React.JSX.Element[];
    render(): React.JSX.Element;
}
export declare const ThemedContextMenu: {
    new (props: Omit<ContextMenuProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<ContextMenuProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<ContextMenuProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<ContextMenuProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<ContextMenuProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<ContextMenuProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<ContextMenuProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<ContextMenuProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<ContextMenuProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<ContextMenuProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof ContextMenu>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ContextMenu, {}> & {
    ComposedComponent: typeof ContextMenu;
};
export default ThemedContextMenu;
export declare function openContextMenus(info: Event | {
    x: number;
    y: number;
}, menus: Array<MenuItem | MenuDivider> | (() => React.ReactNode), onClose?: (ctx: ContextMenu) => void, options?: {
    contentClassName?: string;
}): Promise<any>;
export declare function closeContextMenus(): Promise<any>;

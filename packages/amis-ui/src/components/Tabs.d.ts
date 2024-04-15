/**
 * @file Tabs
 * @description 选项卡
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
/// <reference types="lodash" />
import React from 'react';
import { ClassName, LocaleProps, Schema, TestIdBuilder } from 'amis-core';
import { ThemeProps } from 'amis-core';
import Sortable from 'sortablejs';
export type TabsMode = '' | 'line' | 'card' | 'radio' | 'vertical' | 'chrome' | 'simple' | 'strong' | 'tiled' | 'sidebar';
export interface TabProps extends ThemeProps {
    title?: string | React.ReactNode;
    icon?: string;
    iconPosition?: 'left' | 'right';
    disabled?: boolean | string;
    eventKey: string | number;
    prevKey?: string | number;
    nextKey?: string | number;
    tip?: string;
    tab?: Schema;
    className?: string;
    tabClassName?: string;
    activeKey?: string | number;
    reload?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    toolbar?: React.ReactNode;
    children?: React.ReactNode | Array<React.ReactNode>;
    swipeable?: boolean;
    onSelect?: (eventKey: string | number) => void;
    testIdBuilder?: TestIdBuilder;
}
declare class TabComponent extends React.PureComponent<TabProps> {
    contentDom: any;
    touch: any;
    touchStartTime: number;
    contentRef: (ref: any) => any;
    onTouchStart(event: React.TouchEvent): void;
    onTouchMove(event: React.TouchEvent): void;
    onTouchEnd(): void;
    render(): React.JSX.Element;
}
export declare const Tab: {
    new (props: Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof TabComponent>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TabComponent, {}> & {
    ComposedComponent: typeof TabComponent;
};
export interface TabsProps extends ThemeProps, LocaleProps {
    mode: TabsMode;
    tabsMode?: TabsMode;
    additionBtns?: React.ReactNode;
    onSelect?: (key: string | number) => void;
    activeKey?: string | number;
    contentClassName: string;
    linksClassName?: ClassName;
    className?: string;
    tabs?: Array<TabProps>;
    tabRender?: (tab: TabProps, props?: TabsProps) => JSX.Element;
    toolbar?: React.ReactNode;
    addable?: boolean;
    onAdd?: () => void;
    closable?: boolean;
    onClose?: (index: number, key: string | number) => void;
    draggable?: boolean;
    onDragChange?: (e: any) => void;
    showTip?: boolean;
    showTipClassName?: string;
    scrollable?: boolean;
    editable?: boolean;
    onEdit?: (index: number, text: string) => void;
    sidePosition?: 'left' | 'right';
    addBtnText?: string;
    collapseOnExceed?: number;
    collapseBtnLabel?: string;
    popOverContainer?: any;
    children?: React.ReactNode | Array<React.ReactNode>;
    testIdBuilder?: TestIdBuilder;
}
export interface IDragInfo {
    nodeId: string;
}
export declare class Tabs extends React.Component<TabsProps, any> {
    static defaultProps: Pick<TabsProps, 'mode' | 'contentClassName' | 'showTip' | 'showTipClassName' | 'sidePosition' | 'addBtnText' | 'collapseBtnLabel'>;
    static Tab: {
        new (props: Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof TabComponent>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TabComponent, {}> & {
        ComposedComponent: typeof TabComponent;
    };
    navMain: React.RefObject<HTMLUListElement>;
    scroll: boolean;
    sortable?: Sortable;
    dragTip?: HTMLElement;
    id: string;
    draging: boolean;
    toDispose: Array<() => void>;
    resizeDom: React.RefObject<HTMLDivElement>;
    checkArrowStatus: import("lodash").DebouncedFunc<() => void>;
    constructor(props: TabsProps);
    componentDidMount(): void;
    componentDidUpdate(preProps: any): void;
    componentWillUnmount(): void;
    /**
     * 处理内容与容器之间的位置关系
     */
    computedWidth(): void;
    /**
     * 保证选中的tab始终显示在可视区域
     */
    showSelected(key?: string | number): void;
    handleSelect(key: string | number): void;
    handleStartEdit(index: number, title: string): void;
    handleEditInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleEdit(): void;
    dragTipRef(ref: any): void;
    destroyDragging(): void;
    initDragging(): void;
    handleArrow(type: 'left' | 'right'): void;
    /**
     * 监听导航上的滚动事件
     */
    handleWheel(e: WheelEvent): void;
    generateTabKey(hash: any, eventKey: any, index: number): string;
    renderNav(child: any, index: number, showClose: boolean): React.JSX.Element | undefined;
    renderTab(child: any, index: number): React.DetailedReactHTMLElement<any, HTMLElement> | undefined;
    renderArrow(type: 'left' | 'right'): React.JSX.Element | null | undefined;
    handleAddBtn(): void;
    renderNavs(showClose?: boolean): any[] | null;
    render(): React.JSX.Element | null;
}
declare const _default: {
    new (props: Omit<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
        mode?: TabsMode | undefined;
        contentClassName?: string | undefined;
        showTip?: boolean | undefined;
        sidePosition?: "right" | "left" | undefined;
        showTipClassName?: string | undefined;
        addBtnText?: string | undefined;
        collapseBtnLabel?: string | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Tabs>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Tabs, {}> & {
        ComposedComponent: typeof Tabs;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
        mode?: TabsMode | undefined;
        contentClassName?: string | undefined;
        showTip?: boolean | undefined;
        sidePosition?: "right" | "left" | undefined;
        showTipClassName?: string | undefined;
        addBtnText?: string | undefined;
        collapseBtnLabel?: string | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Tabs>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Tabs, {}> & {
    ComposedComponent: typeof Tabs;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
            mode?: TabsMode | undefined;
            contentClassName?: string | undefined;
            showTip?: boolean | undefined;
            sidePosition?: "right" | "left" | undefined;
            showTipClassName?: string | undefined;
            addBtnText?: string | undefined;
            collapseBtnLabel?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "tabs" | "editable" | "draggable" | "children" | "testIdBuilder" | "popOverContainer" | "addable" | "tabsMode" | "toolbar" | "locale" | "translate" | "onSelect" | "onClose" | "onEdit" | "onAdd" | "closable" | "activeKey" | "linksClassName" | "scrollable" | "collapseOnExceed" | "additionBtns" | "tabRender" | "onDragChange"> & {
                mode?: TabsMode | undefined;
                contentClassName?: string | undefined;
                showTip?: boolean | undefined;
                sidePosition?: "right" | "left" | undefined;
                showTipClassName?: string | undefined;
                addBtnText?: string | undefined;
                collapseBtnLabel?: string | undefined;
            } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Tabs>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Tabs, {}> & {
        ComposedComponent: typeof Tabs;
    };
} & {
    Tab: typeof Tab;
};
export default _default;

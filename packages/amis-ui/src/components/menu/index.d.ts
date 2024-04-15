/**
 * @file Menu
 * @description 导航菜单，基于rc-menu实现：https://github.com/react-component/menu
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { MenuProps as RcMenuProps } from 'rc-menu';
import Sortable from 'sortablejs';
import { TestIdBuilder } from 'amis-core';
import { ClassNamesFn } from 'amis-core';
import { BadgeObject } from '../Badge';
import { SubMenuProps } from './SubMenu';
export interface NavigationItem {
    id?: string;
    label?: string | React.ReactNode;
    icon?: string | React.ReactNode;
    expandIcon?: string | React.ReactNode;
    path?: string;
    paths?: NavigationItem[];
    disabled?: boolean;
    disabledTip?: string;
    children?: Array<NavigationItem>;
    className?: string;
    badgeClassName?: string;
    tooltipClassName?: string;
    component?: React.ReactNode;
    permission?: string;
    persistState?: boolean;
    keepInHistory?: boolean;
    mode?: string;
    [propName: string]: any;
}
export interface MenuProps extends Omit<RcMenuProps, 'mode'> {
    className?: string;
    classPrefix: string;
    classnames: ClassNamesFn;
    /**
     * 导航项数据，支持树状结构
     */
    navigations: Array<NavigationItem>;
    testIdBuilder?: TestIdBuilder;
    /**
     * 导航排列方式 stacked为true垂直 默认为false
     */
    stacked?: true | false;
    /**
     * 垂直模式 非折叠状态下 控制菜单打开方式
     */
    mode?: 'inline' | 'float';
    /**
     * 主题配色
     */
    themeColor: 'light' | 'dark';
    /**
     * 菜单是否折叠收起，仅在mode为vertical时生效
     */
    collapsed?: boolean;
    /**
     * 子菜单触发方式
     */
    triggerSubMenuAction: 'hover' | 'click';
    /**
     * 布局排列方式，默认rtl(right to left)
     */
    direction: 'rtl' | 'ltr';
    /**
     * 渲染popover子菜单的位置，mode为vertical和horizontal时生效
     */
    popOverContainer: (node: HTMLElement) => HTMLElement;
    /**
     * 水平导航模式下，Menu折叠状态的图标或文案
     */
    overflowedIndicator?: React.ReactNode;
    /**
     * 水平导航模式下，是否禁用响应式收纳
     */
    disabledOverflow?: boolean;
    /**
     * 响应式收纳展示最大个数
     */
    overflowMaxCount?: number;
    /**
     * 自定义响应浮层元素
     */
    overflowComponent?: string;
    /**
     * 响应式收纳展开浮层样式
     */
    overflowedIndicatorPopupClassName?: string;
    /**
     * 导航列表后缀节点
     */
    overflowSuffix?: React.ReactNode;
    /**
     * 响应收纳项宽度
     */
    overflowItemWidth?: number;
    /**
     * 响应收纳最外层元素样式
     */
    overflowStyle?: Object;
    /**
     * 切换展开状态的ICON
     */
    expandIcon?: string | React.ReactNode;
    /**
     * 垂直导航水平缩进值
     */
    inlineIndent?: number;
    /**
     * 禁用状态
     */
    disabled?: boolean;
    location?: any;
    history?: any;
    /**
     * 统一路由前缀
     */
    prefix?: string;
    /**
     * 导航项是否展开
     */
    isOpen: (link: NavigationItem) => boolean;
    /**
     * 导航项是否激活
     */
    isActive: Function;
    /**
     * 导航项渲染方式
     */
    renderLink: Function;
    /**
     * 展开/收起子菜单Event
     */
    onToggleExpand?: (keys: String[]) => void;
    onSelect?: any;
    onChange?: any;
    onToggle: (link: any, depth: number, forceFold?: boolean) => void;
    onDragStart?: (link: any) => (event: React.DragEvent<HTMLAnchorElement>) => void;
    badge?: BadgeObject;
    data?: any;
    /**
     * 垂直inline模式下 菜单互斥展开
     */
    accordion?: boolean;
    /**
     * 支持排序
     */
    draggable?: boolean;
    /**
     * 展开按钮在最前面
     */
    expandBefore?: boolean;
    /**
     * 浮层自定义样式
     */
    popupClassName?: string;
}
interface MenuState {
    navigations: Array<NavigationItem>;
    activeKey: Array<string> | undefined;
    defaultOpenKeys: string[];
    openKeys: string[];
    [propName: string]: any;
}
export declare class Menu extends React.Component<MenuProps, MenuState> {
    static defaultProps: Pick<MenuProps, 'collapsed' | 'themeColor' | 'stacked' | 'mode' | 'direction' | 'prefix' | 'triggerSubMenuAction' | 'popOverContainer' | 'renderLink' | 'isActive' | 'isOpen' | 'inlineIndent'>;
    sortable?: Sortable;
    constructor(props: MenuProps);
    componentDidUpdate(prevProps: MenuProps, prevState: MenuState): void;
    getKeyPaths(navigations: Array<NavigationItem>, key: string): string[];
    normalizeNavigations(props: MenuProps): {
        transformedNav: any[];
        activeKey: string[];
        defaultOpenKeys: string[];
        openKeys: string[];
        activeItems: any[];
    };
    handleItemClick({ key, domEvent, keyPath }: {
        key: string;
        domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
        keyPath: string[];
    }): Promise<void>;
    handleSubMenuTitleClick({ key, domEvent, props }: {
        key: string;
        domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
        props: SubMenuProps;
    }): void;
    selectSubItem({ key, domEvent, props }: {
        key: string;
        domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
        props: SubMenuProps;
    }): void;
    handleToggleExpand(ctx: {
        isSelected?: boolean;
        isOpen?: boolean;
        isSubMenu?: boolean;
        disabled?: boolean;
        [propName: string]: any;
    }): void;
    renderExpandIcon(ctx: {
        isSelected?: boolean;
        isOpen?: boolean;
        isSubMenu?: boolean;
        disabled?: boolean;
        [propName: string]: any;
    }): React.JSX.Element;
    renderMenuContent(list: NavigationItem[], level?: number): React.JSX.Element[];
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<MenuProps, keyof import("amis-core").ThemeProps>, "property" | "hidden" | "disabled" | "id" | "draggable" | "onChange" | "autoFocus" | "data" | "children" | "slot" | "title" | "testIdBuilder" | "selectable" | "multiple" | "items" | "expandIcon" | "color" | "content" | "translate" | "defaultValue" | "onFocus" | "onBlur" | "badge" | "rel" | "rev" | "accessKey" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "contentEditable" | "contextMenu" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "location" | "history" | "accordion" | "activeKey" | "popupClassName" | "navigations" | "onToggle" | "selectedKeys" | "prefixCls" | "rootClassName" | "disabledOverflow" | "inlineCollapsed" | "defaultOpenKeys" | "openKeys" | "defaultActiveFirst" | "defaultSelectedKeys" | "onDeselect" | "motion" | "defaultMotions" | "subMenuOpenDelay" | "subMenuCloseDelay" | "forceSubMenuRender" | "builtinPlacements" | "itemIcon" | "overflowedIndicator" | "overflowedIndicatorPopupClassName" | "getPopupContainer" | "onOpenChange" | "_internalRenderMenuItem" | "_internalRenderSubMenuItem" | "overflowMaxCount" | "overflowComponent" | "overflowSuffix" | "overflowItemWidth" | "overflowStyle" | "onToggleExpand" | "expandBefore"> & {
        isActive?: Function | undefined;
        popOverContainer?: ((node: HTMLElement) => HTMLElement) | undefined;
        mode?: "inline" | "float" | undefined;
        collapsed?: boolean | undefined;
        prefix?: string | undefined;
        direction?: "ltr" | "rtl" | undefined;
        isOpen?: ((link: NavigationItem) => boolean) | undefined;
        stacked?: boolean | undefined;
        themeColor?: "dark" | "light" | undefined;
        renderLink?: Function | undefined;
        inlineIndent?: number | undefined;
        triggerSubMenuAction?: "hover" | "click" | undefined;
    } & {} & import("../../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<MenuProps, keyof import("amis-core").ThemeProps>, "property" | "hidden" | "disabled" | "id" | "draggable" | "onChange" | "autoFocus" | "data" | "children" | "slot" | "title" | "testIdBuilder" | "selectable" | "multiple" | "items" | "expandIcon" | "color" | "content" | "translate" | "defaultValue" | "onFocus" | "onBlur" | "badge" | "rel" | "rev" | "accessKey" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "contentEditable" | "contextMenu" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "location" | "history" | "accordion" | "activeKey" | "popupClassName" | "navigations" | "onToggle" | "selectedKeys" | "prefixCls" | "rootClassName" | "disabledOverflow" | "inlineCollapsed" | "defaultOpenKeys" | "openKeys" | "defaultActiveFirst" | "defaultSelectedKeys" | "onDeselect" | "motion" | "defaultMotions" | "subMenuOpenDelay" | "subMenuCloseDelay" | "forceSubMenuRender" | "builtinPlacements" | "itemIcon" | "overflowedIndicator" | "overflowedIndicatorPopupClassName" | "getPopupContainer" | "onOpenChange" | "_internalRenderMenuItem" | "_internalRenderSubMenuItem" | "overflowMaxCount" | "overflowComponent" | "overflowSuffix" | "overflowItemWidth" | "overflowStyle" | "onToggleExpand" | "expandBefore"> & {
            isActive?: Function | undefined;
            popOverContainer?: ((node: HTMLElement) => HTMLElement) | undefined;
            mode?: "inline" | "float" | undefined;
            collapsed?: boolean | undefined;
            prefix?: string | undefined;
            direction?: "ltr" | "rtl" | undefined;
            isOpen?: ((link: NavigationItem) => boolean) | undefined;
            stacked?: boolean | undefined;
            themeColor?: "dark" | "light" | undefined;
            renderLink?: Function | undefined;
            inlineIndent?: number | undefined;
            triggerSubMenuAction?: "hover" | "click" | undefined;
        } & {} & import("../../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<MenuProps, keyof import("amis-core").ThemeProps>, "property" | "hidden" | "disabled" | "id" | "draggable" | "onChange" | "autoFocus" | "data" | "children" | "slot" | "title" | "testIdBuilder" | "selectable" | "multiple" | "items" | "expandIcon" | "color" | "content" | "translate" | "defaultValue" | "onFocus" | "onBlur" | "badge" | "rel" | "rev" | "accessKey" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "contentEditable" | "contextMenu" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "location" | "history" | "accordion" | "activeKey" | "popupClassName" | "navigations" | "onToggle" | "selectedKeys" | "prefixCls" | "rootClassName" | "disabledOverflow" | "inlineCollapsed" | "defaultOpenKeys" | "openKeys" | "defaultActiveFirst" | "defaultSelectedKeys" | "onDeselect" | "motion" | "defaultMotions" | "subMenuOpenDelay" | "subMenuCloseDelay" | "forceSubMenuRender" | "builtinPlacements" | "itemIcon" | "overflowedIndicator" | "overflowedIndicatorPopupClassName" | "getPopupContainer" | "onOpenChange" | "_internalRenderMenuItem" | "_internalRenderSubMenuItem" | "overflowMaxCount" | "overflowComponent" | "overflowSuffix" | "overflowItemWidth" | "overflowStyle" | "onToggleExpand" | "expandBefore"> & {
            isActive?: Function | undefined;
            popOverContainer?: ((node: HTMLElement) => HTMLElement) | undefined;
            mode?: "inline" | "float" | undefined;
            collapsed?: boolean | undefined;
            prefix?: string | undefined;
            direction?: "ltr" | "rtl" | undefined;
            isOpen?: ((link: NavigationItem) => boolean) | undefined;
            stacked?: boolean | undefined;
            themeColor?: "dark" | "light" | undefined;
            renderLink?: Function | undefined;
            inlineIndent?: number | undefined;
            triggerSubMenuAction?: "hover" | "click" | undefined;
        } & {} & import("../../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<MenuProps, keyof import("amis-core").ThemeProps>, "property" | "hidden" | "disabled" | "id" | "draggable" | "onChange" | "autoFocus" | "data" | "children" | "slot" | "title" | "testIdBuilder" | "selectable" | "multiple" | "items" | "expandIcon" | "color" | "content" | "translate" | "defaultValue" | "onFocus" | "onBlur" | "badge" | "rel" | "rev" | "accessKey" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "contentEditable" | "contextMenu" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "location" | "history" | "accordion" | "activeKey" | "popupClassName" | "navigations" | "onToggle" | "selectedKeys" | "prefixCls" | "rootClassName" | "disabledOverflow" | "inlineCollapsed" | "defaultOpenKeys" | "openKeys" | "defaultActiveFirst" | "defaultSelectedKeys" | "onDeselect" | "motion" | "defaultMotions" | "subMenuOpenDelay" | "subMenuCloseDelay" | "forceSubMenuRender" | "builtinPlacements" | "itemIcon" | "overflowedIndicator" | "overflowedIndicatorPopupClassName" | "getPopupContainer" | "onOpenChange" | "_internalRenderMenuItem" | "_internalRenderSubMenuItem" | "overflowMaxCount" | "overflowComponent" | "overflowSuffix" | "overflowItemWidth" | "overflowStyle" | "onToggleExpand" | "expandBefore"> & {
            isActive?: Function | undefined;
            popOverContainer?: ((node: HTMLElement) => HTMLElement) | undefined;
            mode?: "inline" | "float" | undefined;
            collapsed?: boolean | undefined;
            prefix?: string | undefined;
            direction?: "ltr" | "rtl" | undefined;
            isOpen?: ((link: NavigationItem) => boolean) | undefined;
            stacked?: boolean | undefined;
            themeColor?: "dark" | "light" | undefined;
            renderLink?: Function | undefined;
            inlineIndent?: number | undefined;
            triggerSubMenuAction?: "hover" | "click" | undefined;
        } & {} & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<MenuProps, keyof import("amis-core").ThemeProps>, "property" | "hidden" | "disabled" | "id" | "draggable" | "onChange" | "autoFocus" | "data" | "children" | "slot" | "title" | "testIdBuilder" | "selectable" | "multiple" | "items" | "expandIcon" | "color" | "content" | "translate" | "defaultValue" | "onFocus" | "onBlur" | "badge" | "rel" | "rev" | "accessKey" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "contentEditable" | "contextMenu" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "location" | "history" | "accordion" | "activeKey" | "popupClassName" | "navigations" | "onToggle" | "selectedKeys" | "prefixCls" | "rootClassName" | "disabledOverflow" | "inlineCollapsed" | "defaultOpenKeys" | "openKeys" | "defaultActiveFirst" | "defaultSelectedKeys" | "onDeselect" | "motion" | "defaultMotions" | "subMenuOpenDelay" | "subMenuCloseDelay" | "forceSubMenuRender" | "builtinPlacements" | "itemIcon" | "overflowedIndicator" | "overflowedIndicatorPopupClassName" | "getPopupContainer" | "onOpenChange" | "_internalRenderMenuItem" | "_internalRenderSubMenuItem" | "overflowMaxCount" | "overflowComponent" | "overflowSuffix" | "overflowItemWidth" | "overflowStyle" | "onToggleExpand" | "expandBefore"> & {
            isActive?: Function | undefined;
            popOverContainer?: ((node: HTMLElement) => HTMLElement) | undefined;
            mode?: "inline" | "float" | undefined;
            collapsed?: boolean | undefined;
            prefix?: string | undefined;
            direction?: "ltr" | "rtl" | undefined;
            isOpen?: ((link: NavigationItem) => boolean) | undefined;
            stacked?: boolean | undefined;
            themeColor?: "dark" | "light" | undefined;
            renderLink?: Function | undefined;
            inlineIndent?: number | undefined;
            triggerSubMenuAction?: "hover" | "click" | undefined;
        } & {} & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<MenuProps, keyof import("amis-core").ThemeProps>, "property" | "hidden" | "disabled" | "id" | "draggable" | "onChange" | "autoFocus" | "data" | "children" | "slot" | "title" | "testIdBuilder" | "selectable" | "multiple" | "items" | "expandIcon" | "color" | "content" | "translate" | "defaultValue" | "onFocus" | "onBlur" | "badge" | "rel" | "rev" | "accessKey" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "contentEditable" | "contextMenu" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "location" | "history" | "accordion" | "activeKey" | "popupClassName" | "navigations" | "onToggle" | "selectedKeys" | "prefixCls" | "rootClassName" | "disabledOverflow" | "inlineCollapsed" | "defaultOpenKeys" | "openKeys" | "defaultActiveFirst" | "defaultSelectedKeys" | "onDeselect" | "motion" | "defaultMotions" | "subMenuOpenDelay" | "subMenuCloseDelay" | "forceSubMenuRender" | "builtinPlacements" | "itemIcon" | "overflowedIndicator" | "overflowedIndicatorPopupClassName" | "getPopupContainer" | "onOpenChange" | "_internalRenderMenuItem" | "_internalRenderSubMenuItem" | "overflowMaxCount" | "overflowComponent" | "overflowSuffix" | "overflowItemWidth" | "overflowStyle" | "onToggleExpand" | "expandBefore"> & {
            isActive?: Function | undefined;
            popOverContainer?: ((node: HTMLElement) => HTMLElement) | undefined;
            mode?: "inline" | "float" | undefined;
            collapsed?: boolean | undefined;
            prefix?: string | undefined;
            direction?: "ltr" | "rtl" | undefined;
            isOpen?: ((link: NavigationItem) => boolean) | undefined;
            stacked?: boolean | undefined;
            themeColor?: "dark" | "light" | undefined;
            renderLink?: Function | undefined;
            inlineIndent?: number | undefined;
            triggerSubMenuAction?: "hover" | "click" | undefined;
        } & {} & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<MenuProps, keyof import("amis-core").ThemeProps>, "property" | "hidden" | "disabled" | "id" | "draggable" | "onChange" | "autoFocus" | "data" | "children" | "slot" | "title" | "testIdBuilder" | "selectable" | "multiple" | "items" | "expandIcon" | "color" | "content" | "translate" | "defaultValue" | "onFocus" | "onBlur" | "badge" | "rel" | "rev" | "accessKey" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "contentEditable" | "contextMenu" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "location" | "history" | "accordion" | "activeKey" | "popupClassName" | "navigations" | "onToggle" | "selectedKeys" | "prefixCls" | "rootClassName" | "disabledOverflow" | "inlineCollapsed" | "defaultOpenKeys" | "openKeys" | "defaultActiveFirst" | "defaultSelectedKeys" | "onDeselect" | "motion" | "defaultMotions" | "subMenuOpenDelay" | "subMenuCloseDelay" | "forceSubMenuRender" | "builtinPlacements" | "itemIcon" | "overflowedIndicator" | "overflowedIndicatorPopupClassName" | "getPopupContainer" | "onOpenChange" | "_internalRenderMenuItem" | "_internalRenderSubMenuItem" | "overflowMaxCount" | "overflowComponent" | "overflowSuffix" | "overflowItemWidth" | "overflowStyle" | "onToggleExpand" | "expandBefore"> & {
            isActive?: Function | undefined;
            popOverContainer?: ((node: HTMLElement) => HTMLElement) | undefined;
            mode?: "inline" | "float" | undefined;
            collapsed?: boolean | undefined;
            prefix?: string | undefined;
            direction?: "ltr" | "rtl" | undefined;
            isOpen?: ((link: NavigationItem) => boolean) | undefined;
            stacked?: boolean | undefined;
            themeColor?: "dark" | "light" | undefined;
            renderLink?: Function | undefined;
            inlineIndent?: number | undefined;
            triggerSubMenuAction?: "hover" | "click" | undefined;
        } & {} & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<MenuProps, keyof import("amis-core").ThemeProps>, "property" | "hidden" | "disabled" | "id" | "draggable" | "onChange" | "autoFocus" | "data" | "children" | "slot" | "title" | "testIdBuilder" | "selectable" | "multiple" | "items" | "expandIcon" | "color" | "content" | "translate" | "defaultValue" | "onFocus" | "onBlur" | "badge" | "rel" | "rev" | "accessKey" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "contentEditable" | "contextMenu" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "location" | "history" | "accordion" | "activeKey" | "popupClassName" | "navigations" | "onToggle" | "selectedKeys" | "prefixCls" | "rootClassName" | "disabledOverflow" | "inlineCollapsed" | "defaultOpenKeys" | "openKeys" | "defaultActiveFirst" | "defaultSelectedKeys" | "onDeselect" | "motion" | "defaultMotions" | "subMenuOpenDelay" | "subMenuCloseDelay" | "forceSubMenuRender" | "builtinPlacements" | "itemIcon" | "overflowedIndicator" | "overflowedIndicatorPopupClassName" | "getPopupContainer" | "onOpenChange" | "_internalRenderMenuItem" | "_internalRenderSubMenuItem" | "overflowMaxCount" | "overflowComponent" | "overflowSuffix" | "overflowItemWidth" | "overflowStyle" | "onToggleExpand" | "expandBefore"> & {
            isActive?: Function | undefined;
            popOverContainer?: ((node: HTMLElement) => HTMLElement) | undefined;
            mode?: "inline" | "float" | undefined;
            collapsed?: boolean | undefined;
            prefix?: string | undefined;
            direction?: "ltr" | "rtl" | undefined;
            isOpen?: ((link: NavigationItem) => boolean) | undefined;
            stacked?: boolean | undefined;
            themeColor?: "dark" | "light" | undefined;
            renderLink?: Function | undefined;
            inlineIndent?: number | undefined;
            triggerSubMenuAction?: "hover" | "click" | undefined;
        } & {} & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<MenuProps, keyof import("amis-core").ThemeProps>, "property" | "hidden" | "disabled" | "id" | "draggable" | "onChange" | "autoFocus" | "data" | "children" | "slot" | "title" | "testIdBuilder" | "selectable" | "multiple" | "items" | "expandIcon" | "color" | "content" | "translate" | "defaultValue" | "onFocus" | "onBlur" | "badge" | "rel" | "rev" | "accessKey" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "contentEditable" | "contextMenu" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "location" | "history" | "accordion" | "activeKey" | "popupClassName" | "navigations" | "onToggle" | "selectedKeys" | "prefixCls" | "rootClassName" | "disabledOverflow" | "inlineCollapsed" | "defaultOpenKeys" | "openKeys" | "defaultActiveFirst" | "defaultSelectedKeys" | "onDeselect" | "motion" | "defaultMotions" | "subMenuOpenDelay" | "subMenuCloseDelay" | "forceSubMenuRender" | "builtinPlacements" | "itemIcon" | "overflowedIndicator" | "overflowedIndicatorPopupClassName" | "getPopupContainer" | "onOpenChange" | "_internalRenderMenuItem" | "_internalRenderSubMenuItem" | "overflowMaxCount" | "overflowComponent" | "overflowSuffix" | "overflowItemWidth" | "overflowStyle" | "onToggleExpand" | "expandBefore"> & {
            isActive?: Function | undefined;
            popOverContainer?: ((node: HTMLElement) => HTMLElement) | undefined;
            mode?: "inline" | "float" | undefined;
            collapsed?: boolean | undefined;
            prefix?: string | undefined;
            direction?: "ltr" | "rtl" | undefined;
            isOpen?: ((link: NavigationItem) => boolean) | undefined;
            stacked?: boolean | undefined;
            themeColor?: "dark" | "light" | undefined;
            renderLink?: Function | undefined;
            inlineIndent?: number | undefined;
            triggerSubMenuAction?: "hover" | "click" | undefined;
        } & {} & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<MenuProps, keyof import("amis-core").ThemeProps>, "property" | "hidden" | "disabled" | "id" | "draggable" | "onChange" | "autoFocus" | "data" | "children" | "slot" | "title" | "testIdBuilder" | "selectable" | "multiple" | "items" | "expandIcon" | "color" | "content" | "translate" | "defaultValue" | "onFocus" | "onBlur" | "badge" | "rel" | "rev" | "accessKey" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "contentEditable" | "contextMenu" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "location" | "history" | "accordion" | "activeKey" | "popupClassName" | "navigations" | "onToggle" | "selectedKeys" | "prefixCls" | "rootClassName" | "disabledOverflow" | "inlineCollapsed" | "defaultOpenKeys" | "openKeys" | "defaultActiveFirst" | "defaultSelectedKeys" | "onDeselect" | "motion" | "defaultMotions" | "subMenuOpenDelay" | "subMenuCloseDelay" | "forceSubMenuRender" | "builtinPlacements" | "itemIcon" | "overflowedIndicator" | "overflowedIndicatorPopupClassName" | "getPopupContainer" | "onOpenChange" | "_internalRenderMenuItem" | "_internalRenderSubMenuItem" | "overflowMaxCount" | "overflowComponent" | "overflowSuffix" | "overflowItemWidth" | "overflowStyle" | "onToggleExpand" | "expandBefore"> & {
            isActive?: Function | undefined;
            popOverContainer?: ((node: HTMLElement) => HTMLElement) | undefined;
            mode?: "inline" | "float" | undefined;
            collapsed?: boolean | undefined;
            prefix?: string | undefined;
            direction?: "ltr" | "rtl" | undefined;
            isOpen?: ((link: NavigationItem) => boolean) | undefined;
            stacked?: boolean | undefined;
            themeColor?: "dark" | "light" | undefined;
            renderLink?: Function | undefined;
            inlineIndent?: number | undefined;
            triggerSubMenuAction?: "hover" | "click" | undefined;
        } & {} & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Menu>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Menu, {}> & {
    ComposedComponent: typeof Menu;
};
export default _default;

import React from 'react';
export type OverlayAlignType = 'left' | 'center' | 'right';
export interface PopOverOverlay {
    width?: string | number;
    align?: OverlayAlignType;
}
export interface PopOverContainerProps {
    show?: boolean;
    children: (props: {
        disabled?: boolean;
        onClick: (e: React.MouseEvent) => void;
        isOpened: boolean;
        ref: any;
    }) => JSX.Element;
    disabled?: boolean;
    popOverRender: (props: {
        onClose: () => void;
    }) => JSX.Element;
    popOverContainer?: any;
    popOverClassName?: string;
    mobileUI?: boolean;
    placement?: string;
    overlayWidth?: number | string;
    overlayWidthField?: 'minWidth' | 'width';
    showConfirm?: boolean;
    align?: OverlayAlignType;
    /** Popover层隐藏前触发的事件 */
    onBeforeHide?: () => void;
    /** Popover层隐藏后触发的事件 */
    onAfterHide?: () => void;
    onConfirm?: () => void;
}
export interface PopOverContainerState {
    isOpened: boolean;
}
export declare class PopOverContainer extends React.Component<PopOverContainerProps, PopOverContainerState> {
    static alignPlacementMap: {
        left: string;
        right: string;
        center: string;
    };
    state: PopOverContainerState;
    target: any;
    targetRef(target: any): void;
    handleClick(): void;
    close(): void;
    getTarget(): any;
    getParent(): any;
    onConfirm(): void;
    static calcOverlayWidth(overlay: PopOverOverlay, targetWidth: number): string | number | undefined;
    static alignToPlacement(overlay?: PopOverOverlay): string;
    getOverlayStyle(): {
        [x: string]: string | number;
    };
    render(): React.JSX.Element;
}
export default PopOverContainer;

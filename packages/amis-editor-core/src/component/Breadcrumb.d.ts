import React from 'react';
import { EditorStoreType } from '../store/editor';
import { EditorManager } from '../manager';
export interface BreadcrumbProps {
    store: EditorStoreType;
    manager: EditorManager;
}
interface BreadcrumbStates {
    showLeftScrollBtn: boolean;
    showRightScrollBtn: boolean;
}
export default class Breadcrumb extends React.Component<BreadcrumbProps, BreadcrumbStates> {
    readonly breadcrumbRef: React.RefObject<HTMLDivElement>;
    readonly bcnContentRef: React.RefObject<HTMLDivElement>;
    currentBreadcrumb: HTMLElement;
    unReaction: () => void;
    unSensor?: () => void;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    refreshHandleScroll(resetScroll?: boolean): void;
    getCurBreadcrumb(): HTMLDivElement | null;
    getBreadcrumbContainer(): HTMLDivElement | null;
    getScrollLeft(): string;
    toNumber(pxStr: string): number;
    HandleScroll(resetScroll?: boolean): void;
    handleScrollToLeft(): void;
    handleScrollToRight(): void;
    handleClick(e: React.MouseEvent<HTMLAnchorElement>): void;
    handleMouseEnter(e: React.MouseEvent<HTMLAnchorElement>): void;
    render(): React.JSX.Element;
}
export {};

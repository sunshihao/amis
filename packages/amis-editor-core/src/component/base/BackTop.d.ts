import React from 'react';
export interface BackTopProps {
    visibilityHeight?: number;
    onClick?: React.MouseEventHandler<HTMLElement>;
    target: () => HTMLElement | Window | Document;
    children?: React.ReactNode;
    className?: string;
    visible?: boolean;
}
export interface BackTopStates {
    visible: boolean;
}
export default class BackTop extends React.Component<BackTopProps, BackTopStates> {
    ref: React.RefObject<HTMLDivElement>;
    scrollElem: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getDefaultTarget(): Document | (Window & typeof globalThis);
    handleScroll(e: React.UIEvent<HTMLElement> | {
        target: any;
    }): void;
    bindScrollEvent(): void;
    scrollToTop(e: React.MouseEvent<HTMLDivElement>): void;
    render(): React.JSX.Element;
}

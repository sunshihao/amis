import React from 'react';
interface WidthDraggableProps {
    isLeftDragIcon?: boolean;
    className?: any;
}
export declare class WidthDraggableBtn extends React.Component<WidthDraggableProps> {
    startX: number;
    startWidth: number;
    dragWrap: HTMLElement;
    constructor(props: any);
    handleResizeMouseDown(e: React.MouseEvent): void;
    handleResizeMouseMove(e: MouseEvent): void;
    handleResizeMouseUp(): void;
    render(): React.JSX.Element;
}
export {};

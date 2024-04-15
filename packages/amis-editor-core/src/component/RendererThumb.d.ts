import type { Schema } from 'amis-core';
import React from 'react';
interface ThumbProps {
    schema: Schema;
    theme?: string;
    env: any;
}
interface ThumbStates {
    scale: Boolean;
}
export declare class RendererThumb extends React.Component<ThumbProps, ThumbStates> {
    ref: HTMLDivElement;
    unSensor: Function;
    constructor(props: ThumbProps);
    env: any;
    componentWillUnmount(): void;
    rootRef(ref: HTMLDivElement): void;
    syncHeight(): void;
    handleClick(e: React.MouseEvent): void;
    render(): React.JSX.Element;
}
export {};

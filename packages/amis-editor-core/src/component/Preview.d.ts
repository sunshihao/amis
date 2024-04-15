import React, { Component } from 'react';
import { RenderOptions } from 'amis-core';
import type { Schema } from 'amis';
import { EditorStoreType } from '../store/editor';
import { EditorManager } from '../manager';
import type { RendererConfig } from 'amis-core';
export interface PreviewProps {
    theme?: string;
    /** 应用语言类型 */
    appLocale?: string;
    amisEnv?: any;
    className?: string;
    editable?: boolean;
    isMobile?: boolean;
    store: EditorStoreType;
    manager: EditorManager;
    data?: any;
    autoFocus?: boolean;
    toolbarContainer?: () => any;
}
export interface PreviewState {
    ready?: boolean;
}
export default class Preview extends Component<PreviewProps> {
    currentDom: HTMLElement;
    dialogReaction: any;
    env: RenderOptions;
    doingSelection: boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    unSensor?: () => void;
    layer?: HTMLDivElement;
    scrollLayer?: HTMLDivElement;
    contentsRef(ref: HTMLDivElement | null): void;
    readonly unReaction: () => void;
    handlePanelChange(): void;
    getHighlightNodes(): string[];
    calculateHighlightBox(ids: Array<string>): void;
    handeMouseDown(e: MouseEvent): void;
    /** 拖拽多选 */
    doSelection(rect: {
        x: number;
        y: number;
        w: number;
        h: number;
    }): void;
    handleClick(e: MouseEvent): void;
    handleNavSwitch(id: string): void;
    handleMouseMove(e: MouseEvent): void;
    handleMouseLeave(): void;
    handeMouseOver(e: MouseEvent): void;
    handleDragEnter(e: React.DragEvent): void;
    handleDragLeave(e: React.DragEvent): void;
    handleDragOver(e: React.DragEvent): void;
    handleDrop(e: React.DragEvent): void;
    getCurrentTarget(): HTMLDivElement;
    rendererResolver(path: string, schema: Schema, props: any): RendererConfig;
    render(): React.JSX.Element;
}
/**
 * 这个用了 observer，所以能最小程度的刷新，数据不变按理是不会刷新的。
 */
export interface SmartPreviewProps {
    editable?: boolean;
    autoFocus?: boolean;
    store: EditorStoreType;
    env: any;
    data?: any;
    manager: EditorManager;
    /** 应用语言类型 */
    appLocale?: string;
}

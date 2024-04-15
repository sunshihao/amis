import React from 'react';
import { PanelProps } from '../../plugin';
import { EditorNodeType } from '../../store/node';
import type { Schema } from 'amis';
export declare class OutlinePanel extends React.Component<PanelProps> {
    state: {
        curSearchElemKey: string;
    };
    handleClick(e: React.MouseEvent<HTMLAnchorElement>): void;
    handleDialogNodeClick(e: React.MouseEvent<HTMLAnchorElement>, option: Schema): void;
    handleEnter(e: React.MouseEvent): void;
    handleTabChange(key: string): void;
    handleDragStart(e: React.DragEvent): void;
    handleDragOver(e: React.DragEvent): void;
    handleDrop(e: React.DragEvent): void;
    handleSearchElemKeyChange(searchVal: string): void;
    clearSearchElemKey(): void;
    renderTitleByKeyword(rendererTitle: string, curSearchTitle: string): string | React.JSX.Element;
    renderItem(option: EditorNodeType, index: number, type?: 'dialog' | 'dialogView'): React.JSX.Element | null;
    getDialogNodeLabel(option: EditorNodeType, type?: 'dialog' | 'dialogView'): string;
    getDialogLabel(option: any, isNode: boolean, title?: 'title' | 'dialogTitle'): string;
    renderDialogItem(option: any, index: number): React.JSX.Element;
    render(): React.JSX.Element;
}

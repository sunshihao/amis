import React from 'react';
import { EditorStoreType } from '../../store/editor';
export interface ContextMenuPanelProps {
    store: EditorStoreType;
}
export declare class ContextMenuPanel extends React.Component<ContextMenuPanelProps> {
    render(): React.JSX.Element | null;
}

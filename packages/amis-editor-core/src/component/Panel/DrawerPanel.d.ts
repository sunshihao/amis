import React from 'react';
import { EditorManager } from '../../manager';
import { EditorStoreType } from '../../store/editor';
import { EditorNodeType } from '../../store/node';
export interface PanelsProps {
    store: EditorStoreType;
    manager: EditorManager;
    node: EditorNodeType | undefined;
    panelItem: any;
    theme?: string;
}
export declare class DrawerPanel extends React.Component<PanelsProps> {
    getPopOverContainer(): HTMLElement;
    render(): React.JSX.Element;
}

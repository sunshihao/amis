import React from 'react';
import { EditorStoreType } from '../store/editor';
import { EditorNodeType } from '../store/node';
import { EditorManager } from '../manager';
export interface HighlightBoxProps {
    store: EditorStoreType;
    node: EditorNodeType;
    id: string;
    className?: string;
    title: string;
    toolbarContainer?: () => any;
    onSwitch?: (id: string) => void;
    manager: EditorManager;
    children?: React.ReactNode;
}
declare const _default: ({ className, store, id, title, children, node, toolbarContainer, onSwitch, manager }: HighlightBoxProps) => React.JSX.Element;
export default _default;

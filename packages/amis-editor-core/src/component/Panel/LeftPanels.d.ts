import React from 'react';
import { EditorManager } from '../../manager';
import { EditorStoreType } from '../../store/editor';
interface LeftPanelsProps {
    store: EditorStoreType;
    manager: EditorManager;
    theme?: string;
}
interface LeftPanelsStates {
    isFixedStatus: boolean;
}
export declare class LeftPanels extends React.Component<LeftPanelsProps, LeftPanelsStates> {
    constructor(props: any);
    handleHidden(): void;
    handleFixed(): void;
    handleSelect(key: string): void;
    getPopOverContainer(): HTMLElement;
    render(): React.JSX.Element;
}
export {};

import React from 'react';
import { EditorManager } from '../../manager';
import { EditorStoreType } from '../../store/editor';
interface RightPanelsProps {
    store: EditorStoreType;
    manager: EditorManager;
    theme?: string;
    appLocale?: string;
    amisEnv?: any;
}
interface RightPanelsStates {
    isOpenStatus: boolean;
    isFixedStatus: boolean;
}
export declare class RightPanels extends React.Component<RightPanelsProps, RightPanelsStates> {
    constructor(props: any);
    handleFixed(): void;
    handleSelect(key: string): void;
    handleHidden(): void;
    getPopOverContainer(): HTMLElement;
    render(): React.JSX.Element | null;
}
export {};

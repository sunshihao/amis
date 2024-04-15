import React from 'react';
import { PanelProps } from '../../plugin';
type PanelStates = {
    toggleCollapseFolderStatus: boolean;
};
export declare class AvailableRenderersPanel extends React.Component<PanelProps, PanelStates> {
    handleSelect(key: string): void;
    render(): React.JSX.Element;
}
export {};

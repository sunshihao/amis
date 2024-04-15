import { TestIdBuilder } from 'amis';
import React from 'react';
import { EditorStoreType } from '../../store/editor';
import { EditorManager } from '../../manager';
import { SubRendererInfo } from '../../plugin';
type PanelProps = {
    store: EditorStoreType;
    manager: EditorManager;
    groupedRenderers: {
        [propName: string]: Array<SubRendererInfo>;
    };
    searchRendererType: string;
    className?: string;
    testIdBuilder?: TestIdBuilder;
};
type PanelStates = {
    toggleCollapseFolderStatus: boolean;
};
export default class RenderersPanel extends React.Component<PanelProps, PanelStates> {
    state: {
        toggleCollapseFolderStatus: boolean;
    };
    curCollapseFolded: {
        [propName: string]: boolean;
    };
    handleRegionFilterClick(e: React.MouseEvent): void;
    handleDragStart(e: React.DragEvent, label: string): void;
    handleClick(e: React.MouseEvent): void;
    changeCollapseFoldStatus(tagKey: string, event: any): void;
    renderThumb(schema: any): React.JSX.Element;
    render(): React.JSX.Element;
}
export {};

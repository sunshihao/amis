import React from 'react';
import { EditorManager } from '../manager';
import { EditorStoreType } from '../store/editor';
export interface SubEditorProps {
    store: EditorStoreType;
    manager: EditorManager;
    theme?: string;
}
export declare class ScaffoldModal extends React.Component<SubEditorProps> {
    handleConfirm([values]: any): Promise<void>;
    buildSchema(): {
        wrapperComponent: string;
        type: string;
        wrapWithPanel: boolean;
        initApi: any;
        api: any;
    };
    amisScope: any;
    scopeRef(scoped: any): void;
    goToNextStep(): void;
    goToPrevStep(): void;
    handleConfirmClick(): Promise<void>;
    handleCancelClick(): void;
    render(): React.JSX.Element;
}

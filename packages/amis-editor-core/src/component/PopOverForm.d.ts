import React from 'react';
import { EditorManager } from '../manager';
import { EditorStoreType } from '../store/editor';
export interface PopOverFormProps {
    store: EditorStoreType;
    manager: EditorManager;
    theme?: string;
}
export declare class PopOverForm extends React.Component<PopOverFormProps> {
    overlay: React.RefObject<any>;
    buildSchema(): {
        type: string;
        wrapWithPanel: boolean;
        mode: string;
        wrapperComponent: string;
        body: any[];
        submitOnChange: boolean;
        autoFocus: boolean;
        onFinished: (newValue: any) => void;
    };
    render(): React.JSX.Element;
}

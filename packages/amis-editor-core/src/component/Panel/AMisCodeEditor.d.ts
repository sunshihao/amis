/// <reference types="lodash" />
import React from 'react';
export interface AMisCodeEditorProps {
    value: any;
    onChange: (value: any, diff: any) => void;
    onPaste?: () => void;
    disabled?: boolean;
    $schemaUrl?: string;
    $schema?: string;
    className?: string;
    theme?: string;
}
export default class AMisCodeEditor extends React.Component<AMisCodeEditorProps> {
    state: {
        wrongSchema: string;
        value: any;
        contents: any;
    };
    lastResult: any;
    toDispose: Array<() => void>;
    editor: any;
    monaco: any;
    model: any;
    decorations: any;
    uri: string;
    componentDidUpdate(prevProps: AMisCodeEditorProps): void;
    obj2str(value: any, props: AMisCodeEditorProps): any;
    str2obj(str: string): any;
    emitChange: import("lodash").DebouncedFunc<() => void>;
    changeJsonOptions(props?: AMisCodeEditorProps): Promise<void>;
    editorFactory: (containerElement: HTMLElement, monaco: any, options: any) => any;
    editorDidMount: (editor: any, monaco: any) => void;
    editorWillUnmount: (editor: any, monaco: any) => void;
    handleChange: (value: string) => void;
    handleBlur: () => Promise<void>;
    render(): React.JSX.Element;
}

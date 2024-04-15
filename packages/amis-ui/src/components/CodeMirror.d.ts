import React from 'react';
import type CodeMirror from 'codemirror';
export interface CodeMirrorEditorProps {
    className?: string;
    style?: any;
    value?: string;
    readOnly?: boolean;
    onChange?: (value: string) => void;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    editorFactory?: (dom: HTMLElement, cm: typeof CodeMirror, props?: any) => CodeMirror.Editor;
    editorDidMount?: (cm: typeof CodeMirror, editor: CodeMirror.Editor) => void;
    editorWillUnMount?: (cm: typeof CodeMirror, editor: CodeMirror.Editor) => void;
}
export declare class CodeMirrorEditor extends React.Component<CodeMirrorEditorProps> {
    dom: React.RefObject<HTMLDivElement>;
    editor?: CodeMirror.Editor;
    toDispose: Array<() => void>;
    unmounted: boolean;
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: CodeMirrorEditorProps): void;
    componentWillUnmount(): void;
    handleChange(editor: any): void;
    handleBlur(editor: any): void;
    handleFocus(editor: any): void;
    setValue(value?: string): void;
    render(): React.JSX.Element;
}
export default CodeMirrorEditor;

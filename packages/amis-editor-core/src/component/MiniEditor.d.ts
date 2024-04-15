import React from 'react';
import Editor, { EditorProps } from './Editor';
import { BaseEventContext, PluginEvent } from '../plugin';
export default class MiniEditor extends Editor {
    constructor(props: EditorProps);
    componentWillUnmount(): void;
    buildPanels(event: PluginEvent<BaseEventContext>): void;
    render(): React.JSX.Element;
}

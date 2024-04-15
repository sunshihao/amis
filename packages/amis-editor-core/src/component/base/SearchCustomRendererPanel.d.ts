import React from 'react';
import { EditorStoreType } from '../../store/editor';
import { SubRendererInfo } from '../../plugin';
interface SearchCustomRendererProps {
    store: EditorStoreType;
}
interface SearchCustomRendererStates {
    customRenderersByOrder: Array<SubRendererInfo>;
    defaultKeyword: string;
}
export default class SearchCustomRendererPanel extends React.Component<SearchCustomRendererProps, SearchCustomRendererStates> {
    localStorageKey: string;
    constructor(props: any);
    render(): React.JSX.Element | null;
}
export {};

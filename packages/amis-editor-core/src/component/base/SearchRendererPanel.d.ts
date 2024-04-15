import React from 'react';
import { EditorStoreType } from '../../store/editor';
import { SubRendererInfo } from '../../plugin';
interface SearchRendererProps {
    store: EditorStoreType;
}
interface SearchRendererStates {
    subRenderersByOrder: Array<SubRendererInfo>;
    defaultKeyword: string;
}
export default class SearchRendererPanel extends React.Component<SearchRendererProps, SearchRendererStates> {
    localStorageKey: string;
    lastSubRenderersTag: string;
    constructor(props: any);
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    changeSubRenderersTag(curTag: string): void;
    render(): React.JSX.Element;
}
export {};

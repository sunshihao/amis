import { EditorStoreType } from '../store/editor';
import React from 'react';
import { EditorManager } from '../manager';
/**
 * 这个用了 observer，所以能最小程度的刷新，数据不变按理是不会刷新的。
 */
export interface IFramePreviewProps {
    editable?: boolean;
    autoFocus?: boolean;
    store: EditorStoreType;
    env: any;
    data?: any;
    manager: EditorManager;
    /** 应用语言类型 */
    appLocale?: string;
}
export default class IFramePreview extends React.Component<IFramePreviewProps> {
    initialContent: string;
    dialogMountRef: React.RefObject<HTMLDivElement>;
    iframeRef: HTMLIFrameElement;
    constructor(props: IFramePreviewProps);
    componentDidMount(): void;
    iframeRefFunc(iframe: any): void;
    getModalContainer(): HTMLElement;
    isMobile(): boolean;
    getDialogMountRef(): HTMLDivElement | null;
    iframeContentDidMount(): void;
    render(): React.JSX.Element;
}

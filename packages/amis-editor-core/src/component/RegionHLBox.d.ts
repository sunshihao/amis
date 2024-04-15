import React from 'react';
import { EditorStoreType } from '../store/editor';
import { EditorManager } from '../manager';
import { EditorNodeType } from '../store/node';
export declare const AddBTNSvg = "<svg viewBox=\"0 0 12 12\">\n<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n  <g id=\"plus\" fill=\"currentColor\" fill-rule=\"nonzero\">\n    <polygon points=\"6.6 6.6 6.6 12 5.4 12 5.4 6.6 0 6.6 0 5.4 5.4 5.4 5.4 0 6.6 0 6.6 5.4 12 5.4 12 6.6\"></polygon>\n  </g>\n</g>\n</svg>";
export interface HighlightBoxProps {
    store: EditorStoreType;
    node: EditorNodeType;
    name: string;
    id: string;
    className?: string;
    title: string;
    preferTag?: string;
    manager: EditorManager;
    isOnlyChildRegion: boolean;
}
declare const _default: (props: HighlightBoxProps) => React.JSX.Element;
export default _default;

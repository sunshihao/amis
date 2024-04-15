import { ClassNamesFn } from 'amis-core';
import React from 'react';
import { EditorStoreType } from '../../store/editor';
export interface DialogListProps {
    classnames: ClassNamesFn;
    store: EditorStoreType;
}
declare const _default: ({ classnames: cx, store }: DialogListProps) => React.JSX.Element;
export default _default;

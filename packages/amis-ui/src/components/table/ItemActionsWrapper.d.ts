import React from 'react';
import { ClassNamesFn } from 'amis-core';
export interface ItemActionsProps {
    classnames: ClassNamesFn;
    children?: React.ReactNode | Array<React.ReactNode>;
    dom: HTMLTableRowElement;
}
export default class ItemActionsWrapper extends React.PureComponent<ItemActionsProps, {}> {
    render(): React.JSX.Element | undefined;
}

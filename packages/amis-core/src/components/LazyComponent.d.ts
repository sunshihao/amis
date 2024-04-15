/**
 * @file LazyComponent
 * @description
 * @author fex
 */
import React from 'react';
export interface LazyComponentProps {
    component?: React.ElementType;
    getComponent?: () => Promise<React.ElementType>;
    placeholder?: React.ReactNode;
    unMountOnHidden?: boolean;
    childProps?: object;
    [propName: string]: any;
}
export interface LazyComponentState {
    visible: boolean;
    component?: React.ElementType;
}
export default class LazyComponent extends React.Component<LazyComponentProps, LazyComponentState> {
    static defaultProps: {
        placeholder: React.JSX.Element;
        unMountOnHidden: boolean;
        partialVisibility: boolean;
    };
    mounted: boolean;
    constructor(props: LazyComponentProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleVisibleChange(visible: boolean, entry?: any): void;
    render(): React.ReactNode;
}

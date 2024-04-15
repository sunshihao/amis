/// <reference types="hoist-non-react-statics" />
import { ConditionBuilderConfig } from './config';
import { ConditionBuilderFields, ConditionBuilderFuncs } from './types';
import { ThemeProps } from 'amis-core';
import React from 'react';
import { FormulaPickerProps } from '../formula/Picker';
import type { ConditionGroupValue } from 'amis-core';
export interface CBGroupOrItemProps extends ThemeProps {
    builderMode?: 'simple' | 'full';
    config: ConditionBuilderConfig;
    value?: ConditionGroupValue;
    fields: ConditionBuilderFields;
    funcs?: ConditionBuilderFuncs;
    index: number;
    data?: any;
    draggable?: boolean;
    disabled?: boolean;
    searchable?: boolean;
    onChange: (value: ConditionGroupValue, index: number) => void;
    removeable?: boolean;
    onDragStart?: (e: React.MouseEvent) => void;
    onRemove?: (index: number) => void;
    fieldClassName?: string;
    formula?: FormulaPickerProps;
    popOverContainer?: any;
    renderEtrValue?: any;
    selectMode?: 'list' | 'tree' | 'chained';
    isCollapsed?: boolean;
    depth: number;
    isAddBtnVisibleOn?: (param: {
        depth: number;
        breadth: number;
    }) => boolean;
    isAddGroupBtnVisibleOn?: (param: {
        depth: number;
        breadth: number;
    }) => boolean;
    showIf?: boolean;
    formulaForIf?: FormulaPickerProps;
}
export declare class CBGroupOrItem extends React.Component<CBGroupOrItemProps> {
    state: {
        hover: boolean;
    };
    handleItemChange(value: any): void;
    handleItemRemove(): void;
    handlerHoverIn(e: any): void;
    handlerHoverOut(e: any): void;
    handleIfChange(condition: string): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof CBGroupOrItem>;
} & import("hoist-non-react-statics").NonReactStatics<typeof CBGroupOrItem, {}> & {
    ComposedComponent: typeof CBGroupOrItem;
};
export default _default;

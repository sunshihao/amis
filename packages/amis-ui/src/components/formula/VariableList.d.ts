/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
import type { VariableItem } from './CodeEditor';
import type { ItemRenderStates } from '../Selection';
import type { Option } from '../Select';
import type { TabsMode } from '../Tabs';
import { SpinnerExtraProps } from '../Spinner';
export interface VariableListProps extends ThemeProps, SpinnerExtraProps {
    className?: string;
    itemClassName?: string;
    value?: any;
    data: Array<VariableItem>;
    selectMode?: 'list' | 'tree' | 'tabs';
    tabsMode?: TabsMode;
    itemRender?: (option: Option, states: ItemRenderStates) => JSX.Element;
    placeholderRender?: (props: any) => JSX.Element | null;
    onSelect?: (item: VariableItem) => void;
    selfVariableName?: string;
    expandTree?: boolean;
}
declare function VariableList(props: VariableListProps): React.JSX.Element;
declare const _default: {
    new (props: Omit<VariableListProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<VariableListProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<VariableListProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<VariableListProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<VariableListProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<VariableListProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<VariableListProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<VariableListProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<VariableListProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<VariableListProps, keyof ThemeProps> & import("../../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof VariableList>;
} & import("hoist-non-react-statics").NonReactStatics<typeof VariableList, {}> & {
    ComposedComponent: typeof VariableList;
};
export default _default;

/**
 * @file Cascader
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { Option, Options } from './Select';
import type { OptionsControlProps } from 'amis-core';
export type CascaderOption = {
    text?: string;
    value?: string | number;
    valueField?: string;
    color?: string;
    disabled?: boolean;
    children?: Options;
    className?: string;
    [key: string]: any;
};
export interface CascaderProps extends OptionsControlProps {
    cascade?: boolean;
    noResultsText?: string;
    withChildren?: boolean;
    onlyChildren?: boolean;
    hideNodePathLabel?: boolean;
    mobileUI?: boolean;
    value?: (number | string)[];
    activeColor?: string;
    optionRender?: ({ option, selected }: {
        option: CascaderOption;
        selected: boolean;
    }) => React.ReactNode;
    onClose?: () => void;
    onConfirm?: (param: any) => void;
    multiple?: boolean;
}
export type CascaderTab = {
    options: Options;
};
export interface CascaderState {
    selectedOptions: Options;
    tabs: Array<{
        options: Options;
    }>;
    disableConfirm: boolean;
    activePaths: CascaderOption[];
}
export declare class Cascader extends React.Component<CascaderProps, CascaderState> {
    static defaultProps: {
        labelField: string;
        valueField: string;
    };
    tabsRef: React.RefObject<HTMLDivElement>;
    tabRef: React.RefObject<HTMLDivElement>;
    constructor(props: CascaderProps);
    componentDidMount(): void;
    getOptionParent(option: Option): any;
    dealParentSelect(option: Option, selectedOptions: Options): Options;
    flattenTreeWithLeafNodes(option: Option): any[];
    adjustOptionSelect(option: Option): boolean;
    getOnlyChildrenSelect(option: Option, selectedOptions?: Option[]): boolean | undefined;
    getSelectedChildNum(option: Option): number;
    dealOptionDisable(selectedOptions: Options): void;
    dealChildrenSelect(option: Option, selectedOptions: Options): Options;
    getParentTree: (option: Option, arr: Options) => Options;
    onSelect(option: CascaderOption, tabIndex: number): void;
    handleExpand(option: Option, tabIndex: number): void;
    getSubmitOptions(selectedOptions: Options): Options;
    confirm(): void;
    getSelectedOptions(): Option[];
    renderOption(option: CascaderOption, tabIndex: number): React.JSX.Element;
    renderOptions(options: Options, tabIndex: number): React.JSX.Element;
    renderTabs(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<CascaderProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<CascaderProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<CascaderProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<CascaderProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<CascaderProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<CascaderProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<CascaderProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<CascaderProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<CascaderProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<CascaderProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Cascader>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Cascader, {}> & {
    ComposedComponent: typeof Cascader;
};
export default _default;

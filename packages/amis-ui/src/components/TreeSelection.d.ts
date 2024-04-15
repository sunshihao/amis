/// <reference types="hoist-non-react-statics" />
import { BaseSelection, BaseSelectionProps } from './Selection';
import React from 'react';
import { Option } from './Select';
import { SpinnerExtraProps } from './Spinner';
export interface TreeSelectionProps extends BaseSelectionProps, SpinnerExtraProps {
    expand?: 'all' | 'first' | 'root' | 'none';
}
export interface TreeSelectionState {
    expanded: Array<string>;
}
export declare class TreeSelection extends BaseSelection<TreeSelectionProps, TreeSelectionState> {
    valueArray: Array<Option>;
    state: TreeSelectionState;
    static defaultProps: {
        expand: "first";
        placeholder: string;
        itemRender: typeof BaseSelection.itemRender;
        multiple: boolean;
        clearable: boolean;
        virtualThreshold: number;
        itemHeight: number;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: TreeSelectionProps): void;
    syncExpanded(): void;
    toggleOption(option: Option): void;
    toggleCollapsed(option: Option, index: string): void;
    renderItem(option: Option, index: number, indexes?: Array<number>): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
        placeholder?: string | undefined;
        multiple?: boolean | undefined;
        clearable?: boolean | undefined;
        itemHeight?: number | undefined;
        virtualThreshold?: number | undefined;
        expand?: "root" | "none" | "all" | "first" | undefined;
        itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof TreeSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TreeSelection, {}> & {
        ComposedComponent: typeof TreeSelection;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
        placeholder?: string | undefined;
        multiple?: boolean | undefined;
        clearable?: boolean | undefined;
        itemHeight?: number | undefined;
        virtualThreshold?: number | undefined;
        expand?: "root" | "none" | "all" | "first" | undefined;
        itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof TreeSelection>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TreeSelection, {}> & {
    ComposedComponent: typeof TreeSelection;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            expand?: "root" | "none" | "all" | "first" | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TreeSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                expand?: "root" | "none" | "all" | "first" | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof TreeSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TreeSelection, {}> & {
        ComposedComponent: typeof TreeSelection;
    };
};
export default _default;

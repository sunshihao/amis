/// <reference types="hoist-non-react-statics" />
/**
 * 级联多选框，支持无限极。从左侧到右侧一层层点选。
 */
import { BaseSelection, BaseSelectionProps } from './Selection';
import React from 'react';
import { Option } from './Select';
import { SpinnerExtraProps } from './Spinner';
export interface ChainedSelectionProps extends BaseSelectionProps, SpinnerExtraProps {
    defaultSelectedIndex?: string;
}
export interface ChainedSelectionState {
    selected: Array<string>;
}
export declare class ChainedSelection extends BaseSelection<ChainedSelectionProps, ChainedSelectionState> {
    valueArray: Array<Option>;
    state: ChainedSelectionState;
    componentDidMount(): void;
    selectOption(option: Option, depth: number, id: string): void;
    renderItem(option: Option, index: number, depth: number, id: string, styles?: object): React.JSX.Element;
    renderOption(option: Option, index: number, depth: number, id: string, styles?: object): React.JSX.Element;
    renderCheckAll(): React.JSX.Element | null;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
        placeholder?: string | undefined;
        multiple?: boolean | undefined;
        clearable?: boolean | undefined;
        itemHeight?: number | undefined;
        virtualThreshold?: number | undefined;
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
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ChainedSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ChainedSelection, {}> & {
        ComposedComponent: typeof ChainedSelection;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
        placeholder?: string | undefined;
        multiple?: boolean | undefined;
        clearable?: boolean | undefined;
        itemHeight?: number | undefined;
        virtualThreshold?: number | undefined;
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
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof ChainedSelection>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ChainedSelection, {}> & {
    ComposedComponent: typeof ChainedSelection;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "inline" | "options" | "deferField" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "defaultSelectedIndex"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ChainedSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ChainedSelection, {}> & {
        ComposedComponent: typeof ChainedSelection;
    };
};
export default _default;

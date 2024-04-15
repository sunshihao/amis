/**
 * 关联多选框，仅支持两层关联选择。
 * 左边先点选，然后右边再次点选。
 * 可以满足，先从 tree 中选中一个元素，然后查出来一个列表再次勾选。
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { BaseSelectionProps, BaseSelection } from './Selection';
import { Options, Option } from './Select';
import { SpinnerExtraProps } from './Spinner';
export interface AssociatedSelectionProps extends BaseSelectionProps, SpinnerExtraProps {
    leftOptions: Options;
    leftDefaultValue?: any;
    leftMode?: 'tree' | 'list' | 'group';
    rightMode?: 'table' | 'list' | 'group' | 'tree' | 'chained';
    columns?: Array<any>;
    cellRender?: (column: {
        name: string;
        label: string;
        [propName: string]: any;
    }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
}
export interface AssociatedSelectionState {
    leftValue?: Option;
}
export declare class AssociatedSelection extends BaseSelection<AssociatedSelectionProps, AssociatedSelectionState> {
    state: AssociatedSelectionState;
    componentDidMount(): void;
    leftOption2Value(option: Option): any;
    handleLeftSelect(value: Option): void;
    handleLeftDeferLoad(option: Option): void;
    handleRetry(option: Option): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        readonly props: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        new (props: Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            readonly props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        ComposedComponent: React.ComponentType<typeof AssociatedSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof AssociatedSelection, {}> & {
        ComposedComponent: typeof AssociatedSelection;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        readonly props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
    ComposedComponent: React.ComponentType<typeof AssociatedSelection>;
} & import("hoist-non-react-statics").NonReactStatics<typeof AssociatedSelection, {}> & {
    ComposedComponent: typeof AssociatedSelection;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            readonly props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("amis-core").LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "loadingConfig" | "columns" | "inline" | "options" | "deferField" | "leftOptions" | "leftMode" | "rightMode" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender" | "cellRender" | "leftDefaultValue"> & {
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
        ComposedComponent: React.ComponentType<typeof AssociatedSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof AssociatedSelection, {}> & {
        ComposedComponent: typeof AssociatedSelection;
    };
};
export default _default;

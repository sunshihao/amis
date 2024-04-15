/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps, LocaleProps } from 'amis-core';
import { Options } from './Select';
import { BaseSelection, BaseSelectionProps } from './Selection';
export interface ChainedDropDownSelectionProps extends ThemeProps, LocaleProps, BaseSelectionProps {
    options: Array<any>;
    value: any;
    onChange: (value: any) => void;
    disabled?: boolean;
    searchable?: boolean;
    popOverContainer?: any;
}
interface ChainedDropdownSelectionState {
    stacks: Array<Options>;
    values: Array<string>;
}
export declare class ChainedDropdownSelection extends BaseSelection<ChainedDropDownSelectionProps, ChainedDropdownSelectionState> {
    constructor(props: ChainedDropDownSelectionProps);
    componentDidUpdate(prevProps: ChainedDropDownSelectionProps): void;
    computed(value: string, options: Options): {
        values: string[];
        stacks: Options[];
    };
    getFlatOptions(options: Options): Pick<import("amis-core").Option, keyof import("amis-core").Option>[];
    handleSelect(index: number, value: string): void;
    computedStask(values: string[]): Options[];
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
        placeholder?: string | undefined;
        multiple?: boolean | undefined;
        clearable?: boolean | undefined;
        itemHeight?: number | undefined;
        virtualThreshold?: number | undefined;
        itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ChainedDropdownSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ChainedDropdownSelection, {}> & {
        ComposedComponent: typeof ChainedDropdownSelection;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
        placeholder?: string | undefined;
        multiple?: boolean | undefined;
        clearable?: boolean | undefined;
        itemHeight?: number | undefined;
        virtualThreshold?: number | undefined;
        itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof ChainedDropdownSelection>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ChainedDropdownSelection, {}> & {
    ComposedComponent: typeof ChainedDropdownSelection;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
            placeholder?: string | undefined;
            multiple?: boolean | undefined;
            clearable?: boolean | undefined;
            itemHeight?: number | undefined;
            virtualThreshold?: number | undefined;
            itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedDropDownSelectionProps, keyof LocaleProps>, "style" | "disabled" | "className" | "labelClassName" | "value" | "onChange" | "theme" | "itemClassName" | "valueField" | "testIdBuilder" | "popOverContainer" | "inline" | "options" | "deferField" | "searchable" | "mobileUI" | "classnames" | "classPrefix" | "labelField" | "onClick" | "checkAll" | "checkAllLabel" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "virtualListHeight" | "placeholderRender"> & {
                placeholder?: string | undefined;
                multiple?: boolean | undefined;
                clearable?: boolean | undefined;
                itemHeight?: number | undefined;
                virtualThreshold?: number | undefined;
                itemRender?: ((option: import("amis-core").Option, states: import("./Selection").ItemRenderStates) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ChainedDropdownSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ChainedDropdownSelection, {}> & {
        ComposedComponent: typeof ChainedDropdownSelection;
    };
};
export default _default;

/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps, TestIdBuilder } from 'amis-core';
export type ValueType = string | number;
export interface NumberProps extends ThemeProps {
    name?: string;
    placeholder?: string;
    max?: ValueType;
    min?: ValueType;
    step?: number;
    showSteps?: boolean;
    precision?: number;
    disabled?: boolean;
    /**
     * 只读
     */
    readOnly?: boolean;
    value?: ValueType;
    onChange?: (value: number) => void;
    /**
     * 边框模式，全边框，还是半边框，或者没边框。
     */
    borderMode?: 'full' | 'half' | 'none';
    /**
     * 指定输入框展示值的格式
     */
    formatter?: Function;
    /**
     * 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用
     */
    parser?: Function;
    inputRef?: Function;
    /**
     * 获取焦点事件
     */
    onFocus?: Function;
    /**
     * 失去焦点事件
     */
    onBlur?: Function;
    /**
     * 指定输入框是基础输入框，增强输入框
     */
    displayMode?: 'base' | 'enhance';
    keyboard?: Boolean;
    /**
     * 是否是大数
     */
    big?: boolean;
    /**
     * 清空输入内容时的值
     */
    resetValue?: any;
    /**
     * 是否在清空内容时从数据域中删除该表单项对应的值
     */
    clearValueOnEmpty?: boolean;
    /**
     * 数字输入框类名
     */
    inputControlClassName?: string;
    testIdBuilder?: TestIdBuilder;
}
export interface NumberState {
    focused: boolean;
}
export declare class NumberInput extends React.Component<NumberProps, NumberState> {
    static defaultProps: Pick<NumberProps, 'step' | 'readOnly' | 'borderMode' | 'resetValue'>;
    /**
     * 处理value值
     *
     * @param value value 值
     * @param min 最小值
     * @param max 最大值
     * @param precision 精度
     * @param resetValue 重置值
     * @param isBig 是否为大数模式
     */
    static normalizeValue: (value: any, min: ValueType | undefined, max: ValueType | undefined, precision: number, resetValue: any, clearValueOnEmpty?: boolean, isBig?: boolean) => any;
    /**
     * 处理value值（仅使用 resetValue 和 clearValueOnEmpty）
     *
     * @param value value 值
     * @param resetValue 重置值
     * @param clearValueOnEmpty 是否在清空内容时从数据域中删除该表单项对应的值
     */
    static normalizeValue2: (value: any, resetValue: any, clearValueOnEmpty?: boolean) => any;
    /**
     * 获取精度，合法的精度为0和正整数，不合法的精度统一转化为0
     * 若设置了step，则会基于step的精度生成，最终使用更高的精度
     *
     * @param precision 精度
     * @param step 步长
     */
    static normalizePrecision: (precision: any, step?: number) => number;
    /**
     * 是否是 bigNumber，如果输入的内容是字符串就自动开启
     */
    isBig: boolean;
    constructor(props: NumberProps);
    componentDidUpdate(prevProps: NumberProps): void;
    handleChange(value: any): void;
    handleFocus(e: React.SyntheticEvent<HTMLElement>): void;
    handleBlur(e: React.SyntheticEvent<HTMLElement>): void;
    handleClick(e: React.SyntheticEvent<HTMLElement>): void;
    handleEnhanceModeChange(action: 'add' | 'subtract', e: React.MouseEvent): void;
    renderBase(): React.JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<NumberProps, keyof ThemeProps>, "placeholder" | "disabled" | "name" | "value" | "onChange" | "testIdBuilder" | "onFocus" | "onBlur" | "big" | "inputRef" | "min" | "max" | "keyboard" | "inputControlClassName" | "showSteps" | "precision" | "formatter" | "parser" | "displayMode" | "clearValueOnEmpty"> & {
        readOnly?: boolean | undefined;
        resetValue?: any;
        borderMode?: "full" | "half" | "none" | undefined;
        step?: number | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "placeholder" | "disabled" | "name" | "value" | "onChange" | "testIdBuilder" | "onFocus" | "onBlur" | "big" | "inputRef" | "min" | "max" | "keyboard" | "inputControlClassName" | "showSteps" | "precision" | "formatter" | "parser" | "displayMode" | "clearValueOnEmpty"> & {
            readOnly?: boolean | undefined;
            resetValue?: any;
            borderMode?: "full" | "half" | "none" | undefined;
            step?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "placeholder" | "disabled" | "name" | "value" | "onChange" | "testIdBuilder" | "onFocus" | "onBlur" | "big" | "inputRef" | "min" | "max" | "keyboard" | "inputControlClassName" | "showSteps" | "precision" | "formatter" | "parser" | "displayMode" | "clearValueOnEmpty"> & {
            readOnly?: boolean | undefined;
            resetValue?: any;
            borderMode?: "full" | "half" | "none" | undefined;
            step?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "placeholder" | "disabled" | "name" | "value" | "onChange" | "testIdBuilder" | "onFocus" | "onBlur" | "big" | "inputRef" | "min" | "max" | "keyboard" | "inputControlClassName" | "showSteps" | "precision" | "formatter" | "parser" | "displayMode" | "clearValueOnEmpty"> & {
            readOnly?: boolean | undefined;
            resetValue?: any;
            borderMode?: "full" | "half" | "none" | undefined;
            step?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "placeholder" | "disabled" | "name" | "value" | "onChange" | "testIdBuilder" | "onFocus" | "onBlur" | "big" | "inputRef" | "min" | "max" | "keyboard" | "inputControlClassName" | "showSteps" | "precision" | "formatter" | "parser" | "displayMode" | "clearValueOnEmpty"> & {
            readOnly?: boolean | undefined;
            resetValue?: any;
            borderMode?: "full" | "half" | "none" | undefined;
            step?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "placeholder" | "disabled" | "name" | "value" | "onChange" | "testIdBuilder" | "onFocus" | "onBlur" | "big" | "inputRef" | "min" | "max" | "keyboard" | "inputControlClassName" | "showSteps" | "precision" | "formatter" | "parser" | "displayMode" | "clearValueOnEmpty"> & {
            readOnly?: boolean | undefined;
            resetValue?: any;
            borderMode?: "full" | "half" | "none" | undefined;
            step?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "placeholder" | "disabled" | "name" | "value" | "onChange" | "testIdBuilder" | "onFocus" | "onBlur" | "big" | "inputRef" | "min" | "max" | "keyboard" | "inputControlClassName" | "showSteps" | "precision" | "formatter" | "parser" | "displayMode" | "clearValueOnEmpty"> & {
            readOnly?: boolean | undefined;
            resetValue?: any;
            borderMode?: "full" | "half" | "none" | undefined;
            step?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "placeholder" | "disabled" | "name" | "value" | "onChange" | "testIdBuilder" | "onFocus" | "onBlur" | "big" | "inputRef" | "min" | "max" | "keyboard" | "inputControlClassName" | "showSteps" | "precision" | "formatter" | "parser" | "displayMode" | "clearValueOnEmpty"> & {
            readOnly?: boolean | undefined;
            resetValue?: any;
            borderMode?: "full" | "half" | "none" | undefined;
            step?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "placeholder" | "disabled" | "name" | "value" | "onChange" | "testIdBuilder" | "onFocus" | "onBlur" | "big" | "inputRef" | "min" | "max" | "keyboard" | "inputControlClassName" | "showSteps" | "precision" | "formatter" | "parser" | "displayMode" | "clearValueOnEmpty"> & {
            readOnly?: boolean | undefined;
            resetValue?: any;
            borderMode?: "full" | "half" | "none" | undefined;
            step?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "placeholder" | "disabled" | "name" | "value" | "onChange" | "testIdBuilder" | "onFocus" | "onBlur" | "big" | "inputRef" | "min" | "max" | "keyboard" | "inputControlClassName" | "showSteps" | "precision" | "formatter" | "parser" | "displayMode" | "clearValueOnEmpty"> & {
            readOnly?: boolean | undefined;
            resetValue?: any;
            borderMode?: "full" | "half" | "none" | undefined;
            step?: number | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof NumberInput>;
} & import("hoist-non-react-statics").NonReactStatics<typeof NumberInput, {}> & {
    ComposedComponent: typeof NumberInput;
};
export default _default;

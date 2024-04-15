/**
 * @file Range
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import type { ThemeProps } from 'amis-core';
type MarksType = {
    [index: number | string]: Record<number, React.ReactNode | {
        style?: React.CSSProperties;
        label?: string;
    }>;
};
export interface MultipleValue {
    min: number;
    max: number;
}
export type Value = string | MultipleValue | number | [number, number];
export type FormatValue = MultipleValue | number;
export type TooltipPosType = 'auto' | 'top' | 'right' | 'bottom' | 'left';
export type InputRangeRendererEvent = 'change' | 'blur' | 'focus';
export type InputRangeRendererAction = 'clear';
export interface RangeItemProps extends ThemeProps {
    [propName: string]: any;
}
export declare class Range extends React.Component<RangeItemProps, any> {
    multipleValue: MultipleValue;
    trackRef: React.RefObject<HTMLDivElement>;
    /**
     * 接收组件value变换
     * value变换 -> Range.updateValue
     * @param value
     */
    updateValue(value: FormatValue): void;
    /**
     * 获取 坐标、宽高
     */
    getBoundingClient(dom: Element): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    /**
     * 坐标 -> 滑块值
     * @param pageX target.target 坐标
     * @returns 滑块值
     */
    pageXToValue(pageX: number): any;
    /**
     * 滑块改变事件
     * @param pageX target.pageX 坐标
     * @param type min max
     * @returns void
     */
    onChange(pageX: number, type?: string): void;
    /**
     * 获取step为单位的value
     * @param value 拖拽后计算的value
     * @param step 步长
     * @returns step为单位的value
     */
    getStepValue(value: number, step: number): number;
    /**
     * 点击滑轨 -> 触发onchange 改变value
     * @param e event
     * @returns void
     */
    onClickTrack(e: any): void;
    /**
     * 设置步长
     * @returns ReactNode
     */
    renderSteps(): any;
    /**
     * 双滑块改变最大值、最小值
     * @param pageX 拖拽后的pageX
     * @param type 'min' | 'max'
     */
    onGetChangeValue(pageX: number, type: keyof MultipleValue): void;
    /**
     * 计算每个标记 position.left
     * @param value 滑块值
     * @returns
     */
    getOffsetLeft(value: number | string, getNumber?: boolean): string | number;
    /**
     * 计算每个刻度标记mark 的最大宽度 max-width
     * 通过给父元素div的width赋值，从而继承
     * @param value 刻度标记key
     * @param marks 整个刻度标记对象
     * @returns 刻度标记的最大宽度 string
     */
    getMarkMaxWidth(value: keyof MarksType, marks: MarksType): string;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<RangeItemProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Range>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Range, {}> & {
    ComposedComponent: typeof Range;
};
export default _default;

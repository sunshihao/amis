/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn, ClassName, ThemeProps } from 'amis-core';
interface ColorProps {
    value: number;
    color: string;
}
export interface ThresholdProps {
    value: string;
    color?: string;
}
export type ColorMapType = Array<string> | Array<ColorProps> | string;
interface ProgressProps extends ThemeProps {
    type: 'line' | 'circle' | 'dashboard';
    showLabel: boolean;
    value: number;
    stripe?: boolean;
    animate?: boolean;
    map?: ColorMapType;
    placeholder?: string;
    format?: (value?: number) => JSX.Element;
    gapDegree?: number;
    gapPosition?: 'top' | 'bottom' | 'left' | 'right';
    strokeWidth?: number;
    progressClassName?: ClassName;
    classnames: ClassNamesFn;
    threshold: ThresholdProps | ThresholdProps[];
    showThresholdText: boolean;
}
export declare class Progress extends React.Component<ProgressProps, Object> {
    static defaultProps: Partial<ProgressProps>;
    getCurrentColor(): string;
    getLevelColor(color: Array<string> | Array<ColorProps>): string;
    getColorArray(color: Array<string> | Array<ColorProps>): ColorProps[];
    getLabel(prefixCls: string): React.JSX.Element | null;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<ProgressProps, keyof ThemeProps>, never> & {
        placeholder?: string | undefined;
        type?: "line" | "circle" | "dashboard" | undefined;
        value?: number | undefined;
        format?: ((value?: number | undefined) => JSX.Element) | undefined;
        map?: ColorMapType | undefined;
        animate?: boolean | undefined;
        threshold?: ThresholdProps | ThresholdProps[] | undefined;
        showLabel?: boolean | undefined;
        progressClassName?: ClassName | undefined;
        strokeWidth?: number | undefined;
        gapDegree?: number | undefined;
        gapPosition?: "right" | "left" | "top" | "bottom" | undefined;
        stripe?: boolean | undefined;
        showThresholdText?: boolean | undefined;
    } & {
        style?: {
            [propName: string]: any;
        } | undefined;
        className?: string | undefined;
        theme?: string | undefined;
        mobileUI?: boolean | undefined;
        classnames?: ClassNamesFn | undefined;
        classPrefix?: string | undefined;
    } & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & {
            placeholder?: string | undefined;
            type?: "line" | "circle" | "dashboard" | undefined;
            value?: number | undefined;
            format?: ((value?: number | undefined) => JSX.Element) | undefined;
            map?: ColorMapType | undefined;
            animate?: boolean | undefined;
            threshold?: ThresholdProps | ThresholdProps[] | undefined;
            showLabel?: boolean | undefined;
            progressClassName?: ClassName | undefined;
            strokeWidth?: number | undefined;
            gapDegree?: number | undefined;
            gapPosition?: "right" | "left" | "top" | "bottom" | undefined;
            stripe?: boolean | undefined;
            showThresholdText?: boolean | undefined;
        } & {
            style?: {
                [propName: string]: any;
            } | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & {
            placeholder?: string | undefined;
            type?: "line" | "circle" | "dashboard" | undefined;
            value?: number | undefined;
            format?: ((value?: number | undefined) => JSX.Element) | undefined;
            map?: ColorMapType | undefined;
            animate?: boolean | undefined;
            threshold?: ThresholdProps | ThresholdProps[] | undefined;
            showLabel?: boolean | undefined;
            progressClassName?: ClassName | undefined;
            strokeWidth?: number | undefined;
            gapDegree?: number | undefined;
            gapPosition?: "right" | "left" | "top" | "bottom" | undefined;
            stripe?: boolean | undefined;
            showThresholdText?: boolean | undefined;
        } & {
            style?: {
                [propName: string]: any;
            } | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & {
            placeholder?: string | undefined;
            type?: "line" | "circle" | "dashboard" | undefined;
            value?: number | undefined;
            format?: ((value?: number | undefined) => JSX.Element) | undefined;
            map?: ColorMapType | undefined;
            animate?: boolean | undefined;
            threshold?: ThresholdProps | ThresholdProps[] | undefined;
            showLabel?: boolean | undefined;
            progressClassName?: ClassName | undefined;
            strokeWidth?: number | undefined;
            gapDegree?: number | undefined;
            gapPosition?: "right" | "left" | "top" | "bottom" | undefined;
            stripe?: boolean | undefined;
            showThresholdText?: boolean | undefined;
        } & {
            style?: {
                [propName: string]: any;
            } | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & {
            placeholder?: string | undefined;
            type?: "line" | "circle" | "dashboard" | undefined;
            value?: number | undefined;
            format?: ((value?: number | undefined) => JSX.Element) | undefined;
            map?: ColorMapType | undefined;
            animate?: boolean | undefined;
            threshold?: ThresholdProps | ThresholdProps[] | undefined;
            showLabel?: boolean | undefined;
            progressClassName?: ClassName | undefined;
            strokeWidth?: number | undefined;
            gapDegree?: number | undefined;
            gapPosition?: "right" | "left" | "top" | "bottom" | undefined;
            stripe?: boolean | undefined;
            showThresholdText?: boolean | undefined;
        } & {
            style?: {
                [propName: string]: any;
            } | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & {
            placeholder?: string | undefined;
            type?: "line" | "circle" | "dashboard" | undefined;
            value?: number | undefined;
            format?: ((value?: number | undefined) => JSX.Element) | undefined;
            map?: ColorMapType | undefined;
            animate?: boolean | undefined;
            threshold?: ThresholdProps | ThresholdProps[] | undefined;
            showLabel?: boolean | undefined;
            progressClassName?: ClassName | undefined;
            strokeWidth?: number | undefined;
            gapDegree?: number | undefined;
            gapPosition?: "right" | "left" | "top" | "bottom" | undefined;
            stripe?: boolean | undefined;
            showThresholdText?: boolean | undefined;
        } & {
            style?: {
                [propName: string]: any;
            } | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & {
            placeholder?: string | undefined;
            type?: "line" | "circle" | "dashboard" | undefined;
            value?: number | undefined;
            format?: ((value?: number | undefined) => JSX.Element) | undefined;
            map?: ColorMapType | undefined;
            animate?: boolean | undefined;
            threshold?: ThresholdProps | ThresholdProps[] | undefined;
            showLabel?: boolean | undefined;
            progressClassName?: ClassName | undefined;
            strokeWidth?: number | undefined;
            gapDegree?: number | undefined;
            gapPosition?: "right" | "left" | "top" | "bottom" | undefined;
            stripe?: boolean | undefined;
            showThresholdText?: boolean | undefined;
        } & {
            style?: {
                [propName: string]: any;
            } | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & {
            placeholder?: string | undefined;
            type?: "line" | "circle" | "dashboard" | undefined;
            value?: number | undefined;
            format?: ((value?: number | undefined) => JSX.Element) | undefined;
            map?: ColorMapType | undefined;
            animate?: boolean | undefined;
            threshold?: ThresholdProps | ThresholdProps[] | undefined;
            showLabel?: boolean | undefined;
            progressClassName?: ClassName | undefined;
            strokeWidth?: number | undefined;
            gapDegree?: number | undefined;
            gapPosition?: "right" | "left" | "top" | "bottom" | undefined;
            stripe?: boolean | undefined;
            showThresholdText?: boolean | undefined;
        } & {
            style?: {
                [propName: string]: any;
            } | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & {
            placeholder?: string | undefined;
            type?: "line" | "circle" | "dashboard" | undefined;
            value?: number | undefined;
            format?: ((value?: number | undefined) => JSX.Element) | undefined;
            map?: ColorMapType | undefined;
            animate?: boolean | undefined;
            threshold?: ThresholdProps | ThresholdProps[] | undefined;
            showLabel?: boolean | undefined;
            progressClassName?: ClassName | undefined;
            strokeWidth?: number | undefined;
            gapDegree?: number | undefined;
            gapPosition?: "right" | "left" | "top" | "bottom" | undefined;
            stripe?: boolean | undefined;
            showThresholdText?: boolean | undefined;
        } & {
            style?: {
                [propName: string]: any;
            } | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & {
            placeholder?: string | undefined;
            type?: "line" | "circle" | "dashboard" | undefined;
            value?: number | undefined;
            format?: ((value?: number | undefined) => JSX.Element) | undefined;
            map?: ColorMapType | undefined;
            animate?: boolean | undefined;
            threshold?: ThresholdProps | ThresholdProps[] | undefined;
            showLabel?: boolean | undefined;
            progressClassName?: ClassName | undefined;
            strokeWidth?: number | undefined;
            gapDegree?: number | undefined;
            gapPosition?: "right" | "left" | "top" | "bottom" | undefined;
            stripe?: boolean | undefined;
            showThresholdText?: boolean | undefined;
        } & {
            style?: {
                [propName: string]: any;
            } | undefined;
            className?: string | undefined;
            theme?: string | undefined;
            mobileUI?: boolean | undefined;
            classnames?: ClassNamesFn | undefined;
            classPrefix?: string | undefined;
        } & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Progress>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Progress, {}> & {
    ComposedComponent: typeof Progress;
};
export default _default;

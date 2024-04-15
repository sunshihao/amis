/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassName, ThemeProps } from 'amis-core';
export declare enum StepStatus {
    wait = "wait",
    process = "process",
    finish = "finish",
    error = "error"
}
export type StepObject = {
    className?: ClassName;
    /**
     * 标题
     */
    title?: string | JSX.Element;
    /**
     * 子标题
     */
    subTitle?: string | JSX.Element;
    /**
     * 图标
     */
    icon?: string;
    value?: string | number;
    /**
     * 描述
     */
    description?: string | JSX.Element;
    status?: StepStatus;
    iconClassName?: string;
};
export interface StepsObject {
    /**
     * 指定为 Steps 步骤条渲染器
     */
    type: 'steps';
    /**
     * 步骤
     */
    steps?: Array<StepObject>;
    /**
     * API 或 数据映射
     */
    source?: string;
    /**
     * 指定当前步骤
     */
    value?: number | string;
    /**
     * 变量映射
     */
    name?: string;
    status: StepStatus;
    /**
     * 展示模式
     */
    mode?: 'horizontal' | 'vertical' | 'simple';
    /**
     * 标签放置位置
     */
    labelPlacement?: 'horizontal' | 'vertical';
}
export interface StepsProps extends ThemeProps {
    steps: StepObject[];
    className: string;
    current: number;
    status?: StepStatus | {
        [propName: string]: StepStatus;
    };
    mode?: 'horizontal' | 'vertical' | 'simple';
    labelPlacement?: 'horizontal' | 'vertical';
    progressDot?: boolean;
    onClickStep?: (i: number, step: StepObject) => void;
}
export declare function Steps(props: StepsProps): React.JSX.Element;
declare const _default: {
    new (props: Omit<StepsProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<StepsProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<StepsProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<StepsProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<StepsProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<StepsProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<StepsProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<StepsProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<StepsProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<StepsProps, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Steps>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Steps, {}> & {
    ComposedComponent: typeof Steps;
};
export default _default;

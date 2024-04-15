/// <reference types="hoist-non-react-statics" />
import moment from 'moment';
import React from 'react';
import { LocaleProps, ClassNamesFn } from 'amis-core';
import type { TestIdBuilder } from 'amis-core';
interface CustomTimeViewProps extends LocaleProps {
    viewDate: moment.Moment;
    selectedDate: moment.Moment;
    dateFormat?: boolean | string;
    minDate: moment.Moment;
    maxDate: moment.Moment;
    subtractTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    addTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    showView: (view: string) => () => void;
    updateSelectedDate: (event: React.MouseEvent<any>, close?: boolean) => void;
    timeFormat: string;
    requiredConfirm?: boolean;
    isEndDate?: boolean;
    classnames: ClassNamesFn;
    setTime: (type: string, amount: number) => void;
    scrollToTop: (type: string, amount: number, i: number, lable?: string) => void;
    onClose?: () => void;
    onConfirm?: (value: number[], types: string[]) => void;
    setDateTimeState: (state: any, callback?: () => void) => void;
    mobileUI: boolean;
    showToolbar?: boolean;
    onChange: (value: moment.Moment) => void;
    timeConstraints?: any;
    timeRangeHeader?: string;
    testIdBuilder?: TestIdBuilder;
}
interface CustomTimeViewState {
    daypart: any;
    hours: any;
    counters: Array<string>;
    [propName: string]: any;
}
export type TimeScale = 'hours' | 'minutes' | 'seconds' | 'milliseconds';
export declare class CustomTimeView extends React.Component<CustomTimeViewProps & LocaleProps, CustomTimeViewState> {
    padValues: {
        hours: number;
        minutes: number;
        seconds: number;
        milliseconds: number;
    };
    timeConstraints: {
        hours: {
            min: number;
            max: number;
            step: number;
        };
        minutes: {
            min: number;
            max: number;
            step: number;
        };
        seconds: {
            min: number;
            max: number;
            step: number;
        };
        milliseconds: {
            min: number;
            max: number;
            step: number;
        };
    };
    static defaultProps: {
        showToolbar: boolean;
    };
    timer?: any;
    increaseTimer?: any;
    /** 基于 timeConstraints 计算出的时间列表 */
    timeList: string[];
    constructor(props: any);
    componentDidMount(): void;
    shoudExtractTimeConstraintsList: () => boolean;
    updateSelectedDate: (event: React.MouseEvent<any>) => void;
    componentDidUpdate(preProps: CustomTimeViewProps): void;
    onStartClicking(action: any, type: string): () => void;
    updateMilli(e: any): void;
    renderHeader(): React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement> | null;
    toggleDayPart(type: 'hours'): string;
    increase(type: TimeScale): string;
    decrease(type: TimeScale): string;
    pad(type: TimeScale, value: number): string;
    disableContextMenu(event: React.MouseEvent<any>): boolean;
    calculateState(props: CustomTimeViewProps): {
        hours: number;
        minutes: string;
        seconds: string;
        milliseconds: string;
        daypart: any;
        counters: string[];
    };
    renderDayPart: () => React.JSX.Element;
    getCounterValue: (type: string) => number;
    renderCounter: (type: TimeScale | 'daypart') => React.JSX.Element | null;
    onConfirm: (value: (number | string)[]) => void;
    getDayPartOptions: () => {
        text: any;
        value: string;
    }[];
    onPickerChange: (value: (number | string)[], index: number) => void;
    renderTimeViewPicker: () => React.JSX.Element;
    setTime: (type: TimeScale, value: number) => void;
    scrollToTop: (type: TimeScale, value: number, i: number, label?: string) => void;
    /**
     * 选择当前时间，如果设置了timeConstraints，则选择最接近的时间
     */
    selectNowTime: () => void;
    confirm: () => void;
    cancel: () => void;
    computedTimeOptions(timeScale: TimeScale): {
        label: string;
        value: string;
    }[];
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<any, keyof LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<any>;
} & import("hoist-non-react-statics").NonReactStatics<any, {}> & {
    ComposedComponent: any;
};
export default _default;

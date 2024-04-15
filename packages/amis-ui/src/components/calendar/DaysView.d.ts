/// <reference types="hoist-non-react-statics" />
import moment from 'moment';
import React from 'react';
import { LocaleProps, ClassNamesFn } from 'amis-core';
import type { RendererEnv, TestIdBuilder } from 'amis-core';
import { PickerOption } from '../PickerColumn';
import { DateType } from './Calendar';
import type { Moment } from 'moment';
import type { TimeScale } from './TimeView';
import type { ViewMode } from './Calendar';
interface CustomDaysViewProps extends LocaleProps {
    classPrefix?: string;
    prevIcon?: string;
    nextIcon?: string;
    viewDate: moment.Moment;
    selectedDate: moment.Moment;
    minDate: moment.Moment;
    maxDate: moment.Moment;
    mobileUI: boolean;
    embed: boolean;
    timeFormat: string;
    requiredConfirm?: boolean;
    isEndDate?: boolean;
    renderDay?: Function;
    onClose?: () => void;
    onChange: (value: moment.Moment, viewMode?: Extract<ViewMode, 'time'>) => void;
    onClick: (event: React.MouseEvent<any>) => void;
    onMouseEnter: (event: React.MouseEvent<any>) => void;
    onMouseLeave: (event: React.MouseEvent<any>) => void;
    onConfirm?: (value: number[], types: DateType[]) => void;
    setDateTimeState: (state: any) => void;
    showTime: () => void;
    setTime: (type: string, amount: number) => void;
    scrollToTop: (type: string, amount: number, i: number, lable?: string) => void;
    subtractTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    addTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    isValidDate?: (currentDate: moment.Moment, selected?: moment.Moment) => boolean;
    showView: (view: string) => () => void;
    updateSelectedDate: (event: React.MouseEvent<any>, close?: boolean) => void;
    handleClickOutside: () => void;
    classnames: ClassNamesFn;
    schedules?: Array<{
        startTime: Date;
        endTime: Date;
        content: any;
        className?: string;
    }>;
    env?: RendererEnv;
    largeMode?: boolean;
    todayActiveStyle?: React.CSSProperties;
    onScheduleClick?: (scheduleData: any) => void;
    hideHeader?: boolean;
    getColumns: (types: DateType[], dateBoundary: void) => any;
    getDateBoundary: (currentDate: moment.Moment) => any;
    timeConstraints?: any;
    testIdBuilder?: TestIdBuilder;
}
export declare class CustomDaysView extends React.Component<CustomDaysViewProps> {
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
    state: {
        columns: {
            options: PickerOption[];
        }[];
        types: DateType[];
        pickerValue: number[];
        uniqueTag: any;
    };
    getDaysOfWeek(locale: any): any[];
    alwaysValidDate(): number;
    renderDays(): React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>[];
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<CustomDaysViewProps>, prevState: Readonly<{}>, snapshot?: any): void;
    setupTime(date: Moment, timeFormat: string, mode?: 'init'): void;
    getColumnsWithUnit(columns: {
        options: PickerOption[];
    }[]): {
        options: PickerOption[];
    }[];
    updateSelectedDate: (event: React.MouseEvent<any>) => void;
    showTime: () => React.JSX.Element;
    setTime: (type: 'hours' | 'minutes' | 'seconds' | 'milliseconds', value: number) => void;
    scrollToTop: (type: 'hours' | 'minutes' | 'seconds' | 'milliseconds', value: number, i: number, label?: string) => void;
    confirm: () => void;
    cancel: () => void;
    curfilterHtml: (content: any) => any;
    renderDay: (props: any, currentDate: moment.Moment) => React.JSX.Element;
    /** 时间选择器数据源 */
    computedTimeOptions(timeScale: TimeScale): {
        label: string;
        value: string;
    }[];
    renderTimes: () => React.JSX.Element;
    renderFooter: () => React.JSX.Element | null;
    onPickerConfirm: (value: number[]) => void;
    onPickerChange: (value: number[], index: number) => void;
    renderPicker: () => React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<CustomDaysViewProps, keyof LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<React.ComponentClass<CustomDaysViewProps, any>>;
} & import("hoist-non-react-statics").NonReactStatics<React.ComponentClass<CustomDaysViewProps, any>, {}> & {
    ComposedComponent: React.ComponentClass<CustomDaysViewProps, any>;
};
export default _default;

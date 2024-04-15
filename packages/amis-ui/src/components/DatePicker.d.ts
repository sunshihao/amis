/**
 * @file DatePicker
 * @description 时间选择器组件
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import moment from 'moment';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
import type { Moment } from 'moment';
import type { RendererEnv, TestIdBuilder } from 'amis-core';
import type { ChangeEventViewMode } from './calendar/Calendar';
export type ShortCutDate = {
    label: string;
    /** 支持表达式 */
    date: moment.Moment | string;
};
export type ShortCutDateRange = {
    label: string;
    startDate?: moment.Moment | string;
    endDate?: moment.Moment | string;
};
export type ShortCuts = {
    label: string;
    value: string;
} | ShortCutDate | ShortCutDateRange;
export interface DateProps extends LocaleProps, ThemeProps {
    viewMode: 'years' | 'months' | 'days' | 'time' | 'quarters';
    className?: string;
    popoverClassName?: string;
    placeholder?: string;
    inputFormat?: string;
    displayFormat?: string;
    timeFormat?: string;
    format?: string;
    valueFormat?: string;
    closeOnSelect: boolean;
    disabled?: boolean;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    minDateRaw?: string;
    maxDateRaw?: string;
    clearable?: boolean;
    defaultValue?: any;
    utc?: boolean;
    onChange: (value: any) => void;
    value?: any;
    shortcuts: string | Array<ShortCuts>;
    overlayPlacement: string;
    dateFormat?: string;
    timeConstraints?: {
        hours?: {
            min: number;
            max: number;
            step: number;
        };
        minutes?: {
            min: number;
            max: number;
            step: number;
        };
        seconds: {
            min: number;
            max: number;
            step: number;
        };
    };
    popOverContainer?: any;
    label?: string | false;
    borderMode?: 'full' | 'half' | 'none';
    embed?: boolean;
    schedules?: Array<{
        startTime: Date;
        endTime: Date;
        content: any;
        className?: string;
    }>;
    scheduleClassNames?: Array<string>;
    env?: RendererEnv;
    largeMode?: boolean;
    todayActiveStyle?: React.CSSProperties;
    onScheduleClick?: (scheduleData: any) => void;
    mobileCalendarMode?: 'picker' | 'calendar';
    onFocus?: Function;
    onBlur?: Function;
    onRef?: any;
    data?: any;
    isEndDate?: boolean;
    testIdBuilder?: TestIdBuilder;
    disabledDate?: (date: moment.Moment) => any;
    onClick?: (date: moment.Moment) => any;
    onMouseEnter?: (date: moment.Moment) => any;
    onMouseLeave?: (date: moment.Moment) => any;
}
export interface DatePickerState {
    isOpened: boolean;
    isFocused: boolean;
    value: moment.Moment | undefined;
    inputValue: string | undefined;
    curTimeFormat: string;
    curDateFormat: string;
    isModified: boolean;
}
export declare class DatePicker extends React.Component<DateProps, DatePickerState> {
    static defaultProps: {
        viewMode: "time" | "years" | "months" | "days";
        shortcuts: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
        scheduleClassNames: string[];
    };
    constructor(props: DateProps);
    dom: HTMLDivElement;
    inputRef: React.RefObject<HTMLInputElement>;
    inputValueCache: string;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DateProps): void;
    isConfirmMode(): boolean;
    focus(): void;
    handleFocus(e: React.SyntheticEvent<HTMLDivElement>): void;
    handleBlur(e: React.SyntheticEvent<HTMLDivElement>): void;
    handleKeyPress(e: React.KeyboardEvent): void;
    handleClick(): void;
    handlePopOverClick(e: React.MouseEvent<any>): void;
    open(fn?: () => void): void;
    close(): void;
    clearValue(e: React.MouseEvent<any>): void;
    clear(): void;
    reset(resetValue?: any): void;
    /**
     * 如果为日期时间选择器，则单独处理时间选择事件，点击确认的时候才触发onChange
     */
    handleConfirm(): void;
    handleChange(value: Moment, viewMode?: ChangeEventViewMode): void;
    inputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    onInputBlur(): void;
    selectShortcut(shortcut: any): void;
    checkIsValidDate(currentDate: moment.Moment): boolean;
    getTarget(): HTMLDivElement;
    getParent(): HTMLDivElement;
    domRef: (ref: HTMLDivElement) => void;
    getAvailableShortcuts(key: string): any;
    renderShortCuts(shortcuts: string | Array<ShortCuts>): React.JSX.Element | null;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
        shortcuts?: string | ShortCuts[] | undefined;
        overlayPlacement?: string | undefined;
        scheduleClassNames?: string[] | undefined;
        closeOnSelect?: boolean | undefined;
        viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof DatePicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof DatePicker, {}> & {
        ComposedComponent: typeof DatePicker;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
        shortcuts?: string | ShortCuts[] | undefined;
        overlayPlacement?: string | undefined;
        scheduleClassNames?: string[] | undefined;
        closeOnSelect?: boolean | undefined;
        viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof DatePicker>;
} & import("hoist-non-react-statics").NonReactStatics<typeof DatePicker, {}> & {
    ComposedComponent: typeof DatePicker;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
            shortcuts?: string | ShortCuts[] | undefined;
            overlayPlacement?: string | undefined;
            scheduleClassNames?: string[] | undefined;
            closeOnSelect?: boolean | undefined;
            viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "style" | "label" | "placeholder" | "disabled" | "className" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "clearable" | "format" | "valueFormat" | "inputFormat" | "displayFormat" | "maxDate" | "minDate" | "borderMode" | "embed" | "env" | "mobileUI" | "classnames" | "classPrefix" | "defaultValue" | "onFocus" | "onBlur" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "schedules" | "largeMode" | "todayActiveStyle" | "disabledDate" | "timeConstraints" | "isEndDate" | "minDateRaw" | "maxDateRaw" | "dateFormat" | "onScheduleClick" | "mobileCalendarMode"> & {
                shortcuts?: string | ShortCuts[] | undefined;
                overlayPlacement?: string | undefined;
                scheduleClassNames?: string[] | undefined;
                closeOnSelect?: boolean | undefined;
                viewMode?: "time" | "years" | "months" | "days" | "quarters" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof DatePicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof DatePicker, {}> & {
        ComposedComponent: typeof DatePicker;
    };
};
export default _default;

/**
 * @file DateRangePicker
 * @description 自定义日期范围时间选择器组件
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import moment, { unitOfTime } from 'moment';
import { ShortCuts } from './DatePicker';
import type { Moment } from 'moment';
import type { PlainObject, ThemeProps, LocaleProps } from 'amis-core';
import type { ViewMode, ChangeEventViewMode, ChangeEventViewStatus } from './calendar/Calendar';
import type { TestIdBuilder } from 'amis-core';
export interface DateRangePickerProps extends ThemeProps, LocaleProps {
    className?: string;
    popoverClassName?: string;
    startPlaceholder?: string;
    endPlaceholder?: string;
    theme?: any;
    utc?: boolean;
    format?: string;
    inputFormat?: string;
    valueFormat: string;
    displayFormat?: string;
    /**
     * @deprecated 3.1.0后废弃，用shortcuts替代
     */
    ranges?: string | Array<ShortCuts>;
    shortcuts?: string | Array<ShortCuts>;
    clearable?: boolean;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    minDateRaw?: string;
    maxDateRaw?: string;
    minDuration?: moment.Duration;
    maxDuration?: moment.Duration;
    joinValues: boolean;
    delimiter: string;
    value?: any;
    onChange: (value: any) => void;
    data?: any;
    disabled?: boolean;
    closeOnSelect?: boolean;
    overlayPlacement: string;
    timeFormat?: string;
    resetValue?: any;
    popOverContainer?: any;
    dateFormat?: string;
    embed?: boolean;
    viewMode?: ViewMode;
    borderMode?: 'full' | 'half' | 'none';
    onFocus?: Function;
    onBlur?: Function;
    type?: string;
    onRef?: any;
    label?: string | false;
    /** 是否开启游标动画 */
    animation?: boolean;
    /** 日期处理函数，通常用于自定义处理绑定日期的值 */
    transform?: string;
    testIdBuilder?: TestIdBuilder;
}
export interface DateRangePickerState {
    isOpened: boolean;
    isFocused: boolean;
    /** 开始时间 */
    startDate?: moment.Moment;
    /** 结束时间 */
    endDate?: moment.Moment;
    /** 最近一次confirm的开始时间 */
    oldStartDate?: moment.Moment;
    /** 最近一次confirm的结束时间 */
    oldEndDate?: moment.Moment;
    /** 当前编辑的时间类型：开始时间 ｜ 结束时间 */
    editState?: 'start' | 'end';
    /** 开始时间输入值 */
    startInputValue?: string;
    /** 结束时间输入值 */
    endInputValue?: string;
    endDateOpenedFirst: boolean;
    curTimeFormat?: string;
    curDateFormat?: string;
}
export declare const availableShortcuts: {
    [propName: string]: any;
};
export declare const advancedRanges: {
    regexp: RegExp;
    resolve: (__: any, _: string, hours: string) => {
        label: any;
        startDate: (now: moment.Moment) => moment.Moment;
        endDate: (now: moment.Moment) => moment.Moment;
    };
}[];
export declare class DateRangePicker extends React.Component<DateRangePickerProps, DateRangePickerState> {
    static defaultProps: {
        startPlaceholder: string;
        endPlaceholder: string;
        format: string;
        inputFormat: string;
        joinValues: boolean;
        clearable: boolean;
        delimiter: string;
        ranges: string;
        shortcuts: string;
        resetValue: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
        endDateOpenedFirst: boolean;
    };
    innerDom: any;
    popover: any;
    input?: HTMLInputElement;
    isFirstClick: boolean;
    static formatValue(newValue: any, valueFormat: string, joinValues: boolean, delimiter: string, utc?: boolean): any;
    static unFormatValue(value: any, format: string, joinValues: boolean, delimiter: string, data: any): {
        startDate: moment.Moment | undefined;
        endDate: moment.Moment | undefined;
    };
    dom: React.RefObject<HTMLDivElement>;
    calendarRef: React.RefObject<HTMLDivElement>;
    nextMonth: moment.Moment;
    currentMonth: moment.Moment;
    startInputRef: React.RefObject<HTMLInputElement>;
    endInputRef: React.RefObject<HTMLInputElement>;
    separatorRef: React.RefObject<HTMLSpanElement>;
    constructor(props: DateRangePickerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleOutClick(e: Event): void;
    componentDidUpdate(prevProps: DateRangePickerProps): void;
    focus(): void;
    blur(): void;
    handleFocus(e: React.SyntheticEvent<HTMLDivElement>): void;
    handleBlur(e: React.SyntheticEvent<HTMLDivElement>): void;
    open(): void;
    openStart(): void;
    openEnd(): void;
    close(isConfirm?: boolean): void;
    handleClick(): void;
    handlePopOverClick(e: React.MouseEvent<any>): void;
    handleKeyPress(e: React.KeyboardEvent): void;
    confirm(): void;
    filterDate(date: moment.Moment, options?: {
        type: 'start' | 'end';
        originValue?: moment.Moment;
        timeFormat?: string;
        subControlViewMode?: ChangeEventViewMode;
        /** 自动初始化绑定值，用于首次选择且当前未绑定值，默认使用当前时间 */
        autoInitDefaultValue?: boolean;
    }): moment.Moment;
    handleDateChange(newValue: moment.Moment, viewMode?: ChangeEventViewMode, status?: ChangeEventViewStatus): void;
    /**
     * @param {Moment} newValue 当前选择的日期时间值
     * @param {ViewMode=} subControlViewMode 子选择控件的类型，可选参数（'time'），用于区分datetime选择器的触发控件
     */
    handleStartDateChange(newValue: moment.Moment, subControlViewMode?: ChangeEventViewMode): void;
    /**
     * @param {Moment} newValue 当前选择的日期时间值
     * @param {string=} subControlViewMode 子选择控件的类型的类型，可选参数（'time'），用于区分datetime选择器的触发控件
     */
    handelEndDateChange(newValue: moment.Moment, subControlViewMode?: ChangeEventViewMode): void;
    startInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    endInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    getEndDateByDuration(newValue: moment.Moment): moment.Moment;
    getStartDateByDuration(newValue: moment.Moment): moment.Moment;
    handleTimeStartChange(newValue: moment.Moment): void;
    handleTimeEndChange(newValue: moment.Moment): void;
    handleMobileChange(data: any, callback?: () => void): void;
    selectShortcut(shortcut: PlainObject): void;
    renderShortcuts(shortcuts: string | Array<ShortCuts> | undefined): React.JSX.Element | null;
    clearValue(e: React.MouseEvent<any>): void;
    clear(): void;
    reset(): void;
    checkStartIsValidDate(currentDate: moment.Moment): boolean;
    checkEndIsValidDate(currentDate: moment.Moment): boolean;
    renderDay(props: any, currentDate: moment.Moment): React.JSX.Element;
    renderMonth(props: any, month: number, year: number, date: any): React.JSX.Element;
    renderQuarter(props: any, quarter: number, year: number): React.JSX.Element;
    renderYear(props: any, year: number): React.JSX.Element;
    renderCalendar(): React.JSX.Element;
    getDisabledElementProps(currentDate: moment.Moment, granularity?: unitOfTime.StartOf): {
        className: string;
        onClick: undefined;
    } | {
        className: string;
        onClick?: undefined;
    };
    /** 获取宽度类型变量的值 */
    getValidWidthValue(element: HTMLElement, propsName: string): number;
    renderActiveCursor(): React.JSX.Element;
    getDefaultDate(): moment.Moment | undefined;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
        delimiter?: string | undefined;
        joinValues?: boolean | undefined;
        clearable?: boolean | undefined;
        resetValue?: any;
        format?: string | undefined;
        inputFormat?: string | undefined;
        ranges?: string | ShortCuts[] | undefined;
        shortcuts?: string | ShortCuts[] | undefined;
        startPlaceholder?: string | undefined;
        endPlaceholder?: string | undefined;
        overlayPlacement?: string | undefined;
        closeOnSelect?: boolean | undefined;
    } & {
        endDateOpenedFirst?: boolean | undefined;
    } & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof DateRangePicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof DateRangePicker, {}> & {
        ComposedComponent: typeof DateRangePicker;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
        delimiter?: string | undefined;
        joinValues?: boolean | undefined;
        clearable?: boolean | undefined;
        resetValue?: any;
        format?: string | undefined;
        inputFormat?: string | undefined;
        ranges?: string | ShortCuts[] | undefined;
        shortcuts?: string | ShortCuts[] | undefined;
        startPlaceholder?: string | undefined;
        endPlaceholder?: string | undefined;
        overlayPlacement?: string | undefined;
        closeOnSelect?: boolean | undefined;
    } & {
        endDateOpenedFirst?: boolean | undefined;
    } & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof DateRangePicker>;
} & import("hoist-non-react-statics").NonReactStatics<typeof DateRangePicker, {}> & {
    ComposedComponent: typeof DateRangePicker;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
            delimiter?: string | undefined;
            joinValues?: boolean | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            format?: string | undefined;
            inputFormat?: string | undefined;
            ranges?: string | ShortCuts[] | undefined;
            shortcuts?: string | ShortCuts[] | undefined;
            startPlaceholder?: string | undefined;
            endPlaceholder?: string | undefined;
            overlayPlacement?: string | undefined;
            closeOnSelect?: boolean | undefined;
        } & {
            endDateOpenedFirst?: boolean | undefined;
        } & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "style" | "label" | "disabled" | "className" | "type" | "value" | "onChange" | "theme" | "data" | "testIdBuilder" | "popOverContainer" | "valueFormat" | "displayFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "embed" | "animation" | "transform" | "mobileUI" | "classnames" | "classPrefix" | "onFocus" | "onBlur" | "onRef" | "popoverClassName" | "utc" | "timeFormat" | "viewMode" | "minDateRaw" | "maxDateRaw" | "dateFormat"> & {
                delimiter?: string | undefined;
                joinValues?: boolean | undefined;
                clearable?: boolean | undefined;
                resetValue?: any;
                format?: string | undefined;
                inputFormat?: string | undefined;
                ranges?: string | ShortCuts[] | undefined;
                shortcuts?: string | ShortCuts[] | undefined;
                startPlaceholder?: string | undefined;
                endPlaceholder?: string | undefined;
                overlayPlacement?: string | undefined;
                closeOnSelect?: boolean | undefined;
            } & {
                endDateOpenedFirst?: boolean | undefined;
            } & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof DateRangePicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof DateRangePicker, {}> & {
        ComposedComponent: typeof DateRangePicker;
    };
};
export default _default;

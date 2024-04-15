/**
 * @file CalendarMobile
 * @description 移动端日历组件
 * @author hongyang03
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import moment from 'moment';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
import type { ViewMode } from './calendar/Calendar';
export interface CalendarMobileProps extends ThemeProps, LocaleProps {
    className?: string;
    timeFormat?: string;
    inputFormat?: string;
    displayForamt?: string;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    minDuration?: moment.Duration;
    maxDuration?: moment.Duration;
    dateFormat?: string;
    embed?: boolean;
    viewMode?: ViewMode;
    close?: () => void;
    confirm?: (startDate?: any, endTime?: any) => void;
    onChange?: (data: any, callback?: () => void) => void;
    footerExtra?: JSX.Element | null;
    showViewMode?: 'years' | 'months';
    isDatePicker?: boolean;
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
    defaultDate?: moment.Moment;
    isEndDate?: boolean;
    popOverContainer?: any;
}
export interface CalendarMobileState {
    startDate?: moment.Moment;
    endDate?: moment.Moment;
    monthHeights?: number[];
    currentDate: moment.Moment;
    showToast: boolean;
    isScrollToBottom: boolean;
    dateTime: any;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    isPopupOpen: boolean;
}
export declare class CalendarMobile extends React.Component<CalendarMobileProps, CalendarMobileState> {
    mobileBody: any;
    mobileHeader: any;
    timer: any;
    static defaultProps: Pick<CalendarMobileProps, 'showViewMode'>;
    constructor(props: CalendarMobileProps);
    getDateRange(minDate?: moment.Moment, maxDate?: moment.Moment, defaultDate?: moment.Moment): {
        currentDate: moment.Moment;
        minDate: moment.Moment;
        maxDate: moment.Moment;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: CalendarMobileProps): void;
    componentWillUnmount(): void;
    initMonths(): void;
    scollToDate(date: moment.Moment): void;
    onMobileBodyScroll(e: any): void;
    scrollPreYear(): void;
    scrollAfterYear(): void;
    getDaysOfWeek(): string[];
    handleCalendarClick(isDisabled: boolean): void;
    getRenderProps(props: any, currentDate: moment.Moment): {
        props: any;
        footerText: string;
        rdtDisabled: boolean;
    };
    handleTimeChange(newTime: any): void;
    checkIsValidDate(currentDate: moment.Moment): boolean;
    renderMobileDay(props: any, currentDate: moment.Moment): React.JSX.Element;
    renderMonth(props: any, month: number, year: number): React.JSX.Element;
    renderQuarter(props: any, quarter: number, year: number): React.JSX.Element;
    handleMobileChange(newValue: moment.Moment): void;
    renderMobileCalendarBody(): React.JSX.Element | undefined;
    renderMobileTimePicker(): React.JSX.Element;
    openDatePicker(): void;
    closePopup(): void;
    handleDateChange(currentDate: moment.Moment): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
        showViewMode?: "years" | "months" | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof CalendarMobile>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof CalendarMobile, {}> & {
        ComposedComponent: typeof CalendarMobile;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
        showViewMode?: "years" | "months" | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof CalendarMobile>;
} & import("hoist-non-react-statics").NonReactStatics<typeof CalendarMobile, {}> & {
    ComposedComponent: typeof CalendarMobile;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
            showViewMode?: "years" | "months" | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "style" | "className" | "onChange" | "theme" | "popOverContainer" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "embed" | "close" | "confirm" | "mobileUI" | "classnames" | "classPrefix" | "startDate" | "endDate" | "timeFormat" | "timeConstraints" | "isEndDate" | "viewMode" | "dateFormat" | "displayForamt" | "footerExtra" | "isDatePicker" | "defaultDate"> & {
                showViewMode?: "years" | "months" | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof CalendarMobile>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof CalendarMobile, {}> & {
        ComposedComponent: typeof CalendarMobile;
    };
};
export default _default;

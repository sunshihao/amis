/**
 * @file 基于 react-datetime 改造。
 */
import React from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/de';
import type { RendererEnv, TestIdBuilder } from 'amis-core';
import type { unitOfTime } from 'moment';
/** 视图模式 */
export type ViewMode = 'days' | 'months' | 'years' | 'time' | 'quarters';
export type DateType = 'year' | 'month' | 'date' | 'hours' | 'minutes' | 'seconds';
/** 底层View组件修改的值类型：time时间、days日期 */
export type ChangeEventViewMode = Extract<ViewMode, 'time' | 'days'>;
export type ChangeEventViewStatus = 'start' | 'end';
/** 可改变的时间单位 */
export type MutableUnitOfTime = Extract<unitOfTime.All, 'date' | 'hour' | 'minute' | 'second' | 'millisecond'>;
export interface BoundaryObject {
    max: number;
    min: number;
}
export interface DateBoundary {
    year: BoundaryObject;
    month: BoundaryObject;
    date: BoundaryObject;
    hours: BoundaryObject;
    minutes: BoundaryObject;
    seconds: BoundaryObject;
}
interface BaseDatePickerProps {
    className?: string;
    value?: any;
    defaultValue?: any;
    viewMode?: ViewMode;
    dateFormat?: boolean | string;
    inputFormat?: boolean | string;
    displayForamt?: boolean | string;
    timeFormat?: any;
    input?: boolean;
    locale: string;
    date?: any;
    isValidDate?: (currentDate: moment.Moment, selected?: moment.Moment) => boolean;
    onViewModeChange?: (type: string) => void;
    requiredConfirm?: boolean;
    onClick?: (date: moment.Moment) => any;
    onMouseEnter?: (date: moment.Moment) => any;
    onMouseLeave?: (date: moment.Moment) => any;
    onClose?: () => void;
    onChange?: (value: any, viewMode?: ChangeEventViewMode, status?: ChangeEventViewStatus) => void;
    isEndDate?: boolean;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    viewDate?: moment.Moment;
    renderDay?: (props: any, currentDate: moment.Moment, selectedDate: moment.Moment) => JSX.Element;
    renderMonth?: (props: any, month: number, year: number, date: any) => JSX.Element;
    renderQuarter?: (props: any, quartar: number, year?: number, date?: moment.Moment) => JSX.Element;
    renderYear?: (props: any, year: number) => JSX.Element;
    schedules?: Array<{
        startTime: Date;
        endTime: Date;
        content: string | React.ReactElement;
        color?: string;
    }>;
    env?: RendererEnv;
    largeMode?: boolean;
    todayActiveStyle?: React.CSSProperties;
    onScheduleClick?: (scheduleData: any) => void;
    hideHeader?: boolean;
    updateOn?: string;
    mobileUI?: boolean;
    embed?: boolean;
    closeOnSelect?: boolean;
    showToolbar?: boolean;
    open?: boolean;
    utc?: boolean;
    displayTimeZone?: string;
    timeConstraints?: any;
    timeRangeHeader?: string;
    status?: ChangeEventViewStatus;
    testIdBuilder?: TestIdBuilder;
}
declare const _default: React.ComponentType<BaseDatePickerProps>;
export default _default;

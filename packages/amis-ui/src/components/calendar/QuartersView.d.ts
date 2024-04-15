/// <reference types="hoist-non-react-statics" />
import moment from 'moment';
import React from 'react';
import { LocaleProps, ThemeProps } from 'amis-core';
import type { TestIdBuilder } from 'amis-core';
export interface QuarterViewProps extends LocaleProps, ThemeProps {
    viewDate: moment.Moment;
    selectedDate: moment.Moment;
    inputFormat?: string;
    updateOn: string;
    subtractTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    addTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    setDate: (type: string) => () => void;
    showView: (view: string) => () => void;
    updateSelectedDate: (e: any, close?: boolean) => void;
    renderQuarter: any;
    isValidDate: (date: moment.Moment) => boolean;
    hideHeader?: boolean;
    onConfirm?: (value: number[], types?: string[]) => void;
    onClose?: () => void;
    testIdBuilder?: TestIdBuilder;
}
export declare class QuarterView extends React.Component<QuarterViewProps> {
    state: {
        columns: never[];
        pickerValue: number[];
    };
    renderYear(): React.JSX.Element | null;
    renderQuarters(): React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>[];
    renderQuarter: (props: any, quartar: number, year: number, date: moment.Moment) => React.JSX.Element;
    updateSelectedQuarter: (event: any) => void;
    alwaysValidDate(): boolean;
    onPickerConfirm: (value: number[]) => void;
    onPickerChange: (value: number[], index: number) => void;
    cancel(): void;
    renderPicker(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<QuarterViewProps, keyof LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<QuarterViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<QuarterViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<QuarterViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<QuarterViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<QuarterViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<QuarterViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<QuarterViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<QuarterViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<QuarterViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof QuarterView>;
} & import("hoist-non-react-statics").NonReactStatics<typeof QuarterView, {}> & {
    ComposedComponent: typeof QuarterView;
};
export default _default;

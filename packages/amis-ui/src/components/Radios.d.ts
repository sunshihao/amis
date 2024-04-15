/**
 * @file Radios
 * @description
 * @author fex
 *
 * @param 参数说明：
 * options: [
 *   {
 *      label: '显示的名字',
 *      value: '值',
 *      disabled: false
 *   }
 * ]
 *
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { OptionProps, Option } from './Select';
import { ClassNamesFn } from 'amis-core';
import { TestIdBuilder } from 'amis-core';
interface RadioProps extends OptionProps {
    id?: string;
    type: string;
    optionType?: string;
    value?: string;
    className?: string;
    style?: React.CSSProperties;
    inline?: boolean;
    level?: string;
    btnActiveLevel?: string;
    disabled?: boolean;
    onChange?: Function;
    columnsCount: number | number[];
    itemClassName?: string;
    labelField?: string;
    labelClassName?: string;
    classPrefix: string;
    classnames: ClassNamesFn;
    renderLabel?: (item: Option, props: RadioProps) => JSX.Element;
    testIdBuilder?: TestIdBuilder;
}
export declare class Radios extends React.Component<RadioProps, any> {
    static defaultProps: {
        type: string;
        optionType: string;
        btnActiveLevel: string;
        resetValue: string;
        inline: boolean;
        joinValues: boolean;
        clearable: boolean;
        columnsCount: number;
    };
    toggleOption(option: Option): void;
    renderGroup(option: Option, index: number, valueArray: Array<Option>): React.JSX.Element;
    renderItem(option: Option, index: number, valueArray: Array<Option>): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<RadioProps, keyof import("amis-core").ThemeProps>, "placeholder" | "disabled" | "labelClassName" | "id" | "editable" | "removable" | "value" | "onChange" | "itemClassName" | "valueField" | "testIdBuilder" | "loading" | "multiple" | "delimiter" | "options" | "extractValue" | "creatable" | "itemHeight" | "virtualThreshold" | "block" | "renderLabel" | "labelField" | "multi" | "pathSeparator" | "level" | "onEdit" | "onDelete" | "hasError" | "simpleValue" | "onAdd"> & {
        type?: string | undefined;
        joinValues?: boolean | undefined;
        inline?: boolean | undefined;
        btnActiveLevel?: string | undefined;
        clearable?: boolean | undefined;
        resetValue?: any;
        optionType?: string | undefined;
        columnsCount?: number | number[] | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<RadioProps, keyof import("amis-core").ThemeProps>, "placeholder" | "disabled" | "labelClassName" | "id" | "editable" | "removable" | "value" | "onChange" | "itemClassName" | "valueField" | "testIdBuilder" | "loading" | "multiple" | "delimiter" | "options" | "extractValue" | "creatable" | "itemHeight" | "virtualThreshold" | "block" | "renderLabel" | "labelField" | "multi" | "pathSeparator" | "level" | "onEdit" | "onDelete" | "hasError" | "simpleValue" | "onAdd"> & {
            type?: string | undefined;
            joinValues?: boolean | undefined;
            inline?: boolean | undefined;
            btnActiveLevel?: string | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            optionType?: string | undefined;
            columnsCount?: number | number[] | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<RadioProps, keyof import("amis-core").ThemeProps>, "placeholder" | "disabled" | "labelClassName" | "id" | "editable" | "removable" | "value" | "onChange" | "itemClassName" | "valueField" | "testIdBuilder" | "loading" | "multiple" | "delimiter" | "options" | "extractValue" | "creatable" | "itemHeight" | "virtualThreshold" | "block" | "renderLabel" | "labelField" | "multi" | "pathSeparator" | "level" | "onEdit" | "onDelete" | "hasError" | "simpleValue" | "onAdd"> & {
            type?: string | undefined;
            joinValues?: boolean | undefined;
            inline?: boolean | undefined;
            btnActiveLevel?: string | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            optionType?: string | undefined;
            columnsCount?: number | number[] | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<RadioProps, keyof import("amis-core").ThemeProps>, "placeholder" | "disabled" | "labelClassName" | "id" | "editable" | "removable" | "value" | "onChange" | "itemClassName" | "valueField" | "testIdBuilder" | "loading" | "multiple" | "delimiter" | "options" | "extractValue" | "creatable" | "itemHeight" | "virtualThreshold" | "block" | "renderLabel" | "labelField" | "multi" | "pathSeparator" | "level" | "onEdit" | "onDelete" | "hasError" | "simpleValue" | "onAdd"> & {
            type?: string | undefined;
            joinValues?: boolean | undefined;
            inline?: boolean | undefined;
            btnActiveLevel?: string | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            optionType?: string | undefined;
            columnsCount?: number | number[] | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<RadioProps, keyof import("amis-core").ThemeProps>, "placeholder" | "disabled" | "labelClassName" | "id" | "editable" | "removable" | "value" | "onChange" | "itemClassName" | "valueField" | "testIdBuilder" | "loading" | "multiple" | "delimiter" | "options" | "extractValue" | "creatable" | "itemHeight" | "virtualThreshold" | "block" | "renderLabel" | "labelField" | "multi" | "pathSeparator" | "level" | "onEdit" | "onDelete" | "hasError" | "simpleValue" | "onAdd"> & {
            type?: string | undefined;
            joinValues?: boolean | undefined;
            inline?: boolean | undefined;
            btnActiveLevel?: string | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            optionType?: string | undefined;
            columnsCount?: number | number[] | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<RadioProps, keyof import("amis-core").ThemeProps>, "placeholder" | "disabled" | "labelClassName" | "id" | "editable" | "removable" | "value" | "onChange" | "itemClassName" | "valueField" | "testIdBuilder" | "loading" | "multiple" | "delimiter" | "options" | "extractValue" | "creatable" | "itemHeight" | "virtualThreshold" | "block" | "renderLabel" | "labelField" | "multi" | "pathSeparator" | "level" | "onEdit" | "onDelete" | "hasError" | "simpleValue" | "onAdd"> & {
            type?: string | undefined;
            joinValues?: boolean | undefined;
            inline?: boolean | undefined;
            btnActiveLevel?: string | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            optionType?: string | undefined;
            columnsCount?: number | number[] | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<RadioProps, keyof import("amis-core").ThemeProps>, "placeholder" | "disabled" | "labelClassName" | "id" | "editable" | "removable" | "value" | "onChange" | "itemClassName" | "valueField" | "testIdBuilder" | "loading" | "multiple" | "delimiter" | "options" | "extractValue" | "creatable" | "itemHeight" | "virtualThreshold" | "block" | "renderLabel" | "labelField" | "multi" | "pathSeparator" | "level" | "onEdit" | "onDelete" | "hasError" | "simpleValue" | "onAdd"> & {
            type?: string | undefined;
            joinValues?: boolean | undefined;
            inline?: boolean | undefined;
            btnActiveLevel?: string | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            optionType?: string | undefined;
            columnsCount?: number | number[] | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<RadioProps, keyof import("amis-core").ThemeProps>, "placeholder" | "disabled" | "labelClassName" | "id" | "editable" | "removable" | "value" | "onChange" | "itemClassName" | "valueField" | "testIdBuilder" | "loading" | "multiple" | "delimiter" | "options" | "extractValue" | "creatable" | "itemHeight" | "virtualThreshold" | "block" | "renderLabel" | "labelField" | "multi" | "pathSeparator" | "level" | "onEdit" | "onDelete" | "hasError" | "simpleValue" | "onAdd"> & {
            type?: string | undefined;
            joinValues?: boolean | undefined;
            inline?: boolean | undefined;
            btnActiveLevel?: string | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            optionType?: string | undefined;
            columnsCount?: number | number[] | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<RadioProps, keyof import("amis-core").ThemeProps>, "placeholder" | "disabled" | "labelClassName" | "id" | "editable" | "removable" | "value" | "onChange" | "itemClassName" | "valueField" | "testIdBuilder" | "loading" | "multiple" | "delimiter" | "options" | "extractValue" | "creatable" | "itemHeight" | "virtualThreshold" | "block" | "renderLabel" | "labelField" | "multi" | "pathSeparator" | "level" | "onEdit" | "onDelete" | "hasError" | "simpleValue" | "onAdd"> & {
            type?: string | undefined;
            joinValues?: boolean | undefined;
            inline?: boolean | undefined;
            btnActiveLevel?: string | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            optionType?: string | undefined;
            columnsCount?: number | number[] | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<RadioProps, keyof import("amis-core").ThemeProps>, "placeholder" | "disabled" | "labelClassName" | "id" | "editable" | "removable" | "value" | "onChange" | "itemClassName" | "valueField" | "testIdBuilder" | "loading" | "multiple" | "delimiter" | "options" | "extractValue" | "creatable" | "itemHeight" | "virtualThreshold" | "block" | "renderLabel" | "labelField" | "multi" | "pathSeparator" | "level" | "onEdit" | "onDelete" | "hasError" | "simpleValue" | "onAdd"> & {
            type?: string | undefined;
            joinValues?: boolean | undefined;
            inline?: boolean | undefined;
            btnActiveLevel?: string | undefined;
            clearable?: boolean | undefined;
            resetValue?: any;
            optionType?: string | undefined;
            columnsCount?: number | number[] | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Radios>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Radios, {}> & {
    ComposedComponent: typeof Radios;
};
export default _default;

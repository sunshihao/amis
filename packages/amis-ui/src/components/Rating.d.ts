/**
 * @file Rating
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from 'amis-core';
export type textPositionType = 'left' | 'right';
interface RatingProps {
    id?: string;
    key?: string | number;
    style?: React.CSSProperties;
    count: number;
    half: boolean;
    char: string | React.ReactNode;
    className?: string;
    charClassName?: string;
    textClassName?: string;
    onChange?: (value: number) => void;
    onHoverChange?: (value: number) => void;
    value: number;
    containerClass?: string;
    readOnly: boolean;
    classPrefix: string;
    disabled?: boolean;
    allowClear?: boolean;
    inactiveColor?: string;
    colors?: string | {
        [propName: string]: string;
    };
    texts?: {
        [propName: string]: string;
    };
    textPosition?: textPositionType;
    classnames: ClassNamesFn;
}
export declare class Rating extends React.Component<RatingProps, any> {
    static defaultProps: {
        containerClass: string;
        readOnly: boolean;
        half: boolean;
        allowClear: boolean;
        value: number;
        count: number;
        char: React.JSX.Element;
        colors: string;
        textPosition: textPositionType;
    };
    ratingRef: React.RefObject<HTMLDivElement>;
    starsNode: Record<string, any>;
    constructor(props: RatingProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: RatingProps): void;
    sortKeys(map: {
        [propName: number]: string;
    }): string[];
    getShowColorAndText(value: number): void;
    getRate(): number;
    getStars(activeCount?: number): {
        active: boolean;
    }[];
    saveRef(index: number): (node?: HTMLLIElement | null) => void;
    mouseOver(event: React.ChangeEvent<any>, index: number): void;
    onHoverChange(value: number): void;
    moreThanHalf(event: any, index: number): boolean;
    mouseLeave(): void;
    handleStarMouseLeave(event: any, index: number): void;
    handleClick(event: React.ChangeEvent<any>, index: number): void;
    renderStars(): React.JSX.Element;
    renderText(): React.JSX.Element | null;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<RatingProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "onChange" | "key" | "texts" | "inactiveColor" | "charClassName" | "textClassName" | "onHoverChange"> & {
        value?: number | undefined;
        readOnly?: boolean | undefined;
        half?: boolean | undefined;
        count?: number | undefined;
        allowClear?: boolean | undefined;
        char?: React.ReactNode;
        colors?: string | {
            [propName: string]: string;
        } | undefined;
        textPosition?: textPositionType | undefined;
        containerClass?: string | undefined;
    } & {} & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<RatingProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "onChange" | "key" | "texts" | "inactiveColor" | "charClassName" | "textClassName" | "onHoverChange"> & {
            value?: number | undefined;
            readOnly?: boolean | undefined;
            half?: boolean | undefined;
            count?: number | undefined;
            allowClear?: boolean | undefined;
            char?: React.ReactNode;
            colors?: string | {
                [propName: string]: string;
            } | undefined;
            textPosition?: textPositionType | undefined;
            containerClass?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<RatingProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "onChange" | "key" | "texts" | "inactiveColor" | "charClassName" | "textClassName" | "onHoverChange"> & {
            value?: number | undefined;
            readOnly?: boolean | undefined;
            half?: boolean | undefined;
            count?: number | undefined;
            allowClear?: boolean | undefined;
            char?: React.ReactNode;
            colors?: string | {
                [propName: string]: string;
            } | undefined;
            textPosition?: textPositionType | undefined;
            containerClass?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<RatingProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "onChange" | "key" | "texts" | "inactiveColor" | "charClassName" | "textClassName" | "onHoverChange"> & {
            value?: number | undefined;
            readOnly?: boolean | undefined;
            half?: boolean | undefined;
            count?: number | undefined;
            allowClear?: boolean | undefined;
            char?: React.ReactNode;
            colors?: string | {
                [propName: string]: string;
            } | undefined;
            textPosition?: textPositionType | undefined;
            containerClass?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<RatingProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "onChange" | "key" | "texts" | "inactiveColor" | "charClassName" | "textClassName" | "onHoverChange"> & {
            value?: number | undefined;
            readOnly?: boolean | undefined;
            half?: boolean | undefined;
            count?: number | undefined;
            allowClear?: boolean | undefined;
            char?: React.ReactNode;
            colors?: string | {
                [propName: string]: string;
            } | undefined;
            textPosition?: textPositionType | undefined;
            containerClass?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<RatingProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "onChange" | "key" | "texts" | "inactiveColor" | "charClassName" | "textClassName" | "onHoverChange"> & {
            value?: number | undefined;
            readOnly?: boolean | undefined;
            half?: boolean | undefined;
            count?: number | undefined;
            allowClear?: boolean | undefined;
            char?: React.ReactNode;
            colors?: string | {
                [propName: string]: string;
            } | undefined;
            textPosition?: textPositionType | undefined;
            containerClass?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<RatingProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "onChange" | "key" | "texts" | "inactiveColor" | "charClassName" | "textClassName" | "onHoverChange"> & {
            value?: number | undefined;
            readOnly?: boolean | undefined;
            half?: boolean | undefined;
            count?: number | undefined;
            allowClear?: boolean | undefined;
            char?: React.ReactNode;
            colors?: string | {
                [propName: string]: string;
            } | undefined;
            textPosition?: textPositionType | undefined;
            containerClass?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<RatingProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "onChange" | "key" | "texts" | "inactiveColor" | "charClassName" | "textClassName" | "onHoverChange"> & {
            value?: number | undefined;
            readOnly?: boolean | undefined;
            half?: boolean | undefined;
            count?: number | undefined;
            allowClear?: boolean | undefined;
            char?: React.ReactNode;
            colors?: string | {
                [propName: string]: string;
            } | undefined;
            textPosition?: textPositionType | undefined;
            containerClass?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<RatingProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "onChange" | "key" | "texts" | "inactiveColor" | "charClassName" | "textClassName" | "onHoverChange"> & {
            value?: number | undefined;
            readOnly?: boolean | undefined;
            half?: boolean | undefined;
            count?: number | undefined;
            allowClear?: boolean | undefined;
            char?: React.ReactNode;
            colors?: string | {
                [propName: string]: string;
            } | undefined;
            textPosition?: textPositionType | undefined;
            containerClass?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<RatingProps, keyof import("amis-core").ThemeProps>, "disabled" | "id" | "onChange" | "key" | "texts" | "inactiveColor" | "charClassName" | "textClassName" | "onHoverChange"> & {
            value?: number | undefined;
            readOnly?: boolean | undefined;
            half?: boolean | undefined;
            count?: number | undefined;
            allowClear?: boolean | undefined;
            char?: React.ReactNode;
            colors?: string | {
                [propName: string]: string;
            } | undefined;
            textPosition?: textPositionType | undefined;
            containerClass?: string | undefined;
        } & {} & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Rating>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Rating, {}> & {
    ComposedComponent: typeof Rating;
};
export default _default;

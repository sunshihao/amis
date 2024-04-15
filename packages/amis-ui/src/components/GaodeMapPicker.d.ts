/// <reference types="lodash" />
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from 'amis-core';
interface MapPickerProps {
    ak: string;
    coordinatesType: string;
    classnames: ClassNamesFn;
    classPrefix: string;
    value?: {
        address: string;
        lat: number;
        lng: number;
        city?: string;
    };
    onChange?: (value: any) => void;
}
interface LocationItem {
    title?: string;
    address: string;
    lat: number;
    lng: number;
    city?: string;
}
interface MapPickerState {
    inputValue: string;
    locIndex?: number;
    locs: Array<LocationItem>;
    sugs: Array<string>;
}
export declare class BaiduMapPicker extends React.Component<MapPickerProps, MapPickerState> {
    state: MapPickerState;
    id: string;
    mapRef: React.RefObject<HTMLDivElement>;
    resultListRef: React.RefObject<HTMLDivElement>;
    placeholderInput?: HTMLInputElement;
    map: any;
    ac: any;
    geocoder: any;
    placeSearch: any;
    mark: any;
    geolocation: any;
    search: import("lodash").DebouncedFunc<() => void>;
    convertor: any;
    componentDidMount(): void;
    initMap(): Promise<void>;
    syncLocation(lnglat: {
        lng: number;
        lat: number;
        address?: string;
        city?: string;
    }): Promise<void>;
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<MapPickerProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<MapPickerProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<MapPickerProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<MapPickerProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<MapPickerProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<MapPickerProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<MapPickerProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<MapPickerProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<MapPickerProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<MapPickerProps, keyof import("amis-core").ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof BaiduMapPicker>;
} & import("hoist-non-react-statics").NonReactStatics<typeof BaiduMapPicker, {}> & {
    ComposedComponent: typeof BaiduMapPicker;
};
export default _default;

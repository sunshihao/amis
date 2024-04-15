/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
export interface LocationProps extends ThemeProps, LocaleProps {
    vendor: 'baidu' | 'gaode' | 'tenxun';
    coordinatesType: 'bd09' | 'gcj02';
    placeholder: string;
    getLocationPlaceholder: string;
    clearable: boolean;
    ak: string;
    value?: {
        address: string;
        lat: number;
        lng: number;
        city?: string;
    };
    disabled?: boolean;
    className?: string;
    popoverClassName?: string;
    onChange: (value: any) => void;
    popOverContainer?: any;
    autoSelectCurrentLoc?: boolean;
    onlySelectCurrentLoc?: boolean;
}
export interface LocationState {
    isFocused: boolean;
    isOpened: boolean;
}
export declare class LocationPicker extends React.Component<LocationProps, LocationState> {
    static defaultProps: {
        placeholder: string;
        getLocationPlaceholder: string;
        clearable: boolean;
    };
    domRef: React.RefObject<HTMLDivElement>;
    tempValue: any;
    state: {
        isFocused: boolean;
        isOpened: boolean;
    };
    handleKeyPress(e: React.KeyboardEvent): void;
    handleFocus(): void;
    handleBlur(): void;
    handleClick(): void;
    getTarget(): HTMLDivElement | null;
    getParent(): HTMLElement | null | undefined;
    open(fn?: () => void): void;
    close(): void;
    clearValue(e: React.MouseEvent<any>): void;
    handlePopOverClick(e: React.MouseEvent<any>): void;
    handleChange(value: any): void;
    handleTempChange(value: any): void;
    handleConfirm(): void;
    render(): React.JSX.Element;
}
declare const ThemedCity: {
    new (props: Omit<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
        placeholder?: string | undefined;
        clearable?: boolean | undefined;
        getLocationPlaceholder?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof LocationPicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof LocationPicker, {}> & {
        ComposedComponent: typeof LocationPicker;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
        placeholder?: string | undefined;
        clearable?: boolean | undefined;
        getLocationPlaceholder?: string | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof LocationPicker>;
} & import("hoist-non-react-statics").NonReactStatics<typeof LocationPicker, {}> & {
    ComposedComponent: typeof LocationPicker;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            getLocationPlaceholder?: string | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<LocationProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "vendor" | "ak" | "coordinatesType" | "autoSelectCurrentLoc" | "onlySelectCurrentLoc"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                getLocationPlaceholder?: string | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof LocationPicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof LocationPicker, {}> & {
        ComposedComponent: typeof LocationPicker;
    };
};
export default ThemedCity;

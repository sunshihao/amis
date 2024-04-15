/**
 * @file ColorPicker
 * @description 颜色选择器组件
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ColorResult } from 'react-color';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
export type PresetColor = {
    color: string;
    title: string;
} | string;
export interface ColorProps extends LocaleProps, ThemeProps {
    placeholder?: string;
    format: string;
    clearable: boolean;
    className?: string;
    popoverClassName?: string;
    disabled?: boolean;
    popOverContainer?: any;
    placement?: string;
    value?: any;
    onChange: (value: any) => void;
    presetColors?: PresetColor[];
    resetValue?: string;
    allowCustomColor?: boolean;
}
export interface ColorControlState {
    isOpened: boolean;
    isFocused: boolean;
    inputValue: string;
    tempValue: string;
}
export declare class ColorControl extends React.PureComponent<ColorProps, ColorControlState> {
    static defaultProps: {
        format: string;
        clearable: boolean;
        placeholder: string;
        allowCustomColor: boolean;
    };
    state: {
        isOpened: boolean;
        isFocused: boolean;
        inputValue: any;
        tempValue: any;
    };
    popover: any;
    closeTimer: number;
    preview: React.RefObject<HTMLElement>;
    input: React.RefObject<HTMLInputElement>;
    constructor(props: ColorProps);
    componentDidUpdate(prevProps: ColorProps): void;
    handleFocus(): void;
    handleBlur(): void;
    focus(): void;
    blur(): void;
    open(fn?: () => void): void;
    close(): void;
    clearValue(): void;
    handleClick(): void;
    handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    validateColor(value: string): boolean;
    handleChange(color: ColorResult): void;
    handleTempChange(color: ColorResult): void;
    handleConfirm(): void;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
        placeholder?: string | undefined;
        clearable?: boolean | undefined;
        format?: string | undefined;
        allowCustomColor?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ColorControl>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ColorControl, {}> & {
        ComposedComponent: typeof ColorControl;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
        placeholder?: string | undefined;
        clearable?: boolean | undefined;
        format?: string | undefined;
        allowCustomColor?: boolean | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof ColorControl>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ColorControl, {}> & {
    ComposedComponent: typeof ColorControl;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
            placeholder?: string | undefined;
            clearable?: boolean | undefined;
            format?: string | undefined;
            allowCustomColor?: boolean | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ColorProps, keyof LocaleProps>, "style" | "disabled" | "className" | "value" | "onChange" | "theme" | "popOverContainer" | "resetValue" | "placement" | "mobileUI" | "classnames" | "classPrefix" | "popoverClassName" | "presetColors"> & {
                placeholder?: string | undefined;
                clearable?: boolean | undefined;
                format?: string | undefined;
                allowCustomColor?: boolean | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ColorControl>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ColorControl, {}> & {
        ComposedComponent: typeof ColorControl;
    };
};
export default _default;

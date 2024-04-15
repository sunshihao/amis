/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
import Sortable from 'sortablejs';
export interface ArrayInputProps extends ThemeProps, LocaleProps {
    value?: Array<any>;
    onChange?: (value: Array<any>) => void;
    placeholder: string;
    itemRender: (props: {
        value: any;
        onChange: (value: any) => void;
        index: number;
        disabled?: boolean;
    }) => JSX.Element;
    itemInitalValue?: any;
    maxLength?: number;
    minLength?: number;
    disabled?: boolean;
    sortable?: boolean;
    removable?: boolean;
    addable?: boolean;
    editable?: boolean;
    sortTip?: string;
}
export declare class ArrayInput extends React.Component<ArrayInputProps> {
    static defaultProps: {
        placeholder: string;
        itemRender: ({ value, onChange }: {
            value: any;
            onChange: (value: any) => void;
            index: number;
            disabled?: boolean | undefined;
        }) => React.JSX.Element;
    };
    id: string;
    dragTip?: HTMLElement;
    sortable?: Sortable;
    handleItemOnChange(index: number, itemValue: any): void;
    dragTipRef(ref: any): void;
    handleAdd(): void;
    handleRemove(e: React.MouseEvent<HTMLElement>): void;
    initDragging(): void;
    destroyDragging(): void;
    renderItem(value: any, index: number, collection: Array<any>): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
        placeholder?: string | undefined;
        itemRender?: ((props: {
            value: any;
            onChange: (value: any) => void;
            index: number;
            disabled?: boolean | undefined;
        }) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ArrayInput>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ArrayInput, {}> & {
        ComposedComponent: typeof ArrayInput;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
        placeholder?: string | undefined;
        itemRender?: ((props: {
            value: any;
            onChange: (value: any) => void;
            index: number;
            disabled?: boolean | undefined;
        }) => JSX.Element) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof ArrayInput>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ArrayInput, {}> & {
    ComposedComponent: typeof ArrayInput;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
            placeholder?: string | undefined;
            itemRender?: ((props: {
                value: any;
                onChange: (value: any) => void;
                index: number;
                disabled?: boolean | undefined;
            }) => JSX.Element) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ArrayInputProps, keyof LocaleProps>, "style" | "disabled" | "className" | "editable" | "removable" | "value" | "onChange" | "theme" | "addable" | "maxLength" | "minLength" | "sortable" | "mobileUI" | "classnames" | "classPrefix" | "itemInitalValue" | "sortTip"> & {
                placeholder?: string | undefined;
                itemRender?: ((props: {
                    value: any;
                    onChange: (value: any) => void;
                    index: number;
                    disabled?: boolean | undefined;
                }) => JSX.Element) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ArrayInput>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ArrayInput, {}> & {
        ComposedComponent: typeof ArrayInput;
    };
};
export default _default;

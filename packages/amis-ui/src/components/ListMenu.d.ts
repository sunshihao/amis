/// <reference types="hoist-non-react-statics" />
import { ThemeProps } from 'amis-core';
import React from 'react';
import { Options, Option } from 'amis-core';
import { LocaleProps } from 'amis-core';
import type { TestIdBuilder } from 'amis-core';
export interface ListMenuProps extends ThemeProps, LocaleProps {
    options: Options;
    disabled?: boolean;
    selectedOptions?: Options;
    highlightIndex?: number | null;
    onSelect?: (e: any, option: Option) => void;
    placeholder: string;
    itemRender: (option: Option) => JSX.Element;
    getItemProps: (props: {
        item: Option;
        index: number;
    }) => any;
    prefix?: JSX.Element;
    children?: React.ReactNode | Array<React.ReactNode>;
    testIdBuilder?: TestIdBuilder;
}
interface RenderResult {
    items: Array<JSX.Element>;
    index: number;
}
export declare class ListMenu extends React.Component<ListMenuProps> {
    static defaultProps: {
        placeholder: string;
        itemRender: (option: Option) => React.JSX.Element;
        getItemProps: (props: {
            item: Option;
            index: number;
        }) => null;
    };
    renderItem(result: RenderResult, option: Option, optionIndex: number): RenderResult;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
        placeholder?: string | undefined;
        itemRender?: ((option: Option) => JSX.Element) | undefined;
        getItemProps?: ((props: {
            item: Option;
            index: number;
        }) => any) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ListMenu>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ListMenu, {}> & {
        ComposedComponent: typeof ListMenu;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
        placeholder?: string | undefined;
        itemRender?: ((option: Option) => JSX.Element) | undefined;
        getItemProps?: ((props: {
            item: Option;
            index: number;
        }) => any) | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof ListMenu>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ListMenu, {}> & {
    ComposedComponent: typeof ListMenu;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
            placeholder?: string | undefined;
            itemRender?: ((option: Option) => JSX.Element) | undefined;
            getItemProps?: ((props: {
                item: Option;
                index: number;
            }) => any) | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ListMenuProps, keyof LocaleProps>, "style" | "disabled" | "className" | "theme" | "children" | "testIdBuilder" | "options" | "mobileUI" | "classnames" | "classPrefix" | "selectedOptions" | "onSelect" | "prefix" | "highlightIndex"> & {
                placeholder?: string | undefined;
                itemRender?: ((option: Option) => JSX.Element) | undefined;
                getItemProps?: ((props: {
                    item: Option;
                    index: number;
                }) => any) | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ListMenu>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ListMenu, {}> & {
        ComposedComponent: typeof ListMenu;
    };
};
export default _default;

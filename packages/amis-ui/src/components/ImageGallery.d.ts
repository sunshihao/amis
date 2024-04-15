/// <reference types="lodash" />
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from 'amis-core';
import { LocaleProps } from 'amis-core';
export declare enum ImageActionKey {
    /** 右旋转 */
    ROTATE_RIGHT = "rotateRight",
    /** 左旋转 */
    ROTATE_LEFT = "rotateLeft",
    /** 等比例放大 */
    ZOOM_IN = "zoomIn",
    /** 等比例缩小 */
    ZOOM_OUT = "zoomOut",
    /** 恢复原图缩放比例尺 */
    SCALE_ORIGIN = "scaleOrigin"
}
export interface ImageAction {
    key: ImageActionKey;
    label?: string;
    icon?: string | React.ReactNode;
    iconClassName?: string;
    disabled?: boolean;
    onClick?: (context: ImageGallery) => void;
}
export interface ImageGalleryProps extends ThemeProps, LocaleProps {
    children: React.ReactNode | Array<React.ReactNode>;
    modalContainer?: () => HTMLElement;
    /** 操作栏 */
    actions?: ImageAction[];
    imageGallaryClassName?: string;
}
export interface ImageGalleryState {
    isOpened: boolean;
    index: number;
    items: Array<{
        src: string;
        originalSrc: string;
        title?: string;
        caption?: string;
    }>;
    /** 图片缩放比例尺 */
    scale: number;
    /** 图片旋转角度 */
    rotate: number;
    /**
     * 水平位移
     */
    tx: number;
    /**
     * 垂直位移
     */
    ty: number;
    /** 是否开启操作栏 */
    showToolbar?: boolean;
    /** 是否显示底部图片集 */
    enlargeWithGallary?: boolean;
    /** 放大详情图类名 */
    imageGallaryClassName?: string;
    /** 工具栏配置 */
    actions?: ImageAction[];
}
export declare class ImageGallery extends React.Component<ImageGalleryProps, ImageGalleryState> {
    static defaultProps: Pick<ImageGalleryProps, 'actions'>;
    state: ImageGalleryState;
    galleryMain?: HTMLDivElement;
    galleryMainRef(ref: HTMLDivElement): void;
    onWheelScroll(event: WheelEvent): void;
    startX: number;
    startY: number;
    startTx: number;
    startTy: number;
    onMouseDown(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    onMouseUp(): void;
    handleImageEnlarge(info: {
        src: string;
        originalSrc: string;
        list?: Array<{
            src: string;
            originalSrc: string;
            title?: string;
            caption?: string;
        }>;
        title?: string;
        caption?: string;
        index?: number;
        showToolbar?: boolean;
        imageGallaryClassName?: string;
        toolbarActions?: ImageAction[];
        enlargeWithGallary?: boolean;
    }): void;
    resetImageAction(): void;
    close(): void;
    prev(): void;
    next(): void;
    handleItemClick(e: React.MouseEvent<HTMLDivElement>): void;
    handleToolbarAction: import("lodash").DebouncedFuncLeading<(action: ImageAction) => void>;
    renderToolbar(actions: ImageAction[]): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
        actions?: ImageAction[] | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ImageGallery>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ImageGallery, {}> & {
        ComposedComponent: typeof ImageGallery;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
        actions?: ImageAction[] | undefined;
    } & {} & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): React.JSX.Element;
        context: unknown;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof ImageGallery>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ImageGallery, {}> & {
    ComposedComponent: typeof ImageGallery;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
            actions?: ImageAction[] | undefined;
        } & {} & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): React.JSX.Element;
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ImageGalleryProps, keyof LocaleProps>, "style" | "className" | "theme" | "children" | "mobileUI" | "classnames" | "classPrefix" | "imageGallaryClassName" | "modalContainer"> & {
                actions?: ImageAction[] | undefined;
            } & {} & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof ImageGallery>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ImageGallery, {}> & {
        ComposedComponent: typeof ImageGallery;
    };
};
export default _default;

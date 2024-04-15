/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { RendererEnv } from './env';
import { RendererProps } from './factory';
import { TranslateFn } from './locale';
import { IRendererStore } from './store';
import { SchemaNode } from './types';
import { StatusScopedProps } from './StatusScoped';
export interface RootRenderProps {
    location?: Location;
    theme?: string;
    data?: Record<string, any>;
    locale?: string;
    [propName: string]: any;
}
export interface RootProps extends StatusScopedProps {
    schema: SchemaNode;
    rootStore: IRendererStore;
    env: RendererEnv;
    theme: string;
    pathPrefix?: string;
    locale?: string;
    translate?: TranslateFn;
    [propName: string]: any;
}
export interface RootWrapperProps {
    env: RendererEnv;
    children: React.ReactNode | Array<React.ReactNode>;
    schema: SchemaNode;
    rootStore: IRendererStore;
    theme: string;
    data?: Record<string, any>;
    context?: Record<string, any>;
    [propName: string]: any;
}
export declare function addRootWrapper(fn: (props: RootWrapperProps) => React.ReactNode): void;
export declare class Root extends React.Component<RootProps> {
    resolveDefinitions(name: string): {} | undefined;
    render(): React.JSX.Element;
}
export interface renderChildProps extends Partial<Omit<RendererProps, 'statusStore'>>, StatusScopedProps {
    env: RendererEnv;
}
export type ReactElement = React.ReactNode[] | JSX.Element | null | false;
export declare function renderChildren(prefix: string, node: SchemaNode, props: renderChildProps): ReactElement;
export declare function renderChild(prefix: string, node: SchemaNode, props: renderChildProps): ReactElement;
declare const _default: {
    new (props: Omit<RootProps & {
        scopeRef?: ((ref: any) => void) | undefined;
    }, "statusStore">): {
        store?: ({
            visibleState: any;
            disableState: any;
            staticState: any;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            setVisible(key: string, value?: boolean | undefined): void;
            setDisable(key: string, value?: boolean | undefined): void;
            setStatic(key: string, value?: boolean | undefined): void;
            resetAll(): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            visibleState: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
            disableState: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
            staticState: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        }, {
            setVisible(key: string, value?: boolean | undefined): void;
            setDisable(key: string, value?: boolean | undefined): void;
            setStatic(key: string, value?: boolean | undefined): void;
            resetAll(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | undefined;
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        componentWillUnmount(): void;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<RootProps & {
            scopeRef?: ((ref: any) => void) | undefined;
        }, "statusStore">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<RootProps & {
            scopeRef?: ((ref: any) => void) | undefined;
        }, "statusStore">>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<RootProps & {
            scopeRef?: ((ref: any) => void) | undefined;
        }, "statusStore">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<RootProps & {
            scopeRef?: ((ref: any) => void) | undefined;
        }, "statusStore">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<RootProps & {
            scopeRef?: ((ref: any) => void) | undefined;
        }, "statusStore">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<RootProps & {
            scopeRef?: ((ref: any) => void) | undefined;
        }, "statusStore">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<RootProps & {
            scopeRef?: ((ref: any) => void) | undefined;
        }, "statusStore">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<RootProps & {
            scopeRef?: ((ref: any) => void) | undefined;
        }, "statusStore">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<RootProps & {
            scopeRef?: ((ref: any) => void) | undefined;
        }, "statusStore">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    ComposedComponent: React.ComponentType<React.ComponentType<RootProps & {
        scopeRef?: ((ref: any) => void) | undefined;
    }> & {
        ComposedComponent: React.ComponentType<RootProps>;
    }>;
    contextType?: React.Context<any> | undefined;
} & import("hoist-non-react-statics").NonReactStatics<React.ComponentType<RootProps & {
    scopeRef?: ((ref: any) => void) | undefined;
}> & {
    ComposedComponent: React.ComponentType<RootProps>;
}, {}> & {
    ComposedComponent: React.ComponentType<RootProps & {
        scopeRef?: ((ref: any) => void) | undefined;
    }> & {
        ComposedComponent: React.ComponentType<RootProps>;
    };
};
export default _default;

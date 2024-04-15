import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { IStatusStore } from './store/status';
export interface StatusScopedProps {
    statusStore: IStatusStore;
}
export declare function StatusScoped<T extends React.ComponentType<React.ComponentProps<T> & StatusScopedProps>>(ComposedComponent: T): {
    new (props: JSX.LibraryManagedAttributes<T, Omit<React.ComponentProps<T>, "statusStore">> & {}): {
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
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<JSX.LibraryManagedAttributes<T, Omit<React.ComponentProps<T>, "statusStore">> & {}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<JSX.LibraryManagedAttributes<T, Omit<React.ComponentProps<T>, "statusStore">> & {}>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<JSX.LibraryManagedAttributes<T, Omit<React.ComponentProps<T>, "statusStore">> & {}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<JSX.LibraryManagedAttributes<T, Omit<React.ComponentProps<T>, "statusStore">> & {}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<JSX.LibraryManagedAttributes<T, Omit<React.ComponentProps<T>, "statusStore">> & {}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<JSX.LibraryManagedAttributes<T, Omit<React.ComponentProps<T>, "statusStore">> & {}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<JSX.LibraryManagedAttributes<T, Omit<React.ComponentProps<T>, "statusStore">> & {}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<JSX.LibraryManagedAttributes<T, Omit<React.ComponentProps<T>, "statusStore">> & {}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<JSX.LibraryManagedAttributes<T, Omit<React.ComponentProps<T>, "statusStore">> & {}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    ComposedComponent: React.ComponentType<T>;
    contextType?: React.Context<any> | undefined;
} & hoistNonReactStatic.NonReactStatics<T, {}> & {
    ComposedComponent: T;
};

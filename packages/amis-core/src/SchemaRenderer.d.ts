import React from 'react';
import { RendererConfig, RendererEnv, RendererProps } from './factory';
import { IScopedContext } from './Scoped';
import { Schema, SchemaNode } from './types';
import { RendererEvent } from './utils/renderer-event';
import { StatusScopedProps } from './StatusScoped';
interface SchemaRendererProps extends Partial<Omit<RendererProps, 'statusStore'>>, StatusScopedProps {
    schema: Schema;
    $path: string;
    env: RendererEnv;
}
export declare const RENDERER_TRANSMISSION_OMIT_PROPS: string[];
export declare class SchemaRenderer extends React.Component<SchemaRendererProps, any> {
    static displayName: string;
    static contextType: React.Context<IScopedContext>;
    rendererKey: string;
    renderer: RendererConfig | null;
    ref: any;
    cRef: any;
    schema: any;
    path: string;
    reaction: any;
    unbindEvent: (() => void) | undefined;
    isStatic: any;
    constructor(props: SchemaRendererProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: SchemaRendererProps): boolean;
    resolveRenderer(props: SchemaRendererProps, force?: boolean): any;
    getWrappedInstance(): any;
    refFn(ref: any): void;
    childRef(ref: any): void;
    dispatchEvent(e: React.MouseEvent<any>, data: any, renderer?: React.Component<RendererProps>): Promise<RendererEvent<any> | void>;
    renderChild(region: string, node?: SchemaNode, subProps?: {
        data?: object;
        [propName: string]: any;
    }): any;
    reRender(): void;
    render(): JSX.Element | null;
}
export {};

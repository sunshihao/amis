import { BasePlugin, BasicRendererInfo, RendererInfoResolveEventContext } from '../plugin';
export declare class UnkownRendererPlugin extends BasePlugin {
    static scene: string[];
    order: number;
    getRendererInfo({ renderer, schema, path }: RendererInfoResolveEventContext): BasicRendererInfo | void;
}

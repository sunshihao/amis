/**
 * 基于 tsee 删减了不需要的功能
 */
/// <reference types="node" />
export type Listener = (...args: any[]) => Promise<any> | void;
export type DefaultEventMap = {
    [event in string | symbol]: Listener;
};
export interface IEventEmitter<EventMap extends DefaultEventMap = DefaultEventMap> {
    emit<EventKey extends keyof EventMap>(event: EventKey, ...args: Parameters<EventMap[EventKey]>): boolean;
    on<EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]): this;
    once<EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]): this;
    addListener<EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]): this;
    removeListener<EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]): this;
    prependListener<EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]): this;
    prependOnceListener<EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]): this;
    off<EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]): this;
    removeAllListeners<EventKey extends keyof EventMap = string>(event?: EventKey): this;
}
/** cast type of any event emitter to typed event emitter */
export declare function asTypedEventEmitter<EventMap extends DefaultEventMap, X extends NodeJS.EventEmitter>(x: X): IEventEmitter<EventMap>;
/** Implemented event emitter */
export declare class EventEmitter<EventMap extends DefaultEventMap = DefaultEventMap> implements IEventEmitter<EventMap> {
    private debug;
    constructor();
    events: {
        [eventName in keyof EventMap]?: Function[];
    };
    emit: <EventKey extends keyof EventMap>(event: EventKey, ...args: Parameters<EventMap[EventKey]>) => boolean;
    on: <EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]) => this;
    once: <EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]) => this;
    addListener: <EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]) => this;
    removeListener: <EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]) => this;
    prependListener: <EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]) => this;
    prependOnceListener: <EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]) => this;
    off: <EventKey extends keyof EventMap = string>(event: EventKey, listener: EventMap[EventKey]) => this;
    removeAllListeners: <EventKey extends keyof EventMap = string>(event?: EventKey | undefined) => this;
}

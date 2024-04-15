/**
 * https://github.com/bameyrick/throttle-typescript
 */
export type ThrottledFunction<T extends (...args: any) => any> = (...args: Parameters<T>) => ReturnType<T>;
export declare function throttle<T extends (...args: any) => any>(func: T, limit: number): ThrottledFunction<T>;

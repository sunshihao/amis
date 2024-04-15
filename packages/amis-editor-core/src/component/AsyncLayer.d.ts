/**
 * @file AsyncLayer.tsx
 * @desc 异步加载层
 */
import React from 'react';
export interface AsyncLayerOptions {
    fallback?: React.ReactNode;
}
export declare const makeAsyncLayer: (schemaBuilderFn: () => Promise<any>, options?: AsyncLayerOptions) => (props: any) => React.JSX.Element;

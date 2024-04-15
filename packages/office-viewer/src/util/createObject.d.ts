/**
 * 拷贝自 amis 里的方法，避免依赖
 */
export declare function createObject(superProps?: {
    [propName: string]: any;
}, props?: {
    [propName: string]: any;
}, properties?: any): object;
export declare function cloneObject(target: any, persistOwnProps?: boolean): any;

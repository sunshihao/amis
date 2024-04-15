/**
 * 应对 numfmt 不识别的情况
 */
export declare function numfmtExtend(formatCode?: string): {
    (val: string): string;
    isDate(): boolean;
    info: {
        color: number;
    };
};

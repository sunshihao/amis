export declare function useValidationResolver(__?: (str: string) => string, validate?: (error: {
    [propName: string]: {
        rule: string;
        msg: string;
    }[];
}, values: Record<string, any>, context: any, config: any) => Promise<void>): any;
export default useValidationResolver;

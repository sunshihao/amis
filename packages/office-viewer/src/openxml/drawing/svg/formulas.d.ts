/**
 * 计算公式 20.1.9.11
 */
export declare const formulas: {
    '*/': (x: number, y: number, z: number) => number;
    '+-': (x: number, y: number, z: number) => number;
    '+/': (x: number, y: number, z: number) => number;
    '?:': (x: number, y: number, z: number) => number;
    abs: (x: number) => number;
    at2: (x: number, y: number) => number;
    cat2: (x: number, y: number, z: number) => number;
    cos: (x: number, y: number) => number;
    max: (x: number, y: number) => number;
    min: (x: number, y: number) => number;
    mod: (x: number, y: number, z: number) => number;
    pin: (x: number, y: number, z: number) => number;
    sat2: (x: number, y: number, z: number) => number;
    sin: (x: number, y: number) => number;
    sqrt: (x: number) => number;
    tan: (x: number, y: number) => number;
    val: (a: string) => number;
};
/**
 * 执行公式计算并返回结果
 * @param fmla 公式
 * @param vars 变量值
 * @returns
 */
export declare function evalFmla(name: string, fmla: string, vars: Record<string, number>): number;

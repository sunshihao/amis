export declare function runSequence<T, U>(arr: Array<T>, fn: (item: T, index: number) => Promise<U>): Promise<U[]>;
declare const AsyncEvaluator_base: any;
export declare class AsyncEvaluator extends AsyncEvaluator_base {
    constructor(data: any, options?: any);
    document(ast: {
        type: 'document';
        body: Array<any>;
    }): Promise<any>;
    filter(ast: {
        type: 'filter';
        input: any;
        filters: Array<{
            name: string;
            args: Array<any>;
        }>;
    }): Promise<any>;
    template(ast: {
        type: 'template';
        body: Array<any>;
    }): Promise<string>;
    getter(ast: {
        host: any;
        key: any;
    }): Promise<any>;
    unary(ast: {
        op: '+' | '-' | '~' | '!';
        value: any;
    }): Promise<number | boolean>;
    power(ast: {
        left: any;
        right: any;
    }): Promise<number>;
    multiply(ast: {
        left: any;
        right: any;
    }): Promise<number>;
    divide(ast: {
        left: any;
        right: any;
    }): Promise<number>;
    remainder(ast: {
        left: any;
        right: any;
    }): Promise<number>;
    add(ast: {
        left: any;
        right: any;
    }): Promise<any>;
    minus(ast: {
        left: any;
        right: any;
    }): Promise<number>;
    shift(ast: {
        op: '<<' | '>>' | '>>>';
        left: any;
        right: any;
    }): Promise<number>;
    lt(ast: {
        left: any;
        right: any;
    }): Promise<boolean>;
    gt(ast: {
        left: any;
        right: any;
    }): Promise<boolean>;
    le(ast: {
        left: any;
        right: any;
    }): Promise<boolean>;
    ge(ast: {
        left: any;
        right: any;
    }): Promise<boolean>;
    eq(ast: {
        left: any;
        right: any;
    }): Promise<boolean>;
    ne(ast: {
        left: any;
        right: any;
    }): Promise<boolean>;
    streq(ast: {
        left: any;
        right: any;
    }): Promise<boolean>;
    strneq(ast: {
        left: any;
        right: any;
    }): Promise<boolean>;
    binary(ast: {
        op: '&' | '^' | '|';
        left: any;
        right: any;
    }): Promise<number>;
    and(ast: {
        left: any;
        right: any;
    }): Promise<any>;
    or(ast: {
        left: any;
        right: any;
    }): Promise<any>;
    array(ast: {
        type: 'array';
        members: Array<any>;
    }): Promise<unknown[]>;
    object(ast: {
        members: Array<{
            key: string;
            value: any;
        }>;
    }): Promise<any>;
    conditional(ast: {
        type: 'conditional';
        test: any;
        consequent: any;
        alternate: any;
    }): Promise<any>;
    funcCall(this: any, ast: {
        identifier: string;
        args: Array<any>;
    }): Promise<any>;
    callAnonymousFunction(ast: {
        args: any[];
        return: any;
    }, args: Array<any>): Promise<any>;
    /**
     * 示例：IF(A, B, C)
     *
     * 如果满足条件A，则返回B，否则返回C，支持多层嵌套IF函数。
     *
     * 也可以用表达式如：A ? B : C
     *
     * @example IF(condition, consequent, alternate)
     * @param {expression} condition - 条件表达式.
     * @param {any} consequent 条件判断通过的返回结果
     * @param {any} alternate 条件判断不通过的返回结果
     * @namespace 逻辑函数
     *
     * @returns {any} 根据条件返回不同的结果
     */
    fnIF(condition: () => any, trueValue: () => any, falseValue: () => any): Promise<any>;
    /**
     * 条件全部符合，返回 true，否则返回 false
     *
     * 示例：AND(语文成绩>80, 数学成绩>80)
     *
     * 语文成绩和数学成绩都大于 80，则返回 true，否则返回 false
     *
     * 也可以直接用表达式如：语文成绩>80 && 数学成绩>80
     *
     * @example AND(expression1, expression2, ...expressionN)
     * @param {...expression} conditions - 条件表达式.
     * @namespace 逻辑函数
     *
     * @returns {boolean}
     */
    fnAND(...condtions: Array<() => any>): Promise<boolean>;
    /**
     * 条件任意一个满足条件，返回 true，否则返回 false
     *
     * 示例：OR(语文成绩>80, 数学成绩>80)
     *
     * 语文成绩和数学成绩任意一个大于 80，则返回 true，否则返回 false
     *
     * 也可以直接用表达式如：语文成绩>80 || 数学成绩>80
     *
     * @example OR(expression1, expression2, ...expressionN)
     * @param {...expression} conditions - 条件表达式.
     * @namespace 逻辑函数
     *
     * @returns {boolean}
     */
    fnOR(...condtions: Array<() => any>): Promise<boolean>;
    /**
     * 异或处理，多个表达式组中存在奇数个真时认为真。
     *
     * @example XOR(condition1, condition2)
     * @param {expression} condition1 - 条件表达式1
     * @param {expression} condition2 - 条件表达式2
     * @namespace 逻辑函数
     *
     * @returns {boolean}
     */
    fnXOR(...condtions: Array<() => any>): Promise<boolean>;
    /**
     * 判断函数集合，相当于多个 else if 合并成一个。
     *
     * 示例：IFS(语文成绩 > 80, "优秀", 语文成绩 > 60, "良", "继续努力")
     *
     * 如果语文成绩大于 80，则返回优秀，否则判断大于 60 分，则返回良，否则返回继续努力。
     *
     * @example IFS(condition1, result1, condition2, result2,...conditionN, resultN)
     * @param {...any} args - 条件，返回值集合
     * @namespace 逻辑函数
     * @returns {any} 第一个满足条件的结果，没有命中的返回 false。
     */
    fnIFS(...args: Array<() => any>): Promise<any>;
    /**
     * 数组做数据转换，需要搭配箭头函数一起使用，注意箭头函数只支持单表达式用法。
     *
     * @param {Array<any>} arr 数组
     * @param {Function<any>} iterator 箭头函数
     * @namespace 数组
     * @example ARRAYMAP(arr, item => item)
     * @returns {boolean} 结果
     */
    fnARRAYMAP(value: any, iterator: any): any;
    /**
     * 数据做数据过滤，需要搭配箭头函数一起使用，注意箭头函数只支持单表达式用法。
     * 将第二个箭头函数返回为 false 的成员过滤掉。
     *
     * @param {Array<any>} arr 数组
     * @param {Function<any>} iterator 箭头函数
     * @namespace 数组
     * @example ARRAYFILTER(arr, item => item)
     * @returns {boolean} 结果
     */
    fnARRAYFILTER(value: any, iterator: any): Promise<any>;
    /**
     * 数据做数据查找，需要搭配箭头函数一起使用，注意箭头函数只支持单表达式用法。
     * 找出第二个箭头函数返回为 true 的成员的索引。
     *
     * 示例：
     *
     * ARRAYFINDINDEX([0, 2, false], item => item === 2) 得到 1
     *
     * @param {Array<any>} arr 数组
     * @param {Function<any>} iterator 箭头函数
     * @namespace 数组
     * @example ARRAYFINDINDEX(arr, item => item === 2)
     * @returns {number} 结果
     */
    fnARRAYFINDINDEX(arr: any[], iterator: any): Promise<number>;
    /**
     * 数据做数据查找，需要搭配箭头函数一起使用，注意箭头函数只支持单表达式用法。
     * 找出第二个箭头函数返回为 true 的成员。
     *
     * 示例：
     *
     * ARRAYFIND([0, 2, false], item => item === 2) 得到 2
     *
     * @param {Array<any>} arr 数组
     * @param {Function<any>} iterator 箭头函数
     * @namespace 数组
     * @example ARRAYFIND(arr, item => item === 2)
     * @returns {any} 结果
     */
    fnARRAYFIND(arr: any[], iterator: any): Promise<undefined>;
    /**
     * 数据做数据遍历判断，需要搭配箭头函数一起使用，注意箭头函数只支持单表达式用法。
     * 判断第二个箭头函数是否存在返回为 true 的成员。
     *
     * 示例：
     *
     * ARRAYSOME([0, 2, false], item => item === 2) 得到 true
     *
     * @param {Array<any>} arr 数组
     * @param {Function<any>} iterator 箭头函数
     * @namespace 数组
     * @example ARRAYSOME(arr, item => item === 2)
     * @returns {boolean} 结果
     */
    fnARRAYSOME(arr: any[], iterator: any): Promise<any>;
    /**
     * 数据做数据遍历判断，需要搭配箭头函数一起使用，注意箭头函数只支持单表达式用法。
     * 判断第二个箭头函数返回是否都为 true。
     *
     * 示例：
     *
     * ARRAYEVERY([0, 2, false], item => item === 2) 得到 false
     *
     * @param {Array<any>} arr 数组
     * @param {Function<any>} iterator 箭头函数
     * @namespace 数组
     * @example ARRAYEVERY(arr, item => item === 2)
     * @returns {boolean} 结果
     */
    fnARRAYEVERY(arr: any[], iterator: any): Promise<any>;
}
export {};

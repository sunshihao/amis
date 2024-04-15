/**
 * @file 公式内置函数
 */
import { EvaluatorOptions, FilterMap, FunctionMap } from './types';
export declare class Evaluator {
    readonly options: EvaluatorOptions;
    readonly filters: FilterMap;
    readonly functions: FunctionMap;
    readonly context: {
        [propName: string]: any;
    };
    contextStack: Array<(varname: string) => any>;
    static defaultFilters: FilterMap;
    static setDefaultFilters(filters: FilterMap): void;
    static defaultFunctions: FunctionMap;
    static setDefaultFunctions(funtions: FunctionMap): void;
    constructor(context: {
        [propName: string]: any;
    }, options?: EvaluatorOptions);
    evalute(ast: any): any;
    document(ast: {
        type: 'document';
        body: Array<any>;
    }): any;
    filter(ast: {
        type: 'filter';
        input: any;
        filters: Array<{
            name: string;
            args: Array<any>;
        }>;
    }): any;
    raw(ast: {
        type: 'raw';
        value: string;
    }): string;
    script(ast: {
        type: 'script';
        body: any;
    }): any;
    expressionList(ast: {
        type: 'expression-list';
        body: Array<any>;
    }): any;
    template(ast: {
        type: 'template';
        body: Array<any>;
    }): string;
    templateRaw(ast: {
        type: 'template_raw';
        value: any;
    }): any;
    getter(ast: {
        host: any;
        key: any;
    }): any;
    unary(ast: {
        op: '+' | '-' | '~' | '!';
        value: any;
    }): number | boolean;
    formatNumber(value: any, int?: boolean): any;
    power(ast: {
        left: any;
        right: any;
    }): number;
    multiply(ast: {
        left: any;
        right: any;
    }): number;
    divide(ast: {
        left: any;
        right: any;
    }): number;
    remainder(ast: {
        left: any;
        right: any;
    }): number;
    add(ast: {
        left: any;
        right: any;
    }): any;
    minus(ast: {
        left: any;
        right: any;
    }): number;
    shift(ast: {
        op: '<<' | '>>' | '>>>';
        left: any;
        right: any;
    }): number;
    lt(ast: {
        left: any;
        right: any;
    }): boolean;
    gt(ast: {
        left: any;
        right: any;
    }): boolean;
    le(ast: {
        left: any;
        right: any;
    }): boolean;
    ge(ast: {
        left: any;
        right: any;
    }): boolean;
    eq(ast: {
        left: any;
        right: any;
    }): boolean;
    ne(ast: {
        left: any;
        right: any;
    }): boolean;
    streq(ast: {
        left: any;
        right: any;
    }): boolean;
    strneq(ast: {
        left: any;
        right: any;
    }): boolean;
    binary(ast: {
        op: '&' | '^' | '|';
        left: any;
        right: any;
    }): number;
    and(ast: {
        left: any;
        right: any;
    }): any;
    or(ast: {
        left: any;
        right: any;
    }): any;
    number(ast: {
        value: any;
        raw: string;
    }): any;
    /**
     * 名字空间下获取变量，可能存在变量名中带-的特殊情况，目前无法直接获取 ${ns:xxx-xxx}
     * 想借助 ${ns:&['xxx-xxx']} 用法来支持特殊字符。
     *
     * 而 cookie, localstorage, sessionstorage 都不支持获取全量数据，如 ${ns: &}
     * 所以当存在上述用法时，将 & 作为一个占位
     *
     * 比如 cookie 中有一个 key 为 xxx-xxx 的值，那么可以通过 &['xxx-xxx'] 来获取。
     * 而无法通过 ${cookie:xxx-xxx} 来获取。 因为这样会被认为是减操作
     * @param ast
     * @returns
     */
    convertHostGetterToVariable(ast: any): any;
    nsVariable(ast: {
        namespace: string;
        body: any;
    }): any;
    variable(ast: {
        name: string;
    }): any;
    identifier(ast: {
        name: string;
    }): string;
    array(ast: {
        type: 'array';
        members: Array<any>;
    }): any[];
    literal(ast: {
        type: 'literal';
        value: any;
    }): any;
    string(ast: {
        type: 'string';
        value: string;
    }): string;
    object(ast: {
        members: Array<{
            key: string;
            value: any;
        }>;
    }): any;
    conditional(ast: {
        type: 'conditional';
        test: any;
        consequent: any;
        alternate: any;
    }): any;
    funcCall(this: any, ast: {
        identifier: string;
        args: Array<any>;
    }): any;
    anonymousFunction(ast: any): any;
    callAnonymousFunction(ast: {
        args: any[];
        return: any;
    }, args: Array<any>): any;
    /**
     * 如果满足条件condition，则返回consequent，否则返回alternate，支持多层嵌套IF函数。
     *
     * 等价于直接用JS表达式如：condition ? consequent : alternate。
     *
     * @example IF(condition, consequent, alternate)
     * @param {expression} condition 条件表达式。例如：语文成绩>80
     * @param {any} consequent 条件判断通过的返回结果
     * @param {any} alternate 条件判断不通过的返回结果
     * @namespace 逻辑函数
     *
     * @returns {any} 根据条件返回不同的结果
     */
    fnIF(condition: () => any, trueValue: () => any, falseValue: () => any): any;
    /**
     * 条件全部符合，返回 true，否则返回 false。
     *
     * 示例：AND(语文成绩>80, 数学成绩>80)，
     *
     * 语文成绩和数学成绩都大于 80，则返回 true，否则返回 false，
     *
     * 等价于直接用JS表达式如：语文成绩>80 && 数学成绩>80。
     *
     * @example AND(expression1, expression2, ...expressionN)
     * @param {...expression} conditions 条件表达式，多个用逗号隔开。例如：语文成绩>80, 数学成绩>80
     * @namespace 逻辑函数
     *
     * @returns {boolean}
     */
    fnAND(...condtions: Array<() => any>): boolean;
    /**
     * 条件任意一个满足条件，返回 true，否则返回 false。
     *
     * 示例：OR(语文成绩>80, 数学成绩>80)，
     *
     * 语文成绩和数学成绩任意一个大于 80，则返回 true，否则返回 false，
     *
     * 等价于直接用JS表达式如：语文成绩>80 || 数学成绩>80。
     *
     * @example OR(expression1, expression2, ...expressionN)
     * @param {...expression} conditions 条件表达式，多个用逗号隔开。例如：语文成绩>80, 数学成绩>80
     * @namespace 逻辑函数
     *
     * @returns {boolean}
     */
    fnOR(...condtions: Array<() => any>): boolean;
    /**
     * 异或处理，多个表达式组中存在奇数个真时认为真。
     *
     * 示例：XOR(语文成绩 > 80, 数学成绩 > 80, 英语成绩 > 80)
     *
     * 三门成绩中有一门或者三门大于 80，则返回 true，否则返回 false。
     *
     * @example XOR(condition1, condition2, ...expressionN)
     * @param {...expression} condition 条件表达式，多个用逗号隔开。例如：语文成绩>80, 数学成绩>80
     * @namespace 逻辑函数
     *
     * @returns {boolean}
     */
    fnXOR(...condtions: Array<() => any>): boolean;
    /**
     * 判断函数集合，相当于多个 else if 合并成一个。
     *
     * 示例：IFS(语文成绩 > 80, "优秀", 语文成绩 > 60, "良", "继续努力")，
     *
     * 如果语文成绩大于 80，则返回优秀，否则判断大于 60 分，则返回良，否则返回继续努力。
     *
     * @example IFS(condition1, result1, condition2, result2,...conditionN, resultN)
     * @param {...expression} condition 条件表达式
     * @param {...any} result 返回值
     * @namespace 逻辑函数
     * @returns {any} 第一个满足条件的结果，没有命中的返回 false。
     */
    fnIFS(...args: Array<() => any>): any;
    /**
     * 返回传入数字的绝对值。
     *
     * @example ABS(num)
     * @param {number} num - 数值
     * @namespace 数学函数
     *
     * @returns {number} 传入数值的绝对值
     */
    fnABS(a: number): number;
    /**
     * 获取最大值，如果只有一个参数且是数组，则计算这个数组内的值。
     *
     * @example MAX(num1, num2, ...numN)
     * @param {...number} num - 数值
     * @namespace 数学函数
     *
     * @returns {number} 所有传入值中最大的那个
     */
    fnMAX(...args: Array<any>): number;
    /**
     * 获取最小值，如果只有一个参数且是数组，则计算这个数组内的值。
     *
     * @example MIN(num1, num2, ...numN)
     * @param {...number} num - 数值
     * @namespace 数学函数
     *
     * @returns {number} 所有传入值中最小的那个
     */
    fnMIN(...args: Array<number>): number;
    /**
     * 求和，如果只有一个参数且是数组，则计算这个数组内的值。
     *
     * @example SUM(num1, num2, ...numN)
     * @param {...number} num - 数值
     * @namespace 数学函数
     *
     * @returns {number} 所有传入数值的总和
     */
    fnSUM(...args: Array<number>): any;
    /**
     * 将数值向下取整为最接近的整数。
     *
     * @example INT(num)
     * @param {number} num - 数值
     * @namespace 数学函数
     *
     * @returns {number} 数值对应的整形
     */
    fnINT(n: number): number;
    /**
     * 返回两数相除的余数，参数 number 是被除数，divisor 是除数。
     *
     * @example MOD(num, divisor)
     * @param {number} num - 被除数
     * @param {number} divisor - 除数
     * @namespace 数学函数
     *
     * @returns {number} 两数相除的余数
     */
    fnMOD(a: number, b: number): number;
    /**
     * 圆周率 3.1415...。
     *
     * @example PI()
     * @namespace 数学函数
     *
     * @returns {number} 圆周率数值
     */
    fnPI(): number;
    /**
     * 将数字四舍五入到指定的位数，可以设置小数位。
     *
     * @example ROUND(num[, numDigits = 2])
     * @param {number} num - 要处理的数字
     * @param {number} numDigits - 小数位数，默认为2
     * @namespace 数学函数
     *
     * @returns {number} 传入数值四舍五入后的结果
     */
    fnROUND(a: number, b?: number): number;
    /**
     * 将数字向下取整到指定的位数，可以设置小数位。
     *
     * @example FLOOR(num[, numDigits=2])
     * @param {number} num - 要处理的数字
     * @param {number} numDigits - 小数位数，默认为2
     * @namespace 数学函数
     *
     * @returns {number} 传入数值向下取整后的结果
     */
    fnFLOOR(a: number, b?: number): number;
    /**
     * 将数字向上取整到指定的位数，可以设置小数位。
     *
     * @example CEIL(num[, numDigits=2])
     * @param {number} num - 要处理的数字
     * @param {number} numDigits - 小数位数，默认为2
     * @namespace 数学函数
     *
     * @returns {number} 传入数值向上取整后的结果
     */
    fnCEIL(a: number, b?: number): number;
    /**
     * 开平方，参数 number 为非负数
     *
     * @example SQRT(num)
     * @param {number} num - 要处理的数字
     * @namespace 数学函数
     *
     * @returns {number} 开平方的结果
     */
    fnSQRT(n: number): number;
    /**
     * 返回所有参数的平均值，如果只有一个参数且是数组，则计算这个数组内的值。
     *
     * @example AVG(num1, num2, ...numN)
     * @param {...number} num - 要处理的数字
     * @namespace 数学函数
     *
     * @returns {number} 所有数值的平均值
     */
    fnAVG(...args: Array<any>): number;
    /**
     * 返回数据点与数据均值点之差（数据偏差）的平方和，如果只有一个参数且是数组，则计算这个数组内的值。
     *
     * @example DEVSQ(num1, num2, ...numN)
     * @param {...number} num - 要处理的数字
     * @namespace 数学函数
     *
     * @returns {number} 所有数值的平均值
     */
    fnDEVSQ(...args: Array<any>): number | null;
    /**
     * 数据点到其算术平均值的绝对偏差的平均值。
     *
     * @example AVEDEV(num1, num2, ...numN)
     * @param {...number} num - 要处理的数字
     * @namespace 数学函数
     *
     * @returns {number} 所有数值的平均值
     */
    fnAVEDEV(...args: Array<any>): number | null;
    /**
     * 数据点的调和平均值，如果只有一个参数且是数组，则计算这个数组内的值。
     *
     * @example HARMEAN(num1, num2, ...numN)
     * @param {...number} num - 要处理的数字
     * @namespace 数学函数
     *
     * @returns {number} 所有数值的平均值
     */
    fnHARMEAN(...args: Array<any>): number | null;
    /**
     * 数据集中第 k 个最大值。
     *
     * @example LARGE(array, k)
     * @param {array} nums - 要处理的数字
     * @param {number}  k - 第几大
     * @namespace 数学函数
     *
     * @returns {number} 所有数值的平均值
     */
    fnLARGE(nums: Array<any>, k: number): any;
    /**
     * 将数值转为中文大写金额。
     *
     * @example UPPERMONEY(num)
     * @param {number} num - 要处理的数字
     * @namespace 数学函数
     *
     * @returns {string} 数值中文大写字符
     */
    fnUPPERMONEY(n: number): string;
    /**
     * 返回大于等于 0 且小于 1 的均匀分布随机实数。每一次触发计算都会变化。
     *
     * 示例：`RAND()*100`，
     *
     * 返回 0-100 之间的随机数。
     *
     * @example RAND()
     * @namespace 数学函数
     *
     * @returns {number} 随机数
     */
    fnRAND(): number;
    /**
     * 取数据最后一个。
     *
     * @example LAST(array)
     * @param {...number} arr - 要处理的数组
     * @namespace 数学函数
     *
     * @returns {any} 最后一个值
     */
    fnLAST(arr: Array<any>): any;
    /**
     * 返回基数的指数次幂，参数base为基数，exponent为指数，如果参数值不合法则返回基数本身，计算结果不合法，则返回NaN。
     *
     * @example POW(base, exponent)
     * @param {number} base 基数
     * @param {number} exponent 指数
     * @namespace 数学函数
     *
     * @returns {number} 基数的指数次幂
     */
    fnPOW(base: number, exponent: number): number;
    normalizeText(raw: any): string;
    /**
     * 返回传入文本左侧的指定长度字符串。
     *
     * @example LEFT(text, len)
     * @param {string} text - 要处理的文本
     * @param {number} len - 要处理的长度
     * @namespace 文本函数
     *
     * @returns {string} 对应字符串
     */
    fnLEFT(text: string, len: number): string;
    /**
     * 返回传入文本右侧的指定长度字符串。
     *
     * @example RIGHT(text, len)
     * @param {string} text - 要处理的文本
     * @param {number} len - 要处理的长度
     * @namespace 文本函数
     *
     * @returns {string} 对应字符串
     */
    fnRIGHT(text: string, len: number): string;
    /**
     * 计算文本的长度。
     *
     * @example LEN(text)
     * @param {string} text - 要处理的文本
     * @namespace 文本函数
     *
     * @returns {number} 长度
     */
    fnLEN(text: string): number;
    /**
     * 计算文本集合中所有文本的长度。
     *
     * @example LENGTH(textArr)
     * @param {string[]} textArr - 要处理的文本集合
     * @namespace 文本函数
     *
     * @returns {number[]} 长度集合
     */
    fnLENGTH(...args: any[]): number;
    /**
     * 判断文本是否为空。
     *
     * @example ISEMPTY(text)
     * @param {string} text - 要处理的文本
     * @namespace 文本函数
     *
     * @returns {boolean} 判断结果
     */
    fnISEMPTY(text: string): boolean;
    /**
     * 将多个传入值连接成文本。
     *
     * @example CONCATENATE(text1, text2, ...textN)
     * @param {...string} text - 文本集合
     * @namespace 文本函数
     *
     * @returns {string} 连接后的文本
     */
    fnCONCATENATE(...args: Array<any>): string;
    /**
     * 返回计算机字符集的数字代码所对应的字符。
     *
     * 示例：`CHAR(97)` 等价于 "a"。
     *
     * @example CHAR(code)
     * @param {number} code - 编码值
     * @namespace 文本函数
     *
     * @returns {string} 指定位置的字符
     */
    fnCHAR(code: number): string;
    /**
     * 将传入文本转成小写。
     *
     * @example LOWER(text)
     * @param {string} text - 文本
     * @namespace 文本函数
     *
     * @returns {string} 结果文本
     */
    fnLOWER(text: string): string;
    /**
     * 将传入文本转成大写。
     *
     * @example UPPER(text)
     * @param {string} text - 文本
     * @namespace 文本函数
     *
     * @returns {string} 结果文本
     */
    fnUPPER(text: string): string;
    /**
     * 将传入文本首字母转成大写。
     *
     * @example UPPERFIRST(text)
     * @param {string} text - 文本
     * @namespace 文本函数
     *
     * @returns {string} 结果文本
     */
    fnUPPERFIRST(text: string): string;
    /**
     * 向前补齐文本长度。
     *
     * 示例 `PADSTART("6", 2, "0")`，
     *
     * 返回 `06`。
     *
     * @example PADSTART(text)
     * @param {string} text - 文本
     * @param {number} num - 目标长度
     * @param {string} pad - 用于补齐的文本
     * @namespace 文本函数
     *
     * @returns {string} 结果文本
     */
    fnPADSTART(text: string, num: number, pad: string): string;
    /**
     * 将文本转成标题。
     *
     * 示例 `CAPITALIZE("star")`，
     *
     * 返回 `Star`。
     *
     * @example CAPITALIZE(text)
     * @param {string} text - 文本
     * @namespace 文本函数
     *
     * @returns {string} 结果文本
     */
    fnCAPITALIZE(text: string): string;
    /**
     * 对文本进行 HTML 转义。
     *
     * 示例 `ESCAPE("<star>&")`，
     *
     * 返回 `&lt;start&gt;&amp;`。
     *
     * @example ESCAPE(text)
     * @param {string} text - 文本
     * @namespace 文本函数
     *
     * @returns {string} 结果文本
     */
    fnESCAPE(text: string): string;
    /**
     * 对文本长度进行截断。
     *
     * 示例 `TRUNCATE("amis.baidu.com", 6)`，
     *
     * 返回 `amis...`。
     *
     * @example TRUNCATE(text, 6)
     * @param {string} text - 文本
     * @param {number} text - 最长长度
     * @namespace 文本函数
     *
     * @returns {string} 结果文本
     */
    fnTRUNCATE(text: string, length: number): string;
    /**
     *  取在某个分隔符之前的所有字符串。
     *
     * @example  BEFORELAST(text, '.')
     * @param {string} text - 文本
     * @param {string} delimiter - 结束文本
     * @namespace 文本函数
     *
     * @returns {string} 判断结果
     */
    fnBEFORELAST(text: string, delimiter?: string): string;
    /**
     * 将文本根据指定片段分割成数组。
     *
     * 示例：`SPLIT("a,b,c", ",")`，
     *
     * 返回 `["a", "b", "c"]`。
     *
     * @example SPLIT(text, ',')
     * @param {string} text - 文本
     * @param {string} delimiter - 文本片段
     * @namespace 文本函数
     *
     * @returns {Array<string>} 文本集
     */
    fnSPLIT(text: string, sep?: string): string[];
    /**
     * 将文本去除前后空格。
     *
     * @example TRIM(text)
     * @param {string} text - 文本
     * @namespace 文本函数
     *
     * @returns {string} 处理后的文本
     */
    fnTRIM(text: string): string;
    /**
     * 去除文本中的 HTML 标签。
     *
     * 示例：`STRIPTAG("<b>amis</b>")`，
     *
     * 返回：`amis`。
     *
     * @example STRIPTAG(text)
     * @param {string} text - 文本
     * @namespace 文本函数
     *
     * @returns {string} 处理后的文本
     */
    fnSTRIPTAG(text: string): string;
    /**
     * 将字符串中的换行转成 HTML `<br>`，用于简单换行的场景。
     *
     * 示例：`LINEBREAK("\n")`，
     *
     * 返回：`<br/>`。
     *
     * @example LINEBREAK(text)
     * @param {string} text - 文本
     * @namespace 文本函数
     *
     * @returns {string} 处理后的文本
     */
    fnLINEBREAK(text: string): string;
    /**
     * 判断字符串(text)是否以特定字符串(startString)开始，是则返回 true，否则返回 false。
     *
     * @example STARTSWITH(text, '片段')
     * @param {string} text - 文本
     * @param {string} startString - 起始文本
     * @namespace 文本函数
     *
     * @returns {string} 判断结果
     */
    fnSTARTSWITH(text: string, search: string): boolean;
    /**
     * 判断字符串(text)是否以特定字符串(endString)结束，是则返回 true，否则返回 false。
     *
     * @example ENDSWITH(text, '片段')
     * @param {string} text - 文本
     * @param {string} endString - 结束文本
     * @namespace 文本函数
     *
     * @returns {string} 判断结果
     */
    fnENDSWITH(text: string, search: string): boolean;
    /**
     * 判断参数 1 中的文本是否包含参数 2 中的文本，是则返回 true，否则返回 false。
     *
     * @example CONTAINS(text, searchText)
     * @param {string} text - 文本
     * @param {string} searchText - 搜索文本
     * @namespace 文本函数
     *
     * @returns {string} 判断结果
     */
    fnCONTAINS(text: string, search: string): boolean;
    /**
     * 对文本进行全量替换。
     *
     * @example REPLACE(text, search, replace)
     * @param {string} text - 要处理的文本
     * @param {string} search - 要被替换的文本
     * @param {string} replace - 要替换的文本
     * @namespace 文本函数
     *
     * @returns {string} 处理结果
     */
    fnREPLACE(text: string, search: string, replace: string): string;
    /**
     * 对文本进行搜索，返回命中的位置。
     *
     * @example SEARCH(text, search, 0)
     * @param {string} text - 要处理的文本
     * @param {string} search - 用来搜索的文本
     * @param {number} start - 起始位置
     * @namespace 文本函数
     *
     * @returns {number} 命中的位置
     */
    fnSEARCH(text: string, search: string, start?: number): number;
    /**
     * 返回文本字符串中从指定位置开始的特定数目的字符。
     *
     * @example MID(text, from, len)
     * @param {string} text - 要处理的文本
     * @param {number} from - 起始位置
     * @param {number} len - 处理长度
     * @namespace 文本函数
     *
     * @returns {number} 命中的位置
     */
    fnMID(text: string, from: number, len: number): string;
    /**
     * 返回路径中的文件名。
     *
     * 示例：`/home/amis/a.json`，
     *
     * 返回：a.json`。
     *
     * @example BASENAME(text)
     * @param {string} text - 要处理的文本
     * @namespace 文本函数
     *
     * @returns {string}  文件名
     */
    fnBASENAME(text: string): string | undefined;
    /**
     * 生成UUID字符串
     *
     * @param {number} length - 生成的UUID字符串长度，默认为32位
     * @example UUID()
     * @example UUID(8)
     * @namespace 文本函数
     *
     * @returns {string} 生成的UUID字符串
     */
    fnUUID(length?: number): string;
    /**
     * 创建日期对象，可以通过特定格式的字符串，或者数值。
     *
     * 需要注意的是，其中月份的数值是从0开始的，
     * 即如果是12月份，你应该传入数值11。
     *
     * @example DATE(2021, 11, 6, 8, 20, 0)
     * @example DATE('2021-12-06 08:20:00')
     * @namespace 日期函数
     *
     * @returns {Date} 日期对象
     */
    fnDATE(year: number, month: number, day: number, hour: number, minute: number, second: number): Date;
    /**
     * 返回时间的时间戳。
     *
     * @example TIMESTAMP(date[, format = "X"])
     * @namespace 日期函数
     * @param {date} date 日期对象
     * @param {string} format 时间戳格式，带毫秒传入 'x'。默认为 'X' 不带毫秒的。
     *
     * @returns {number} 时间戳
     */
    fnTIMESTAMP(date: Date, format?: 'x' | 'X'): number;
    /**
     * 返回今天的日期。
     *
     * @example TODAY()
     * @namespace 日期函数
     *
     * @returns {number} 日期
     */
    fnTODAY(): Date;
    /**
     * 返回现在的日期
     *
     * @example NOW()
     * @namespace 日期函数
     *
     * @returns {number} 日期
     */
    fnNOW(): Date;
    /**
     * 获取日期的星期几。
     *
     * 示例
     *
     * WEEKDAY('2023-02-27') 得到 0。
     * WEEKDAY('2023-02-27', 2) 得到 1。
     *
     * @example WEEKDAY(date)
     * @namespace 日期函数
     * @param {any} date 日期
     * @param {number} type 星期定义类型，默认为1，1表示0至6代表星期一到星期日，2表示1至7代表星期一到星期日
     *
     * @returns {number} 星期几的数字标识
     */
    fnWEEKDAY(date: Date | string | number, type?: number): number;
    /**
     * 获取年份的星期，即第几周。
     *
     * 示例
     *
     * WEEK('2023-03-05') 得到 9。
     *
     * @example WEEK(date)
     * @namespace 日期函数
     * @param {any} date 日期
     * @param {boolean} isISO 是否ISO星期
     *
     * @returns {number} 星期几的数字标识
     */
    fnWEEK(date: Date | string | number, isISO?: boolean): number;
    /**
     * 对日期、日期字符串、时间戳进行格式化。
     *
     * 示例
     *
     * DATETOSTR('12/25/2022', 'YYYY-MM-DD') 得到 '2022.12.25'，
     * DATETOSTR(1676563200, 'YYYY.MM.DD') 得到 '2023.02.17'，
     * DATETOSTR(1676563200000, 'YYYY.MM.DD hh:mm:ss') 得到 '2023.02.17 12:00:00'，
     * DATETOSTR(DATE('2021-12-21'), 'YYYY.MM.DD hh:mm:ss') 得到 '2021.12.21 08:00:00'。
     *
     * @example DATETOSTR(date, 'YYYY-MM-DD')
     * @namespace 日期函数
     * @param {any} date 日期对象、日期字符串、时间戳
     * @param {string} format 日期格式，默认为 "YYYY-MM-DD HH:mm:ss"
     *
     * @returns {string} 日期字符串
     */
    fnDATETOSTR(date: Date | string | number, format?: string): string;
    /**
     * 获取日期范围字符串中的开始时间、结束时间。
     *
     * 示例：
     *
     * DATERANGESPLIT('1676563200, 1676735999') 得到 [1676563200, 1676735999]，
     * DATERANGESPLIT('1676563200, 1676735999', undefined , 'YYYY.MM.DD hh:mm:ss') 得到 [2023.02.17 12:00:00, 2023.02.18 11:59:59]，
     * DATERANGESPLIT('1676563200, 1676735999', 0 , 'YYYY.MM.DD hh:mm:ss') 得到 '2023.02.17 12:00:00'，
     * DATERANGESPLIT('1676563200, 1676735999', 'start' , 'YYYY.MM.DD hh:mm:ss') 得到 '2023.02.17 12:00:00'，
     * DATERANGESPLIT('1676563200, 1676735999', 1 , 'YYYY.MM.DD hh:mm:ss') 得到 '2023.02.18 11:59:59'，
     * DATERANGESPLIT('1676563200, 1676735999', 'end' , 'YYYY.MM.DD hh:mm:ss') 得到 '2023.02.18 11:59:59'。
     *
     * @example DATERANGESPLIT(date, 'YYYY-MM-DD')
     * @namespace 日期函数
     * @param {string} date 日期范围字符串
     * @param {string} key 取值标识，0或'start'表示获取开始时间，1或'end'表示获取结束时间
     * @param {string} format 日期格式，可选
     * @param {string} delimiter 分隔符，可选，默认为','
     *
     * @returns {string} 日期字符串
     */
    fnDATERANGESPLIT(daterange: string, key?: string, format?: string, delimiter?: string): string | string[];
    /**
     * 返回日期的指定范围的开端。
     *
     * @namespace 日期函数
     * @example STARTOF(date[unit = "day"])
     * @param {date} date 日期对象
     * @param {string} unit 比如可以传入 'day'、'month'、'year' 或者 `week` 等等
     * @param {string} format 日期格式，可选
     * @returns {date} 新的日期对象
     */
    fnSTARTOF(date: Date, unit?: any, format?: string): string | Date;
    /**
     * 返回日期的指定范围的末尾。
     *
     * @namespace 日期函数
     * @example ENDOF(date[unit = "day"])
     * @param {date} date 日期对象
     * @param {string} unit 比如可以传入 'day'、'month'、'year' 或者 `week` 等等
     * @param {string} format 日期格式，可选
     * @returns {date} 新的日期对象
     */
    fnENDOF(date: Date, unit?: any, format?: string): string | Date;
    normalizeDate(raw: any): Date;
    normalizeDateRange(raw: string | Date[]): Date[];
    /**
     * 返回日期的年份。
     *
     * @namespace 日期函数
     * @example YEAR(date)
     * @param {date} date 日期对象
     * @returns {number} 数值
     */
    fnYEAR(date: Date): number;
    /**
     * 返回日期的月份，这里就是自然月份。
     *
     * @namespace 日期函数
     * @example MONTH(date)
     * @param {date} date 日期对象
     * @returns {number} 数值
     */
    fnMONTH(date: Date): number;
    /**
     * 返回日期的天。
     *
     * @namespace 日期函数
     * @example DAY(date)
     * @param {date} date 日期对象
     * @returns {number} 数值
     */
    fnDAY(date: Date): number;
    /**
     * 返回日期的小时。
     *
     * @param {date} date 日期对象
     * @namespace 日期函数
     * @example HOUR(date)
     * @returns {number} 数值
     */
    fnHOUR(date: Date): number;
    /**
     * 返回日期的分。
     *
     * @param {date} date 日期对象
     * @namespace 日期函数
     * @example MINUTE(date)
     * @returns {number} 数值
     */
    fnMINUTE(date: Date): number;
    /**
     * 返回日期的秒。
     *
     * @param {date} date 日期对象
     * @namespace 日期函数
     * @example SECOND(date)
     * @returns {number} 数值
     */
    fnSECOND(date: Date): number;
    /**
     * 返回两个日期相差多少年。
     *
     * @param {date} endDate 日期对象
     * @param {date} startDate 日期对象
     * @namespace 日期函数
     * @example YEARS(endDate, startDate)
     * @returns {number} 数值
     */
    fnYEARS(endDate: Date, startDate: Date): number;
    /**
     * 返回两个日期相差多少分钟。
     *
     * @param {date} endDate 日期对象
     * @param {date} startDate 日期对象
     * @namespace 日期函数
     * @example MINUTES(endDate, startDate)
     * @returns {number} 数值
     */
    fnMINUTES(endDate: Date, startDate: Date): number;
    /**
     * 返回两个日期相差多少天。
     *
     * @param {date} endDate 日期对象
     * @param {date} startDate 日期对象
     * @namespace 日期函数
     * @example DAYS(endDate, startDate)
     * @returns {number} 数值
     */
    fnDAYS(endDate: Date, startDate: Date): number;
    /**
     * 返回两个日期相差多少小时。
     *
     * @param {date} endDate 日期对象
     * @param {date} startDate 日期对象
     * @namespace 日期函数
     * @example HOURS(endDate, startDate)
     * @returns {number} 数值
     */
    fnHOURS(endDate: Date, startDate: Date): number;
    /**
     * 修改日期，对日期进行加减天、月份、年等操作。
     *
     * 示例：
     *
     * DATEMODIFY(A, -2, 'month')，
     *
     * 对日期 A 进行往前减2月的操作。
     *
     * @param {date} date 日期对象
     * @param {number} num 数值
     * @param {string} unit 单位：支持年、月、天等等
     * @namespace 日期函数
     * @example DATEMODIFY(date, 2, 'days')
     * @returns {date} 日期对象
     */
    fnDATEMODIFY(date: Date, num: number, format: any): Date;
    /**
     * 将字符日期转成日期对象，可以指定日期格式。
     *
     * 示例：STRTODATE('2021/12/6', 'YYYY/MM/DD')
     *
     * @param {string} value 日期字符
     * @param {string} format 日期格式
     * @namespace 日期函数
     * @example STRTODATE(value[, format=""])
     * @returns {date} 日期对象
     */
    fnSTRTODATE(value: any, format?: string): Date;
    /**
     * 判断两个日期，是否第一个日期在第二个日期的前面，是则返回 true，否则返回 false。
     *
     * @param {date} a 第一个日期
     * @param {date} b 第二个日期
     * @param {string} unit 单位，默认是 'day'， 即之比较到天
     * @namespace 日期函数
     * @example ISBEFORE(a, b)
     * @returns {boolean} 判断结果
     */
    fnISBEFORE(a: Date, b: Date, unit?: any): boolean;
    /**
     * 判断两个日期，是否第一个日期在第二个日期的后面，是则返回 true，否则返回 false。
     *
     * @param {date} a 第一个日期
     * @param {date} b 第二个日期
     * @param {string} unit 单位，默认是 'day'， 即之比较到天
     * @namespace 日期函数
     * @example ISAFTER(a, b)
     * @returns {boolean} 判断结果
     */
    fnISAFTER(a: Date, b: Date, unit?: any): boolean;
    /**
     * 判断日期是否在指定范围内，是则返回 true，否则返回 false。
     *
     * 示例：BETWEENRANGE('2021/12/6', ['2021/12/5','2021/12/7'])。
     *
     * @param {any} date 第一个日期
     * @param {any[]} daterange 日期范围
     * @param {string} unit 单位，默认是 'day'， 即之比较到天
     * @param {string} inclusivity 包容性规则，默认为'[]'。[ 表示包含、( 表示排除，如果使用包容性参数，则必须传入两个指示符，如'()'表示左右范围都排除
     * @namespace 日期函数
     * @example BETWEENRANGE(date, [start, end])
     * @returns {boolean} 判断结果
     */
    fnBETWEENRANGE(date: Date, daterange: Date[], unit?: any, inclusivity?: '[]' | '()' | '(]' | '[)'): boolean;
    /**
     * 判断两个日期，是否第一个日期在第二个日期的前面或者相等，是则返回 true，否则返回 false。
     *
     * @param {date} a 第一个日期
     * @param {date} b 第二个日期
     * @param {string} unit 单位，默认是 'day'， 即之比较到天
     * @namespace 日期函数
     * @example ISSAMEORBEFORE(a, b)
     * @returns {boolean} 判断结果
     */
    fnISSAMEORBEFORE(a: Date, b: Date, unit?: any): boolean;
    /**
     * 判断两个日期，是否第一个日期在第二个日期的后面或者相等，是则返回 true，否则返回 false。
     *
     * @param {date} a 第一个日期
     * @param {date} b 第二个日期
     * @param {string} unit 单位，默认是 'day'， 即之比较到天
     * @namespace 日期函数
     * @example ISSAMEORAFTER(a, b)
     * @returns {boolean} 判断结果
     */
    fnISSAMEORAFTER(a: Date, b: Date, unit?: any): boolean;
    /**
     * 返回数组的长度。
     *
     * @param {Array<any>} arr 数组
     * @namespace 数组
     * @example COUNT(arr)
     * @returns {boolean} 结果
     */
    fnCOUNT(value: any): number;
    /**
     * 数组做数据转换，需要搭配箭头函数一起使用，注意箭头函数只支持单表达式用法。
     *
     * @param {Array<any>} arr 数组
     * @param {Function<any>} iterator 箭头函数
     * @namespace 数组
     * @example ARRAYMAP(arr, item => item)
     * @returns {boolean} 结果
     */
    fnARRAYMAP(value: any, iterator: any): any[];
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
    fnARRAYFILTER(value: any, iterator: any): any[];
    /**
     * 数据做数据查找，需要搭配箭头函数一起使用，注意箭头函数只支持单表达式用法。
     * 找出第二个箭头函数返回为 true 的成员的索引。
     *
     * 示例：
     *
     * ARRAYFINDINDEX([0, 2, false], item => item === 2) 得到 1。
     *
     * @param {Array<any>} arr 数组
     * @param {Function<any>} iterator 箭头函数
     * @namespace 数组
     * @example ARRAYFINDINDEX(arr, item => item === 2)
     * @returns {number} 结果
     */
    fnARRAYFINDINDEX(arr: any[], iterator: any): number;
    /**
     * 数据做数据查找，需要搭配箭头函数一起使用，注意箭头函数只支持单表达式用法。
     * 找出第二个箭头函数返回为 true 的成员。
     *
     * 示例：
     *
     * ARRAYFIND([0, 2, false], item => item === 2) 得到 2。
     *
     * @param {Array<any>} arr 数组
     * @param {Function<any>} iterator 箭头函数
     * @namespace 数组
     * @example ARRAYFIND(arr, item => item === 2)
     * @returns {any} 结果
     */
    fnARRAYFIND(arr: any[], iterator: any): any;
    /**
     * 数据做数据遍历判断，需要搭配箭头函数一起使用，注意箭头函数只支持单表达式用法。
     * 判断第二个箭头函数是否存在返回为 true 的成员，是则返回 true，否则返回 false。
     *
     * 示例：
     *
     * ARRAYSOME([0, 2, false], item => item === 2) 得到 true。
     *
     * @param {Array<any>} arr 数组
     * @param {Function<any>} iterator 箭头函数
     * @namespace 数组
     * @example ARRAYSOME(arr, item => item === 2)
     * @returns {boolean} 结果
     */
    fnARRAYSOME(arr: any[], iterator: any): boolean;
    /**
     * 数据做数据遍历判断，需要搭配箭头函数一起使用，注意箭头函数只支持单表达式用法。
     * 判断第二个箭头函数返回是否都为 true，是则返回 true，否则返回 false。
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
    fnARRAYEVERY(arr: any[], iterator: any): boolean;
    /**
     * 判断数据中是否存在指定元素。
     *
     * 示例：
     *
     * ARRAYINCLUDES([0, 2, false], 2) 得到 true。
     *
     * @param {Array<any>} arr 数组
     * @param {any} item 元素
     * @namespace 数组
     * @example ARRAYINCLUDES(arr, 2)
     * @returns {any} 结果
     */
    fnARRAYINCLUDES(arr: any[], item: any): boolean;
    /**
     * 数组过滤掉 false、null、0 和 ""。
     *
     * 示例：
     *
     * COMPACT([0, 1, false, 2, '', 3]) 得到 [1, 2, 3]。
     *
     * @param {Array<any>} arr 数组
     * @namespace 数组
     * @example COMPACT(arr)
     * @returns {Array<any>} 结果
     */
    fnCOMPACT(arr: any[]): any[];
    /**
     * 数组转成字符串。
     *
     * 示例：
     *
     * JOIN(['a', 'b', 'c'], '=') 得到 'a=b=c'。
     *
     * @param {Array<any>} arr 数组
     * @param { String} separator 分隔符
     * @namespace 数组
     * @example JOIN(arr, string)
     * @returns {String} 结果
     */
    fnJOIN(arr: any[], separator?: string): string;
    /**
     * 数组合并。
     *
     * 示例：
     *
     * CONCAT(['a', 'b', 'c'], ['1'], ['3']) 得到 ['a', 'b', 'c', '1', '3']。
     *
     * @param {Array<any>} arr 数组
     * @namespace 数组
     * @example CONCAT(['a', 'b', 'c'], ['1'], ['3'])
     * @returns {Array<any>} 结果
     */
    fnCONCAT(...arr: any[]): any;
    /**
     * 数组去重，第二个参数「field」，可指定根据该字段去重。
     *
     * 示例：
     *
     * UNIQ([{a: '1'}, {b: '2'}, {a: '1'}]， 'id')。
     *
     * @param {Array<any>} arr 数组
     * @param {string} field 字段
     * @namespace 数组
     * @example UNIQ([{a: '1'}, {b: '2'}, {a: '1'}])
     * @example UNIQ([{a: '1'}, {b: '2'}, {a: '1'}], 'x')
     * @returns {Array<any>} 结果
     */
    fnUNIQ(arr: any[], field?: string): any[];
    /**
     * 将JS对象转换成JSON字符串。
     *
     * 示例：
     *
     * ENCODEJSON({name: 'amis'}) 得到 '{"name":"amis"}'。
     *
     * @param {object} obj JS对象
     * @namespace 编码
     * @example ENCODEJSON({name: 'amis'})
     * @returns {string} 结果
     */
    fnENCODEJSON(obj: object): string;
    /**
     * 解析JSON编码数据，返回JS对象。
     *
     * 示例：
     *
     * DECODEJSON('{\"name\": "amis"}') 得到 {name: 'amis'}。
     *
     * @param {string} str 字符串
     * @namespace 编码
     * @example DECODEJSON('{\"name\": "amis"}')
     * @returns {object} 结果
     */
    fnDECODEJSON(str: string): object;
    /**
     * 根据对象或者数组的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
     *
     * 示例：
     *
     * GET([0, 2, {name: 'amis', age: 18}], 1) 得到 2，
     * GET([0, 2, {name: 'amis', age: 18}], '2.name') 得到 'amis'，
     * GET({arr: [{name: 'amis', age: 18}]}, 'arr[0].name') 得到 'amis'，
     * GET({arr: [{name: 'amis', age: 18}]}, 'arr.0.name') 得到 'amis'，
     * GET({arr: [{name: 'amis', age: 18}]}, 'arr.1.name', 'not-found') 得到 'not-found'。
     *
     * @param {any} obj 对象或数组
     * @param {string} path 路径
     * @param {any} defaultValue 如果解析不到则返回该值
     * @namespace 其他
     * @example GET(arr, 2)
     * @returns {any} 结果
     */
    fnGET(obj: any, path: string, defaultValue?: any): any;
    /**
     * 判断是否为类型支持：string, number, array, date, plain-object。
     *
     * @param {string} 判断对象
     * @namespace 其他
     * @example ISTYPE([{a: '1'}, {b: '2'}, {a: '1'}], 'array')
     * @returns {boolean} 结果
     */
    fnISTYPE(target: any, type: 'string' | 'number' | 'array' | 'date' | 'plain-object' | 'nil'): boolean;
}
export declare function getCookie(name: string): string | undefined;
export declare function parseJson(str: string, defaultValue?: any): any;
export declare function stripNumber(number: number): number;
export declare function normalizeArgs(args: Array<any>): any[];
export declare function createObject(superProps?: {
    [propName: string]: any;
}, props?: {
    [propName: string]: any;
}, properties?: any): object;
export declare function createStr(): string;
export declare function uuidv4(): string;

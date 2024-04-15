/**
 * @file 扩展 codemirror
 */
import type CodeMirror from 'codemirror';
import { FuncGroup, VariableItem } from './CodeEditor';
export declare function editorFactory(dom: HTMLElement, cm: typeof CodeMirror, props: any, options?: any): CodeMirror.Editor;
export declare class FormulaPlugin {
    readonly editor: CodeMirror.Editor;
    readonly cm: typeof CodeMirror;
    /**
     * 用于提示的变量集合，默认为空
     */
    variables: Array<VariableItem>;
    /**
     * 函数集合，默认不需要传，即  amis-formula 里面那个函数
     * 如果有扩充，则需要传。
     */
    functions: Array<FuncGroup>;
    /**
     * evalMode 即直接就是表达式，否则就是混合模式
     */
    evalMode: boolean;
    disableAutoMark: boolean;
    constructor(editor: CodeMirror.Editor, cm: typeof CodeMirror);
    setVariables(variables: Array<VariableItem>): void;
    setFunctions(functions: Array<FuncGroup>): void;
    setEvalMode(evalMode: boolean): void;
    setDisableAutoMark(disableAutoMark: boolean): void;
    autoMarkText(forceClear?: boolean): void;
    computedBracesPosition(exp: string): {
        begin: number;
        end: number;
    }[];
    checkStrIsInBraces([from, to]: number[], braces: {
        begin: number;
        end: number;
    }[]): boolean;
    insertBraces(originFrom: CodeMirror.Position, originTo: CodeMirror.Position): void;
    insertContent(value: any, type?: 'variable' | 'func'): void;
    setValue(value: string): void;
    getValue(): string;
    markText(from: CodeMirror.Position, to: CodeMirror.Position, label: string, className?: string, rawString?: string): CodeMirror.TextMarker<CodeMirror.MarkerRange>;
    widgets: any[];
    marks: any[];
    autoMark(): void;
    focus(value: string): void;
    dispose(): void;
    validate(): void;
}

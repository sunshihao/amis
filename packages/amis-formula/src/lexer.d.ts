import { LexerOptions, Token, TokenTypeName } from './types';
export declare const enum TokenEnum {
    BooleanLiteral = 1,
    RAW = 2,
    Variable = 3,
    OpenScript = 4,
    CloseScript = 5,
    EOF = 6,
    Identifier = 7,
    Literal = 8,
    NumericLiteral = 9,
    Punctuator = 10,
    StringLiteral = 11,
    RegularExpression = 12,
    TemplateRaw = 13,
    TemplateLeftBrace = 14,
    TemplateRightBrace = 15,
    OpenFilter = 16,
    Char = 17
}
export declare const TokenName: {
    [propName: string]: TokenTypeName;
};
export declare function lexer(input: string, options?: LexerOptions): {
    next: () => Token;
};

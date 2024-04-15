/**
 * 注音
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/ruby.html
 */
import Word from '../../Word';
import { Run } from './Run';
export declare class RubyPr {
}
declare class RubyBase {
    children: Run[];
    static fromXML(word: Word, element: Element): RubyBase;
}
declare class RubyText extends RubyBase {
}
export declare class Ruby {
    rt?: RubyText;
    rubyBase?: RubyBase;
    static fromXML(word: Word, element: Element): Ruby;
}
export {};

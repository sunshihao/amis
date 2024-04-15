import Word from '../../Word';
import { Section, SectionChild, SectionPr } from './Section';
/**
 * body 类型定义
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/body.html
 */
export declare class Body {
    sections: Section[];
    currentSection: Section;
    constructor();
    addChild(child: SectionChild): void;
    /**
     * 添加 secetion
     * @param properties 前一个 section 的属性
     */
    addSection(properties: SectionPr): void;
    static fromXML(word: Word, element: Element): Body;
}

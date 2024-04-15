import { FontTable } from './openxml/word/FontTable';
/**
 * 总入口，它将包括所有 word 文档信息，后续渲染的时候依赖它来获取关联信息
 */
import { Relationship } from './word/parse/parseRelationship';
import { ContentTypes } from './openxml/ContentType';
import { Styles } from './openxml/Style';
import { Theme } from './openxml/Theme';
import { Numbering } from './openxml/word/numbering/Numbering';
import { PackageParser } from './package/PackageParser';
import { Paragraph } from './openxml/word/Paragraph';
import { Note } from './openxml/word/Note';
import { Section } from './openxml/word/Section';
import { Settings } from './openxml/Settings';
import { OfficeViewer } from './OfficeViewer';
import { RenderOptions } from './RenderOptions';
/**
 * 渲染配置
 */
export interface WordRenderOptions extends RenderOptions {
    /**
     * css 类前缀
     */
    classPrefix: string;
    /**
     * 列表使用字体渲染，需要自行引入 Windings 字体
     */
    bulletUseFont: boolean;
    /**
     * 是否忽略文档宽度设置
     */
    ignoreWidth?: boolean;
    /**
     * 是否忽略文档高度设置
     */
    ignoreHeight?: boolean;
    /**
     * 强制文档内边距设置
     */
    padding?: string;
    /**
     * 最小行高
     */
    minLineHeight?: number;
    /**
     * 强制行高，设置之后所有文本都使用这个行高，可以优化排版效果
     */
    forceLineHeight?: string;
    /**
     * 打印等待时间，单位毫秒，可能有的文档有很多图片，如果等待时间太短图片还没加载完，所以加这个配置项可控
     */
    printWaitTime?: number;
    /**
     * 是否使用分页的方式来渲染内容，使用这种方式还原度更高，但不支持打印功能
     * 设置后会自动将 ignoreHeight 和 ignoreWidth 设置为 false
     */
    page?: boolean;
    /**
     * 每页之间的间距
     */
    pageMarginBottom?: number;
    /**
     * 页面背景色
     */
    pageBackground?: string;
    /**
     * 是否显示页面阴影，只有在 page 为 true 的时候才生效
     */
    pageShadow?: boolean;
    /**
     * 显示页面包裹效果，只有在 page 为 true 的时候才生效
     */
    pageWrap?: boolean;
    /**
     * 页面包裹宽度
     */
    pageWrapPadding?: number;
    /**
     * 页面包裹背景色
     */
    pageWrapBackground?: string;
    /**
     * 缩放比例，取值 0-1 之间
     */
    zoom?: number;
    /**
     * 自适应宽度，如果设置了 zoom，那么 zoom 优先级更高，这个设置只在 ignoreWidth 为 false 的时候生效
     */
    zoomFitWidth?: boolean;
    /**
     * 打印可以覆盖其它配置
     */
    printOptions?: WordRenderOptions;
    /**
     * 是否渲染 header
     */
    renderHeader?: boolean;
    /**
     * 是否渲染 footer
     */
    renderFooter?: boolean;
}
export default class Word implements OfficeViewer {
    /**
     * 全局 id，用于一个页面渲染多个 word 文档
     */
    static globalId: number;
    /**
     * 当前渲染 id
     */
    id: number;
    /**
     * openxml 包
     */
    parser: PackageParser;
    /**
     * 解析 [Content_Types].xml 里的数据
     */
    contentTypes: ContentTypes;
    /**
     * 解析 theme 目录里的数据
     */
    themes: Theme[];
    /**
     * 解析 numbering.xml 里的数据
     */
    numbering: Numbering;
    settings: Settings;
    /**
     * 解析 styles.xml 里的数据
     */
    styles: Styles;
    renderOptions: WordRenderOptions;
    /**
     * 全局关系表
     */
    relationships: Record<string, Relationship>;
    /**
     * 文档关系表
     */
    documentRels: Record<string, Relationship>;
    /**
     * 当前文档使用的关系表，比如 headers.xml 里的图片是
     */
    currentDocumentRels: Record<string, Relationship>;
    /**
     * 字体关系表
     */
    fontTableRels: Record<string, Relationship>;
    /**
     * 样式名映射，因为自定义样式名有可能不符合 css 命名规范，因此实际使用这个名字
     */
    styleIdMap: Record<string, string>;
    /**
     * 用于自动生成样式名时的计数，保证每次都是唯一的
     */
    styleIdNum: number;
    /**
     * 内置字体标
     */
    fontTable?: FontTable;
    /**
     * 渲染根节点
     */
    rootElement: HTMLElement;
    wrapClassName: string;
    /**
     * 当前渲染的段落，主要用于获取 fldSimple
     */
    currentParagraph: Paragraph;
    footNotes: Record<string, Note>;
    endNotes: Record<string, Note>;
    /**
     * 当前页码
     */
    currentPage: 0;
    /**
     * 构建 word
     *
     * @param docxFile docx 文件
     * @param options 渲染配置
     * @param packaParser 包解析器
     */
    constructor(docFile: ArrayBuffer | string, renderOptions?: Partial<WordRenderOptions>, parser?: PackageParser);
    inited: boolean;
    /**
     * 分页标记，如果为 true，那么在渲染的时候会强制分页
     */
    breakPage: boolean;
    /**
     * 当前渲染的段，因为很多渲染需要，所以为了避免大量传参，这里直接挂在这里
     */
    currentSection: Section;
    DOCUMENT_RELS: string;
    /**
     * 初始化一些公共资源，比如
     */
    init(): void;
    updateOptions(options: any): void;
    /**
     * 解析全局主题配置
     */
    initTheme(): void;
    /**
     * 解析全局样式
     */
    initStyle(): void;
    /**
     * 解析全局配置
     */
    initSettings(): void;
    /**
     * 解析字体表
     */
    initFontTable(): void;
    /**
     * 解析关系
     */
    initRelation(): void;
    /**
     * 解析全局配置
     */
    initContentType(): void;
    /**
     * 解析 numbering
     */
    initNumbering(): void;
    initNotes(): void;
    /**
     * 获取全局关系
     */
    getRelationship(id?: string): Relationship | null;
    /**
     * 获取文档对应的关系
     */
    getDocumentRels(id?: string): Relationship | null;
    /**
     * 获取字体对应的关系
     */
    getFontTableRels(id?: string): Relationship | null;
    /**
     * 进行单个文本替换
     */
    replaceText(text: string): string;
    loadWordRelXML(relation: Relationship): Document;
    /**
     * 加载图片
     */
    loadImage(relation: Relationship): string | null;
    /**
     * 保存新图片，这个方法主要用于图片变量，需要生成新的 relation
     * @param newRelId 关系 id
     * @param blob 文件数据
     * @param ext 扩展名
     */
    saveNewImage(newRelId: string, data: Uint8Array): void;
    loadFont(rId: string, key: string): string | null;
    /**
     * 解析 html
     */
    getXML(filePath: string): Document;
    /**
     * 获取 styleId 的显示名称，因为这里可以自定义，理论上会出现 css 不支持的语法
     */
    getStyleIdDisplayName(styleId: string): string;
    /**
     * 生成个新的唯一的 class 名称
     */
    genClassName(): string;
    /**
     * 添加新样式，主要用于表格的单元格样式
     */
    appendStyle(style?: string): void;
    /**
     * 返回样式表名及它的父级样式表名
     * @param styleId 样式表里的 style 名称
     * @returns 返回 className 数组
     */
    getStyleClassName(stylId: string): string[];
    /**
     * 根据 id 获取样式
     * @param styleId
     */
    getStyle(styleId: string): import("./openxml/Style").Style;
    /**
     * 渲染时的 css 类前缀
     */
    getClassPrefix(): string;
    /**
     * 获取主题色
     */
    getThemeColor(name: string): string;
    /**
     * 添加类，自动加上前缀
     */
    addClass(element: HTMLElement, className: string): void;
    /**
     * 更新页面中的变量，这个要在 render 后运行
     */
    updateVariable(): void;
    /**
     * 下载生成的文档，会对 word/document.xml 进行处理，替换文本
     */
    download(fileName?: string): Promise<void>;
    /**
     * 打印功能
     */
    print(): Promise<any>;
    /**
     * 渲染文档入口
     *
     * @param root 渲染的根节点
     * @param renderOptionsOverride 临时覆盖某些渲选项
     */
    render(root: HTMLElement, renderOptionsOverride?: Partial<WordRenderOptions>): Promise<void>;
}

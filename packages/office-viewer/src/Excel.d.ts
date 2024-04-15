/**
 * Excel 渲染主入口
 */
import { OfficeViewer } from './OfficeViewer';
import { PackageParser } from './package/PackageParser';
import { ExcelFile } from './excel/types/ExcelFile';
import { ExcelRender } from './excel/render/ExcelRender';
import { Workbook } from './excel/Workbook';
import { ExcelRenderOptions } from './excel/sheet/ExcelRenderOptions';
export default class Excel implements OfficeViewer {
    /**
     * 全局 id，用于一个页面渲染多个文档
     */
    static globalId: number;
    /**
     * 当前渲染 id
     */
    id: number;
    renderOptions: ExcelRenderOptions;
    /**
     * 渲染根节点
     */
    rootElement?: HTMLElement;
    /**
     * 文件解析器
     */
    parser: PackageParser;
    /**
     * 文件内容
     */
    excelFile?: ExcelFile;
    /**
     * 渲染实例
     */
    excelRender?: ExcelRender;
    workbook?: Workbook;
    docFile: ArrayBuffer;
    fileName?: string;
    constructor(docFile: ArrayBuffer, fileName?: string, renderOptions?: Partial<ExcelRenderOptions>, parser?: PackageParser);
    updateOptions(options: any): void;
    /**
     * 加载 Excel 文件
     */
    loadExcel(): Promise<void>;
    loaded: boolean;
    /**
     * 加载 CSV 文件
     */
    loadCSV(fileExt: 'csv' | 'tsv'): Promise<void>;
    /**
     * Excel 渲染入口
     * @param root 渲染根节点
     * @param renderOptionsOverride 临时覆盖某些渲选项
     */
    render(root: HTMLElement, renderOptionsOverride?: Partial<ExcelRenderOptions>): Promise<void>;
    download(fileName: string): Promise<void>;
    print(): Promise<void>;
    getWorkbook(): Workbook | undefined;
    updateVariable(): void;
}

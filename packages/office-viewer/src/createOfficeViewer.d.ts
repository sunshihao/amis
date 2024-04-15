/**
 * 统一对外接口，自动识别文件类型后渲染
 */
import Excel from './Excel';
import { RenderOptions } from './RenderOptions';
import UnSupport from './UnSupport';
import Word from './Word';
import { PackageParser } from './package/PackageParser';
/**
 * 创建 OfficeViewer 实例的工厂函数，会自动识别文件类型
 * @param docFile 文件内容，可以是 ArrayBuffer 或者 url 地址
 * @param renderOptions 渲染配置项，根据不同的文件类型，配置项不同
 * @param parser 文件解析器，支持 zip 和 xml 两种，也可以扩展
 * @returns OfficeViewer 实例
 */
export declare function createOfficeViewer(docFile: ArrayBuffer, renderOptions?: Partial<RenderOptions>, fileName?: string, parser?: PackageParser): Promise<Word | Excel | UnSupport>;

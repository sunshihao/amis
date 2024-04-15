/**
 * zip 文件解析
 */
import { PackageParser } from './PackageParser';
export default class ZipPackageParser implements PackageParser {
    private zip;
    /**
     * 加载 zip 文件
     */
    load(docxFile: ArrayBuffer): void;
    /**
     * 读取 xml 文件，转成 json 对象
     * @param filePath 文件路径
     * @returns 转成 json 的结果
     */
    getXML(filePath: string): Document;
    /**
     * 根据类型读取文件
     */
    getFileByType(filePath: string, type?: 'string' | 'blob' | 'uint8array'): string | Blob | Uint8Array | null;
    /**
     * 读取文本内容
     */
    getString(filePath: string): string;
    /**
     * xml 下没这功能
     */
    saveFile(filePath: string, content: Uint8Array | string): void;
    /**
     * 判断文件是否存在
     */
    fileExists(filePath: string): boolean;
    /**
     * 生成新的 zip 文件
     */
    generateZip(docContent: string): Blob;
}

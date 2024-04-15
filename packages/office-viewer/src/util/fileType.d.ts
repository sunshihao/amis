/**
 * 自动识别文件类型，只支持少数几种，参考了 file-type 项目里的实现
 */
type FileType = {
    ext: string;
    mime: string;
};
export declare function fileTypeFromArrayBuffer(arrayBuffer: ArrayBuffer): FileType | null;
export declare function fileTypeFromBuffer(buffer: Uint8Array): FileType | null;
export {};

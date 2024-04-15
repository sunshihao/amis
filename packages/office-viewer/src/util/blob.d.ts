/**
 * 将 blob 转成 data url
 */
export declare function blobToDataURL(blob: Blob): Promise<string>;
/**
 * 下载 blob
 * https://dev.to/nombrekeff/download-file-from-blob-21ho
 */
export declare function downloadBlob(blob: Blob, name?: string): void;

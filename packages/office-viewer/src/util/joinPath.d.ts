/**
 * 合并多个路径，来自
 * https://stackoverflow.com/questions/29855098/is-there-a-built-in-javascript-function-similar-to-os-path-join
 * 目前都是当成目录，所以如果是文件需要加上 ..
 */
export declare function joinPath(...input: string[]): string;

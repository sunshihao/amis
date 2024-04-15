import { OfficeViewer } from './OfficeViewer';
/**
 * 不支持的文件类型，主要用于显示报错信息
 */
export default class UnSupport implements OfficeViewer {
    errorMessage: string;
    constructor(errorMessage: string);
    updateOptions(options: any): void;
    updateVariable(): void;
    render(root: HTMLElement, options: any): Promise<void>;
    download(fileName: string): Promise<void>;
    print(): void;
}

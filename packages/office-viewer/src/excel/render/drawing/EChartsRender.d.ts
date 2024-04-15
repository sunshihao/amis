import type echarts from 'echarts';
import { BaseDrawingRender } from './BaseDrawingRender';
import { Rect } from '../Rect';
export declare class EChartsRender extends BaseDrawingRender {
    constructor(container: HTMLElement, displayRect: Rect, gid: string);
    render(option: echarts.EChartOption): void;
}

import { DefaultDNDMode } from './default';
import { DNDModeInterface } from './interface';
export declare class PositionHDNDMode extends DefaultDNDMode implements DNDModeInterface {
    enter(e: DragEvent, ghost: HTMLElement): void;
    leave(e: DragEvent, ghost: HTMLElement): void;
    over(e: DragEvent, ghost: HTMLElement): void;
}

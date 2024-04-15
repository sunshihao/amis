/**
 * @file Icon
 * @description
 * @author fex
 */
import React from 'react';
import CloseIcon from '../icons/close.svg';
import UnDoIcon from '../icons/undo.svg';
import ReDoIcon from '../icons/redo.svg';
import EnterIcon from '../icons/enter.svg';
import VolumeIcon from '../icons/volume.svg';
import MuteIcon from '../icons/mute.svg';
import PlayIcon from '../icons/play.svg';
import PauseIcon from '../icons/pause.svg';
import LeftArrowIcon from '../icons/left-arrow.svg';
import RightArrowIcon from '../icons/right-arrow.svg';
import CheckIcon from '../icons/check.svg';
import PlusIcon from '../icons/plus.svg';
import MinusIcon from '../icons/minus.svg';
import PencilIcon from '../icons/pencil.svg';
import ReloadIcon from '../icons/reload.svg';
import DownArrowBoldIcon from '../icons/down-arrow-bold.svg';
import FunctionIcon from '../icons/function.svg';
import InputClearIcon from '../icons/input-clear.svg';
import MenuIcon from '../icons/menu.svg';
import UserRemove from '../icons/user-remove.svg';
import Role from '../icons/role.svg';
import Department from '../icons/department.svg';
import Post from '../icons/post.svg';
import RightDoubleArrowIcon from '../icons/right-double-arrow.svg';
export declare const closeIcon: React.JSX.Element;
export declare const unDoIcon: React.JSX.Element;
export declare const reDoIcon: React.JSX.Element;
export declare const enterIcon: React.JSX.Element;
export declare const volumeIcon: React.JSX.Element;
export declare const muteIcon: React.JSX.Element;
export declare const playIcon: React.JSX.Element;
export declare const pauseIcon: React.JSX.Element;
export declare const leftArrowIcon: React.JSX.Element;
export declare const rightArrowIcon: React.JSX.Element;
export declare function getIconNames(): string[];
export declare function getIcon(key: string): React.ElementType<{}, keyof React.JSX.IntrinsicElements>;
export declare function hasIcon(iconName: string): boolean;
export declare function registerIcon(key: string, component: React.ElementType<{}>): void;
export interface IconCheckedSchema {
    id: string;
    name?: string;
    svg?: string;
}
export interface IconCheckedSchemaNew {
    type: 'icon';
    icon: IconCheckedSchema;
}
export declare function Icon({ icon, className, classPrefix, classNameProp, iconContent, vendor, cx: iconCx, onClick, onMouseEnter, onMouseLeave, onMouseOver, onMouseOut, onMouseDown, onMouseUp, onMouseMove, onBlur, onFocus, onTouchStart, onTouchMove, onTouchEnd, onTouchCancel, style }: {
    icon: string;
    iconContent?: string;
} & React.ComponentProps<any>): React.JSX.Element | null;
export { InputClearIcon, CloseIcon, UnDoIcon, ReDoIcon, EnterIcon, VolumeIcon, MuteIcon, PlayIcon, PauseIcon, ReloadIcon, LeftArrowIcon, RightArrowIcon, CheckIcon, PlusIcon, MinusIcon, PencilIcon, FunctionIcon, MenuIcon, UserRemove, Role, Department, Post, RightDoubleArrowIcon, DownArrowBoldIcon };

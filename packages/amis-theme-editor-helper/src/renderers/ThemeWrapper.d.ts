/**
 * @file ThemeWrapper.tsx
 * @description 收缩展开容器
 */
import React from 'react';
import type { FormControlProps } from 'amis-core';
interface ThemeWrapperProps {
    hasSenior?: boolean;
    hasOpen?: boolean;
    senior?: boolean;
    toggleSenior?: (value: boolean) => void;
    open?: boolean;
    toggleOpen?: (value: boolean) => void;
    title?: string;
}
interface ThemeWrapperControlProps extends FormControlProps {
    hasSenior?: boolean;
    title?: string;
    body?: any;
    seniorBody?: any;
}
export declare function ThemeWrapperHeader(props: ThemeWrapperProps): React.JSX.Element;
export default class ThemeWrapperRenderer extends React.Component<ThemeWrapperControlProps> {
    render(): React.JSX.Element;
}
export {};

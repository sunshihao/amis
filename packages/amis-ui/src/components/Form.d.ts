/**
 * @file 给组件用的，渲染器里面不要用这个
 */
import React from 'react';
import { ThemeProps } from 'amis-core';
import { UseFormReturn } from 'react-hook-form';
import { LocaleProps } from 'amis-core';
export type FormRef = React.MutableRefObject<{
    submit: () => void;
} | undefined>;
export interface FormProps extends ThemeProps, LocaleProps {
    defaultValue?: any;
    value?: any;
    autoSubmit?: boolean;
    onValidate?: (errors: any, values: any) => Promise<void>;
    onChange?: (value: any) => void;
    onSubmit?: (value: any) => void;
    forwardRef?: FormRef;
    children?: (methods: UseFormReturn & {
        onSubmit: (value: any) => void;
    }) => JSX.Element | null;
    className?: string;
}
export declare function Form(props: FormProps): React.JSX.Element;
declare const _default: React.ForwardRefExoticComponent<Omit<Omit<Omit<FormProps, keyof LocaleProps> & {
    locale?: string | undefined;
    translate?: ((str: string, ...args: any[]) => string) | undefined;
}, keyof ThemeProps> & import("../../../amis-core/src/theme").ThemeOuterProps, "children"> & Pick<FormProps, "children"> & React.RefAttributes<{
    submit: () => void;
} | undefined>>;
export default _default;

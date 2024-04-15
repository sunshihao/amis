import React from 'react';
export interface ShortcutKeyProps {
    title?: string;
    size?: string;
    closeOnEsc?: boolean;
    closeOnOutside?: boolean;
    ShortcutKeyList?: Array<ShortcutKeyItem>;
}
interface ShortcutKeyItem {
    title: string;
    letters: Array<string>;
    tooltip?: string;
}
export interface ShortcutKeyStates {
    visible: boolean;
}
export default class ShortcutKey extends React.Component<ShortcutKeyProps, ShortcutKeyStates> {
    constructor(props: any);
    closeShortcutKeyModal(): void;
    showShortcutKeyModal(): void;
    render(): React.JSX.Element;
}
export {};

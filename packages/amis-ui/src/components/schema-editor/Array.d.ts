import React from 'react';
import { SchemaEditorItemCommon } from './Common';
export declare class SchemaEditorItemArray extends SchemaEditorItemCommon {
    state: {
        collapsed: boolean;
    };
    toggleCollapsed(): void;
    handleItemsChange(items: any): void;
    renderItems(): React.JSX.Element;
    render(): React.JSX.Element;
}

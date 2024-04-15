import React from 'react';
import { PanelProps } from '../../plugin';
export declare class InsertSubRendererPanel extends React.Component<PanelProps> {
    handleLeftClick(e: React.MouseEvent): void;
    handleClick(e: React.MouseEvent): void;
    hadnlDBClick(e: React.MouseEvent): void;
    handleInsert(): void;
    handleReplace(): void;
    handleCancel(): void;
    render(): React.JSX.Element;
}

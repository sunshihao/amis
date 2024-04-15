import React from 'react';
import { ColumnProps } from './index';
export default function ColGroup({ columns, colWidths, isFixed, syncTableWidth, initTableWidth, selectable, expandable, draggable, rowSelectionColumnWidth, expandableColumnWidth, isRightExpandable, isLeftExpandable, showReal }: {
    columns: Array<ColumnProps>;
    colWidths: {
        [key: string]: {
            width: number;
            realWidth: number;
            minWidth: number;
            originWidth: number;
        };
    };
    isFixed: boolean;
    syncTableWidth: Function;
    initTableWidth: Function;
    selectable: boolean;
    expandable: boolean;
    draggable: boolean;
    rowSelectionColumnWidth: number;
    expandableColumnWidth: number;
    isRightExpandable?: boolean;
    isLeftExpandable?: boolean;
    showReal?: boolean;
}): React.JSX.Element;

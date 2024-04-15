/// <reference types="react" />
import { EditorNodeType } from '../../store/node';
import { EditorManager } from '../../manager';
export declare function SchemaFrom({ propKey, body, definitions, controls, onChange, value, env, api, popOverContainer, submitOnChange, node, manager, justify, ctx, pipeIn, pipeOut }: {
    propKey?: string;
    env: any;
    body?: Array<any>;
    /**
     * @deprecated 用 body 代替
     */
    controls?: Array<any>;
    definitions?: any;
    value: any;
    api?: any;
    onChange: (value: any, diff: any, filter: (schema: any, value: any, id: string, diff?: any) => any) => void;
    popOverContainer?: () => HTMLElement | void;
    submitOnChange?: boolean;
    node?: EditorNodeType;
    manager: EditorManager;
    panelById?: string;
    justify?: boolean;
    ctx?: any;
    pipeIn?: (value: any) => any;
    pipeOut?: (value: any, oldValue: any) => any;
}): JSX.Element;

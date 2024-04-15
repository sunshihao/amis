import React from 'react';
/**
 * 通用搜索功能组件，附带以下功能：
 * 1、搜索历史：会自动记录用户搜索过的关键字，方便用户下次使用；
 * 2、自动提示补全：autoComplete 设置为 true 后，每次输入关键字后会展示当前所有含有关键字的信息（并以分类的形式展示）；
 * 3、搜索分类：取决于当前搜索数据结构是否带tag，如果不带tag则不展示搜索分类；
 */
interface SearchProps {
    allResult: Array<any>;
    searchPanelUUID: string;
    closeAutoComplete?: boolean;
    externalKeyword?: string;
    tagKey?: string;
    onChange: (keyword: string) => void;
    onTagChange?: (tag: string) => void;
    immediateChange?: boolean;
}
interface SearchStates {
    resultTags: Array<string>;
    resultByTag: {
        [propName: string]: Array<any>;
    };
    curKeyword: string;
    searchResult: Array<any>;
    searchResultByTag: {
        [propName: string]: Array<any>;
    };
    visible: boolean;
    curKeywordSearchHistory: string[];
    toggleTagFolderStatus: boolean;
}
export default class SearchPanel extends React.Component<SearchProps, SearchStates> {
    ref: React.RefObject<HTMLDivElement>;
    curInputBox: any;
    localStorageKey: string;
    curTagFolded: {
        [propName: string]: boolean;
    };
    lastSearchTag: string;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    getSearchHistory(): any[];
    /**
     * 从搜索数据中获取分类信息，并按分类存放搜索数据，方便后续通过分类直接获取搜索数据
     */
    getResultTags(allResult: Array<any>): {
        curResultTags: string[];
        curResultByTag: {
            [propName: string]: any[];
        };
    };
    /**
     * 根据关键字过滤数据，按分组存放
     */
    groupedResultByKeyword(keywords?: string): void;
    bindFocusEvent(): void;
    bindBlurEvent(): void;
    updateCurKeyword(keywords: string): void;
    changeTagFoldStatus(tagKey: string, event: any): void;
    bindEnterEvent(event: any): void;
    /** 删除搜索关键字 */
    bindClearActionEvent(): void;
    /** 组件分类tag点击事件 */
    bindTagClickEvent(tag: string): void;
    /** 添加搜索历史 */
    addSearchHistory(newKeywords: string): void;
    /** 搜索历史/点击 */
    clickKeywordEvent(keywords: string): void;
    deleteSearchHistory(event: any, newKeywords: string): void;
    clearSearchHistory(event: any): void;
    /** 将搜索记录保存到localStorage */
    updateSearchHistory(): void;
    /** 显示搜索关键字 */
    renderNameByKeyword(rendererName: string, curKeyword: string): string | React.JSX.Element;
    /** 判断搜索展示内容是否有滚动（交互优化） */
    resultIsHasScroll(searchSubRenderers: {
        [propName: string]: Array<any>;
    }, maxShowLine: number): boolean;
    render(): React.JSX.Element;
}
export {};

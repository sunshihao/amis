import * as React from 'react';
export type Size = {
    height: number;
    width: number;
};
export type AutoSizerProps = {
    WrapperComponent?: React.ElementType;
    minHeight?: number;
    children: (props: Size) => React.ReactNode;
    onResize?: (props: Size) => void;
};
export default class AutoSizer extends React.PureComponent<AutoSizerProps, Size> {
    unSensor: Function;
    constructor(props: AutoSizerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    sizer(dom: HTMLElement): void;
    render(): React.JSX.Element;
}

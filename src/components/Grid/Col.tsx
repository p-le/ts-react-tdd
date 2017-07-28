import * as React from 'react';

export interface IColProps {
    componentClass?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xdHidden?: boolean;
    smHidden?: boolean;
    mdHidden?: boolean;
    lgHidden?: boolean;
    xsOffset?: number;
    smOffset?: number;
    mdOffset?: number;
    lgOffset?: number;
}

export class Col extends React.Component<IColProps, {}> {
    static defaultProps: Partial<IColProps> = {
        componentClass: 'div',
    };

    render() {
        const { componentClass: Component, ...props} = this.props;
        return (
            <Component />
        );
    }
}

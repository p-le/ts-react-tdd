import * as React from 'react';
import styled, { } from 'styled-components';
import { ITheme } from '../../utils/theme';

export interface IGridProps {
    componentClass?: string;
    theme?: ITheme;
    fluid?: boolean;
}

class Grid extends React.Component<IGridProps, {}> {
    static defaultProps: Partial<IGridProps> = {
        componentClass: 'div',
        fluid: false,
    };

    render() {
        const { fluid, componentClass: Component, ...props } = this.props;
        return (
            <Component {...props} />
        );
    }
}

const StyledGrid = styled(Grid)`
    margin-right: auto;
    margin-left: auto;
    padding-right: ${(props: IGridProps) => `${props.theme.gridGutterWidth / 2}px`};
    padding-left: ${(props: IGridProps) => `${props.theme.gridGutterWidth / 2}px`};
`;

export default StyledGrid;

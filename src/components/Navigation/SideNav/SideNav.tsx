import * as React from 'react';
import { MenuGroup, IMenuGroup } from './MenuGroup';
import styled from '../../../utils/styled-components';

const Aside = styled.aside`
    width: 12rem;
    font-size: .7rem;
    font-weight: bold;
    padding: .7rem .5rem;
    box-shadow: ${props => props.theme.shadow1};
`;

export interface ISideNavProps {
    menu: IMenuGroup[];
}

export class SideNav extends React.Component<ISideNavProps, {}> {
    menuGroups: JSX.Element[];

    componentWillMount() {
        this.menuGroups = this.props.menu.map(item => <MenuGroup key={item.parent.title} menu={item} />);
    }

    render() {
        return (
            <Aside>
                { this.menuGroups }
            </Aside>
        );
    }
}

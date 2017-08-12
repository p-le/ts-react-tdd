import * as React from 'react';
import { Logo } from '../Logo';
import { Dropdown } from '../../Shared/Dropdown';
import { Icon } from '../../Shared/Icon';

import styled from '../../../utils/styled-components';

const NavIcon = styled(Icon)`
    height: ${props => props.theme.topNavHeight};
    line-height: ${props => props.theme.topNavHeight};
    color: #fff;
    cursor: pointer;
`;

const Nav = styled.nav`
    display: flex;
    padding: 0 1rem;
    height: ${props => props.theme.topNavHeight};
    line-height: ${props => props.theme.topNavHeight};
    box-shadow: ${props => props.theme.shadow1};
    background-color: ${props => props.theme.mainColor};
`;

export class TopNav extends React.Component<{}, {}> {
    render() {
        return (
            <Nav>
                <NavIcon name='menu' />
                <Logo src='http://153.120.11.149/images/logo.png'/>
                <Dropdown triggerFn={console.log} />
                <Dropdown triggerFn={console.log} />
                <Dropdown triggerFn={console.log} />
            </Nav>
        );
    }
}

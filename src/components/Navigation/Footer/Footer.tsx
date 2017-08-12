import * as React from 'react';
import styled from 'styled-components';

export interface IFooterMenu {
    title: string;
    path: string;
}

export interface IFooterProps {
    header: string;
    menus: IFooterMenu[];
}

const StyledFooter = styled.footer`
    background: ${props => props.theme.mainColor};
    display: flex;
    padding: 0 .7rem;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 0.8rem;
    height: 2.5rem;
`;
const Nav = styled.nav`
    height: 100%;
`;
const Ul = styled.ul`
    display: inline;
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;

    & > li {
        display: inline-block;
        padding: 0 1rem;
        height: 2.5rem;
        line-height: 2.5rem;
        cursor: pointer;
        background-color: transparent;
        transition: background .2s ease;

        &:hover {
            background-color: rgba(0, 0, 0, .06);
        }
    }
`;

export const Footer: React.SFC<IFooterProps> = ({ header, menus}) => {
    return (
        <StyledFooter>
            <header>{ header }</header>
            <Nav>
                <Ul>
                    { menus.map(menu => <li key={menu.path}>{menu.title}</li>)}
                </Ul>
            </Nav>
        </StyledFooter>
    );
}

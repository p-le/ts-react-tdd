import * as React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
    text-align: center;
`;

const MenuHeader = styled.header`
    font-size: 2.8rem;
    color: palevioletred;
`;

const MenuNav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    background: papayawhip;
`;

const MenuNavItem = styled.li`
    font-size: 1.4rem;
    cursor: pointer;
    line-height: 2.5;
    padding: 0 1rem;
    color: palevioletred;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: moccasin;
    }

    @media(min-width: 850px) {
        display: inline-block;
    }
`;

export class BasicMenu extends React.Component<{}, {}> {
    render() {
        return (
            <Menu>
                <MenuHeader>React Typescript</MenuHeader>
                <MenuNav>
                    <MenuNavItem>Item 1</MenuNavItem>
                    <MenuNavItem>Item 2</MenuNavItem>
                    <MenuNavItem>Item 3</MenuNavItem>
                    <MenuNavItem>Item 4</MenuNavItem>
                    <MenuNavItem>Item 5</MenuNavItem>
                </MenuNav>
            </Menu>
        );
    }
}

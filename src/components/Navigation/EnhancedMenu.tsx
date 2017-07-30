import * as React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
`;

const MenuHeader = styled.header`
    font-size: 2.8rem;
    color: palevioletred;
`;

const MenuTrigger = styled.input.attrs({
    type: 'checkbox',
    id: 'nav',
})`
    display: none;

    &:checked ~ ul {
        height: auto;
        opacity: 1;
    }

    @media(max-width: 500px) {
        &:checked ~ label:before {
            content: '\\X';
        }
    }
    @media (min-width: 501px) and (max-width: 850px) {
        &:checked ~ label:before {
            content: 'Menu \\25B2';
        }
    }
`;
const MenuTriggerLabel = styled.label.attrs({
    htmlFor: 'nav',
})`
    display: none;

    @media(max-width: 500px) {
        &:before {
            content: "\\2630";
        }
    }

    @media (min-width: 501px) and (max-width: 850px) {
        &:before {
            content: 'Menu \\25BC';
        }
    }

    @media (max-width: 850px) {
        display: block;
        cursor: pointer;
    }
`;

const MenuNav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    background: papayawhip;
    transition: height 1s ease, opacity 1s ease;

    @media(max-width: 850px) {
        height: 0;
        opacity: 0;
    }
`;

const MenuNavItem = styled.li`
    font-size: 1.4rem;
    cursor: pointer;
    line-height: 2.5;
    padding: 0 2.5rem;
    color: palevioletred;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: moccasin;
    }

    @media(min-width: 850px) {
        display: inline-block;
    }
`;

export class EnhancedMenu extends React.Component<{}, {}> {
    render() {
        return (
            <Menu>
                <MenuHeader>React Typescript </MenuHeader>
                <MenuTrigger />
                <MenuTriggerLabel />
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

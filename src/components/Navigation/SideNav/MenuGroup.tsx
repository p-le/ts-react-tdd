import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from '../../../utils/styled-components';

export interface IMenuItem {
    title: string;
    path: string;
}

export interface IMenuGroup {
    parent: IMenuItem;
    childs: IMenuItem[];
}

export interface IMenuGroupProps {
    menu: IMenuGroup;
}

export const MenuGroup: React.SFC<IMenuGroupProps> = ({ menu }) => (
    <div>
        <header><Link to={menu.parent.path}>{ menu.parent.title }</Link></header>
        <ul>
            { menu.childs.map(item => <li key={item.path}><Link to={item.path}>{ item.title }</Link></li>)}
        </ul>
    </div>
);

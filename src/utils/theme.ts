import { injectGlobal, css } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
};

export interface ITheme {
    gridGutterWidth: number;
    mainColor: string;
    textColor: string;
    topNavHeight: string;
    shadow1: string;
}

export const theme: ITheme = {
    gridGutterWidth: 30,
    mainColor: '#5da4dd',
    textColor: 'white',
    topNavHeight: '3rem',
    shadow1: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
};

export const global = injectGlobal`
    html {
        box-sizing: border-box;
        font-size: 100%;
        font-family: "Noto Sans Japanese";
        min-width: 320px;
        font-family: Arial;
        line-height: 1.5;
        overflow: hidden;
    }
    body {
        margin: 0;
        height: 100vh;
        overflow: hidden !important;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    #app {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
`;

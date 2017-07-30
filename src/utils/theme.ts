import { injectGlobal } from 'styled-components';

export interface ITheme {
    gridGutterWidth: number;
}

export const theme: ITheme = {
    gridGutterWidth: 30,
};

const global = injectGlobal`
    html {
        box-sizing: border-box;
        font-size: 100%;
        min-width: 320px;
        font-family: Arial;
        line-height: 1.5;
    }
    body {
        margin: 0;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
`;

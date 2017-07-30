import * as React from 'react';
import styled, { css } from 'styled-components';

interface IModifier {
    [key: string]: any;
}

const modifier: IModifier = {
    default: css`
        background-color: #CCD1D9;
        &:hover {
            background-color: #AAB2BD;
        }
    `,
    primary: css`
        background-color: #4FC1E9;
        &:hover {
            background-color: #3BAFDA;
        }
    `,
    success: css`
        background-color: #A0D468;
        &:hover {
            background-color: #8CC152;
        }
    `,
    info: css`
        background-color: #48CFAD;
        &:hover {
            background-color: #37BC9B;
        }
    `,
    warning: css`
        background-color: #FFCE54;
        &:hover {
            background-color: #F6BB42;
        }
    `,
    danger: css`
        background-color: #ED5565;
        &:hover {
            background-color: #DA4453;
        }
    `,
};

// const modifer: IModifier = Object.keys(Modifier)
//     .filter((v) => !Number(v))
//     .reduce<IModifier>((accumulator, modifier) => {
//         accumulator[modifier] = (args: any) => css`
//             ${ css(args) }
//         `;
//         return accumulator;
//     }, {});

interface IButtonProps {
    type?: string;
    value: string;
    modifier?: string;
    className?: string;
    callbackFn?: () => void;
}

class Button extends React.Component<IButtonProps, {}> {
    static defaultProps: Partial<IButtonProps> = {
        type: 'button',
        modifier: 'default',
    };

    render() {
        return (
            <button
                className={this.props.className}
                type={this.props.type}
                onClick={this.props.callbackFn}
            >
                { this.props.value }
            </button>
        );
    }
}

export const StyledButton = styled(Button)`
    ${(props) => modifier[props.modifier]}
    appearance: none;
    box-shadow: none;
    outline: none;
    color: white;
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;
`;

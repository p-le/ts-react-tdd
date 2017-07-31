import * as React from 'react';
import styled, { css, mergeProps } from '../../utils/styled-components';

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

const StyledButton = mergeProps<IButtonProps, HTMLButtonElement>(styled.button)`
    ${props => modifier[props.modifier]}
    appearance: none;
    box-shadow: none;
    outline: none;
    border-radius: 2px;
    color: white;
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    border: none;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
`;

export class Button extends React.Component<IButtonProps, {}> {
    static defaultProps: Partial<IButtonProps> = {
        type: 'button',
        modifier: 'default',
    };

    render() {
        return (
            <StyledButton {...this.props} >
                { this.props.value }
            </StyledButton>
        );
    }
}

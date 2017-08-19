import styled, { mergeProps } from '../../../utils/styled-components';

interface IRadioTextProps {
    isChecked: boolean;
}

export const RadioText = mergeProps<IRadioTextProps, HTMLLabelElement>(styled.label)`
    position: relative;
    display: inline-block;
    padding-left: 1.5rem;
    cursor: pointer;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 1rem;
    user-select: none;
    transition: .3s ease;
    box-sizing: border-box;

    &:before, &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 1rem;
        height: 1rem;
        margin: auto 0;
        z-index: 0;
        transition: .3s ease;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.mainColor};
    }

    &:after {
        transform: ${props => props.isChecked ? 'scale(.5)' : 'scale(0)'};
        ${props => props.isChecked ? `background-color: ${props.theme.mainColor}` : ''};
    }

`;

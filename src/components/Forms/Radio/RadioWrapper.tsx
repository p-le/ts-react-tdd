import styled, { mergeProps } from '../../../utils/styled-components';

interface IRadioWrapperProps {
    vertical: boolean;
}

export const RadioWrapper = mergeProps<IRadioWrapperProps, HTMLDivElement>(styled.div)`
    ${props => {
        if (!props.vertical) {
            return `
                display: inline-block;
                margin-right: 1rem;
            `;
        }
    }};
`;

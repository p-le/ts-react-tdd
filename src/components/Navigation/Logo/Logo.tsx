import * as React from 'react';
import styled from '../../../utils/styled-components';

const Img = styled.img`
    height: 100%;
    width: auto;
    filter: drop-shadow(1px 0 1px rgba(0, 0, 0, .7));
`;

interface ILogoProps {
    src: string;
}

export const Logo: React.SFC<ILogoProps> = ({ src }) => (
    <Img src={src} />
);

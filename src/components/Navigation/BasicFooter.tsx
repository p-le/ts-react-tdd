import * as React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    background: papayawhip;
`;
const FooterNav = styled.nav`
    text-align: center;
    & > ul {
        list-style-type: none;

        & > li {
            display: inline-block;
        }
    }


`;

const FooterDetail = styled.div`
    margin: 1rem auto;
    text-align: center;
`;

export class BasicFooter extends React.Component<{}, {}> {
    render() {
        return (
            <Footer>
                <FooterNav>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </FooterNav>
                <FooterDetail>
                    <p>Copyright &copy; 2016 | Powered by p-le</p>
                </FooterDetail>
            </Footer>
        );
    }
}

import * as React from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { Wrapper } from '../../components/Shared/FullWrapper';
import { TopNav } from '../../components/Navigation/TopNav';
import { Footer, IFooterProps } from '../../components/Navigation/Footer';
import { getAdList } from '../../services/ads';
import styled from '../../utils/styled-components';

interface IHomeState {
    ads: any[];
}

const HomeWrapper = Wrapper.extend`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const Content = styled.div`
    flex: 1;
`;

export class Home extends React.Component<{}, IHomeState> {
    footerProps: IFooterProps;

    constructor() {
        super();
        this.state = {
            ads: [],
        };
        this.footerProps = {
            header: 'Copyright(C) Dimage Inc. All Rights Reserved',
            menus: [
                { title: '利用規約', path: 'terms' },
                { title: 'このサイトについて', path: 'about' },
                { title: 'FAQs', path: 'help' },
                { title: '問い合わせ', path: 'contact' },
            ],
        };
    }
    componentDidMount() {
        getAdList()
            .then((res: AxiosResponse) => {
                this.setState({
                    ads: res.data.data,
                });
            })
            .catch((error: AxiosError) => {

            });
    }
    render() {
        return (
            <HomeWrapper>
                <TopNav />
                <Content>
                    { this.props.children }
                </Content>
                { this.state.ads.map(ad => <div key={ad.id} >{ ad.name }</div>) }
                <Footer {...this.footerProps} />
            </HomeWrapper>
        );
    }
}

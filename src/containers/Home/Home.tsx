import * as React from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { Wrapper } from '../../components/Shared/FullWrapper';
import { TopNav } from '../../components/Navigation/TopNav';
import { SideNav, IMenuGroup } from '../../components/Navigation/SideNav';
import { Footer, IFooterProps } from '../../components/Navigation/Footer';
import { getAdList } from '../../services/ads';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { PrivateRoute } from '../../components/Auth/';
import { AdCategory } from '../System';
import { Affiliate } from '../Ad';
import styled from '../../utils/styled-components';

const HomeWrapper = Wrapper.extend`
    display: flex;
    max-height: 100vh;
    flex-direction: column;
    overflow: hidden;
`;

const Main = styled.main`
    display: flex;
    flex: 1;
    flex-direction: row;
    overflow: hidden;
`;

const Content = styled.div`
    flex: 1;
    overflow-y: auto;
`;

interface IHomeProps extends RouteComponentProps<any> {
    name?: string;
}

export class Home extends React.Component<IHomeProps, {}> {
    footerProps: IFooterProps;
    sideMenus: IMenuGroup[];

    constructor(props: IHomeProps) {
        super(props);
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
        this.sideMenus = [
            {
                parent: { title: 'ホーム', path: '/' },
                childs: [],
            },
            {
                parent: { title: 'レポート', path: ''  },
                childs: [
                    { title: 'メディアオーナーレポート', path: '/media-owners/analytics' },
                ],
            },
            {
                parent: { title: '広告管理', path: '' },
                childs: [
                    { title: 'アフィリエイト広告一覧', path: `${props.match.url}/affiliate` },
                ],
            },
            {
                parent: { title: 'システム管理', path: ''  },
                childs: [
                    { title: 'メディアカテゴリー一覧', path: `${props.match.url}/media-category` },
                    { title: '広告カテゴリー一覧', path: `${props.match.url}/ad-category` },
                ],
            },
        ];
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
        const { match } = this.props;
        return (
            <HomeWrapper>
                <TopNav />
                <Main>
                    <SideNav menu={this.sideMenus} />
                    <Content>
                        <Switch>
                            <PrivateRoute path={`${match.url}/ad-category`} component={AdCategory} />
                            <PrivateRoute path={`${match.url}/affiliate`} component={Affiliate} />
                        </Switch>
                    </Content>
                </Main>
                <Footer {...this.footerProps} />
            </HomeWrapper>
        );
    }
}

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
import styled from '../../utils/styled-components';

const HomeWrapper = Wrapper.extend`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const Main = styled.main`
    display: flex;
    flex: 1;
    flex-direction: row;
`;

const Content = styled.div`
    flex: 1;
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
                        </Switch>
                    </Content>
                </Main>
                <Footer {...this.footerProps} />
            </HomeWrapper>
        );
    }
}

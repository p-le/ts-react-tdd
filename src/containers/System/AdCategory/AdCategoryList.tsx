import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { AxiosResponse, AxiosError, CancelTokenStatic } from 'axios';
import { AxiosFactory } from '../../../utils/axios';
import { DataList } from '../../../components/DataList';

interface IAdCategory {
    id: number;
    name: string;
}

interface IAdCategoryListState {
    isFetching: boolean;
    adCategories: IAdCategory[];
}

export class AdCategoryList extends React.Component<RouteComponentProps<any>, IAdCategoryListState> {

    constructor() {
        super();
        this.state = {
            isFetching: true,
            adCategories: [],
        };
    }
    componentDidMount() {
        AxiosFactory.createAuthInstance()
            .get('/ad-category')
            .then((res: AxiosResponse) => this.setState({
                isFetching: false,
                adCategories: res.data,
            }))
            .catch((err: AxiosError) => console.log(err));
    }

    render() {
        const content = this.state.isFetching ? <p> Fetching ... </p> : <DataList data={this.state.adCategories} />;
        return (
            <div>
                <Link to={`${this.props.match.url}/create`}>登録</Link>
                <Link to={`${this.props.match.url}/export`}>エクスポート</Link>
                <Link to={`${this.props.match.url}/delete`}>削除</Link>
                { content }
            </div>
        );
    }
}

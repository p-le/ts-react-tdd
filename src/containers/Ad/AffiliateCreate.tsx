import * as React from 'react';
import { AxiosResponse, AxiosError, CancelTokenSource } from 'axios';
import { AxiosFactory } from '../../utils/axios';
import { Form } from '../../components/Forms/Form';
import { Text } from '../../components/Forms/Text';
import { Textarea } from '../../components/Forms/Textarea';
import { Checkbox, CheckboxGroup } from '../../components/Forms/Checkbox';
import { Select } from '../../components/Forms/Select';

import { getMediaCategoryList } from '../../services/media-category';

interface IAffiliateCreateFormState {
    name: string;
    note: string;
    is_testing: number;
    admin_note: string;
    [key: string]: any;
}

interface IAdvertiser {
  id: number;
  name: string;
}
interface IMediaCategory {
    id: number;
    name: string;
}
interface IAffiliateCreateDataState {
  advertisers: {
    isFetching: boolean;
    data: IAdvertiser[];
  };
  mediaCategories: {
      isFetching: boolean;
      data: IMediaCategory[];
  };
}

export class AffiliateCreate extends React.Component<{}, IAffiliateCreateFormState & IAffiliateCreateDataState> {
    source: CancelTokenSource;

    constructor() {
        super();
        this.state = {
            name: '',
            note: '',
            admin_note: '',
            is_testing: 1,
            advertisers: {
                isFetching: true,
                data: [],
            },
            mediaCategories: {
                isFetching: true,
                data: [],
            },
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.source = AxiosFactory.createCancelToken().source();
    }

    componentDidMount() {
        AxiosFactory.createAuthInstance()
            .get('/advertiser', {
                cancelToken: this.source.token,
            })
            .then((res: AxiosResponse) => this.setState({
            advertisers: {
                isFetching: false,
                data: res.data,
            },
            }))
            .catch((err: AxiosError) => console.log(err));

        getMediaCategoryList(this.source.token)
            .then((res: AxiosResponse) => this.setState({
                mediaCategories: {
                    isFetching: false,
                    data: res.data,
                },
            }));
    }

    componentWillUnmount() {
        this.source.cancel();
    }

    handleOnChange(event: React.ChangeEvent<any>) {
        const target: HTMLInputElement | HTMLTextAreaElement = event.currentTarget;
        this.setState({
            [target.name]: target.value,
        });
    }

    render() {
        return (
            <Form>
                <Checkbox label='テスト' name='is_testing' value={this.state.is_testing} />
                <Text label='広告名' name='name' value={this.state.name} onChange={this.handleOnChange} />
                <Textarea name='note' value={this.state.note} label='備考' onChange={this.handleOnChange} />
                <Textarea name='admin_note' value={this.state.admin_note} label='経営者参考' onChange={this.handleOnChange}/>
            </Form>
        );
    }
}

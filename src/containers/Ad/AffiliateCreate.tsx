import * as React from 'react';
import { AxiosResponse, AxiosError, CancelTokenSource } from 'axios';
import { AxiosFactory } from '../../utils/axios';
import { Form } from '../../components/Forms/Form';
import { Text } from '../../components/Forms/Text';
import { Textarea } from '../../components/Forms/Textarea';
import { Checkbox, CheckboxGroup, ICheckbox } from '../../components/Forms/Checkbox';
import { Select, ISelectOption } from '../../components/Forms/Select';
import { Spinner } from '../../components/Shared/Spinner';

import { getMediaCategoryList } from '../../services/media-category';
import { getAdCategoryList } from '../../services/ad-category';

interface IAffiliateCreateFormState {
    name: string;
    note: string;
    advertiserId: number;
    is_testing: number;
    admin_note: string;
    [key: string]: any;
}

interface IAffiliateCreateDataState {
  advertisers: {
    isFetching: boolean;
    data: ISelectOption[];
  };
  mediaCategories: {
      isFetching: boolean;
      data: ISelectOption[];
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
            advertiserId: 0,
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
        this.handleOnSelectAdvertiser = this.handleOnSelectAdvertiser.bind(this);
        this.source = AxiosFactory.createCancelToken().source();
    }

    componentDidMount() {
        AxiosFactory.createAuthInstance()
            .get('/advertiser', {
                cancelToken: this.source.token,
            })
            .then((res: AxiosResponse) => {
                this.setState({
                    advertisers: {
                        isFetching: false,
                        data: this.transformResponse(res.data),
                    },
                });
            })
            .catch((err: AxiosError) => console.log(err));

        getMediaCategoryList(this.source.token)
            .then((res: AxiosResponse) => this.setState({
                mediaCategories: {
                    isFetching: false,
                    data: this.transformResponse(res.data),
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

    handleOnSelectAdvertiser(option: ISelectOption) {
        this.setState({
            advertiserId: option.key as number,
        });
    }

    transformResponse(data: any): ISelectOption[] {
        return data.map((datum: any) => {
            const option: ISelectOption = {
                key: datum.id,
                value: `[${datum.id}] ${datum.name}`,
            };
            return option;
        });
    }

    render() {
        return (
            <Form>
                <Checkbox label='テスト' name='is_testing' value={this.state.is_testing} />
                <Text label='広告名' name='name' value={this.state.name} onChange={this.handleOnChange} />
                <Select
                    defaultValue='広告主を選択する'
                    options={this.state.advertisers.data}
                    label='広告主'
                    onSelectFn={this.handleOnSelectAdvertiser}
                />
                <Textarea name='note' value={this.state.note} label='備考' onChange={this.handleOnChange} />
                <Textarea name='admin_note' value={this.state.admin_note} label='経営者参考' onChange={this.handleOnChange}/>
                <Spinner />
            </Form>
        );
    }
}

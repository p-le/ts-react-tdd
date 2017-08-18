import * as React from 'react';
import { AxiosResponse, AxiosError, CancelTokenSource } from 'axios';
import * as  update from 'immutability-helper';
import { AxiosFactory } from '../../utils/axios';

import { Form } from '../../components/Forms/Form';
import { Text } from '../../components/Forms/Text';
import { Textarea } from '../../components/Forms/Textarea';
import { Checkbox, CheckboxGroup, ICheckboxOption } from '../../components/Forms/Checkbox';
import { Select, ISelectOption } from '../../components/Forms/Select';
import { Spinner } from '../../components/Shared/Spinner';
import { Datetime } from '../../components/Forms/Datetime';

import { getMediaCategoryList } from '../../services/media-category';
import { getAdCategoryList } from '../../services/ad-category';
import { getAdvertiserList } from '../../services/advertiser';
import { getOsList } from '../../services/os';

interface IAffiliateCreateFormState {
    name: string;
    note: string;
    advertiserId: number;
    adCategoryId: number;
    is_testing: number;
    optionApp: number;
    admin_note: string;
    os: number[];
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
  adCategories: {
      isFetching: boolean;
      data: ISelectOption[];
  };
  oses: {
      isFetching: boolean;
      data: ICheckboxOption[];
  };
}

export class AffiliateCreate extends React.Component<{}, IAffiliateCreateFormState & IAffiliateCreateDataState> {
    [ method: string]: any;
    source: CancelTokenSource;

    constructor() {
        super();
        this.state = {
            name: '',
            note: '',
            admin_note: '',
            advertiserId: 0,
            adCategoryId: 0,
            is_testing: 1,
            optionApp: 0,
            os: [],
            advertisers: {
                isFetching: true,
                data: [],
            },
            mediaCategories: {
                isFetching: true,
                data: [],
            },
            adCategories: {
                isFetching: true,
                data: [],
            },
            oses: {
                isFetching: true,
                data: [],
            },
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSelectAdvertiser = this.handleOnSelectAdvertiser.bind(this);
        this.handleOnSelectAdCategory = this.handleOnSelectAdCategory.bind(this);
        this.handleSelectOs = this.handleSelectOs.bind(this);
        this.source = AxiosFactory.createCancelToken().source();
    }

    /* ---------------------------------------------------------
        コンポーネントのライフサイクル関数
    ------------------------------------------------------------ */

    componentDidMount() {
        getAdvertiserList(this.source.token)
            .then((res: AxiosResponse) => {
                this.setState({
                    advertisers: {
                        isFetching: false,
                        data: this.transformResponse(res.data),
                    },
                });
            });
        getMediaCategoryList(this.source.token)
            .then((res: AxiosResponse) => this.setState({
                mediaCategories: {
                    isFetching: false,
                    data: this.transformResponse(res.data),
                },
            }));
        getAdCategoryList(this.source.token)
            .then((res: AxiosResponse) => this.setState({
                adCategories: {
                    isFetching: false,
                    data: this.transformResponse(res.data),
                },
            }));
        getOsList(this.source.token)
            .then((res: AxiosResponse) => this.setState({
                oses: {
                    isFetching: false,
                    data: this.transformResponse(res.data),
                },
            }));
    }

    componentWillUnmount() {
        this.source.cancel();
    }

    /* ---------------------------------------------------------
        フォームの入力のハンドラー関数
    ------------------------------------------------------------ */
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

    handleOnSelectAdCategory(option: ISelectOption) {
        this.setState({
            adCategoryId: option.key as number,
        });
    }

    handleSelectOs(option: ICheckboxOption) {
        if (this.state.os.indexOf(option.key as number)) {
            update(this.state, {
                os: { $unset: [option.key] },
            });
        } else {
            update(this.state, {
                os: { $push: [option.key] },
            });
        }
    }
    /* ---------------------------------------------------------
        ユーティリティ関数
    ------------------------------------------------------------ */

    transformResponse(data: any): ISelectOption[] {
        return data.map((datum: any) => {
            const option: ISelectOption = {
                key: datum.id,
                value: `[${datum.id}] ${datum.name}`,
            };
            return option;
        });
    }

    /* ---------------------------------------------------------
        コンポーネント描画する
    ------------------------------------------------------------ */
    render() {
        return (
            <Form>
                <Checkbox label='テスト' name='is_testing' value={this.state.is_testing} single={true} />
                <Text label='広告名' name='name' value={this.state.name} onChange={this.handleOnChange} />
                <Select
                    defaultValue='広告主を選択する'
                    options={this.state.advertisers.data}
                    label='広告主'
                    onSelectFn={this.handleOnSelectAdvertiser}
                />
                <Select
                    defaultValue='広告カテゴリーを選択する'
                    options={this.state.adCategories.data}
                    label='広告カテゴリー'
                    onSelectFn={this.handleOnSelectAdCategory}
                />
                <Datetime />
                <CheckboxGroup name='os' options={this.state.oses.data} onSelect={this.handleSelectOs} />
                <Checkbox label='アプリ広告' name='option_app' value={this.state.optionApp} single={true} />
                <Textarea name='note' value={this.state.note} label='備考' onChange={this.handleOnChange} />
                <Textarea name='admin_note' value={this.state.admin_note} label='経営者参考' onChange={this.handleOnChange}/>
            </Form>
        );
    }
}

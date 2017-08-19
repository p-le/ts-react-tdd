import * as React from 'react';
import { AxiosResponse, AxiosError, CancelTokenSource } from 'axios';
import { camelCase } from 'lodash';
import * as  update from 'immutability-helper';
import { AxiosFactory } from '../../utils/axios';

import { Form } from '../../components/Forms/Form';
import { Text } from '../../components/Forms/Text';
import { Textarea } from '../../components/Forms/Textarea';
import { Checkbox, CheckboxGroup, ICheckboxOption } from '../../components/Forms/Checkbox';
import { Select, ISelectOption } from '../../components/Forms/Select';
import { Spinner } from '../../components/Shared/Spinner';
import { Datetime } from '../../components/Forms/Datetime';
import { Radio, IRadioOption } from '../../components/Forms/Radio';

import { getMediaCategoryList } from '../../services/media-category';
import { getAdCategoryList } from '../../services/ad-category';
import { getAdvertiserList } from '../../services/advertiser';
import { getOsList } from '../../services/os';

import * as Constants from '../../utils/constants';

interface IAffiliateCreateFormState {
    [key: string]: any;
    data: {
        name: string;
        note: string;
        cvCondition: string;
        creativeType: number;
        advertiserId: number;
        adCategoryId: number;
        isTesting: number;
        optionApp: number;
        payper: number;
        hasIncentiveAllowance: number;
        priceFixed: number;
        adminNote: string;
        os: number[];
    };
    form: {
        isTesting: ICheckboxOption;
        optionApp: ICheckboxOption;
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
        os: {
            isFetching: boolean;
            data: ICheckboxOption[];
        };
        paypers: ISelectOption[];
        hasIncentiveAllowance: IRadioOption[];
        priceFixed: IRadioOption[];
        creativeTypes: ISelectOption[];
    };
}

export class AffiliateCreate extends React.Component<{}, IAffiliateCreateFormState> {
    source: CancelTokenSource;

    constructor() {
        super();
        this.state = {
            data: {
                name: '',
                note: '',
                cvCondition: '',
                adminNote: '',
                creativeType: Constants.CreativeType.Text,
                advertiserId: Constants.UndefinedId,
                adCategoryId: Constants.UndefinedId,
                isTesting: Constants.Status.On,
                optionApp: Constants.Status.Off,
                payper: Constants.Payper.Conversion,
                hasIncentiveAllowance: Constants.Status.On,
                priceFixed: Constants.PriceFixed.Amount,
                os: [],
            },
            form: {
                isTesting: { text: 'テスト', value: Constants.Status.On, },
                optionApp: { text: 'アプリ広告', value: Constants.Status.On, },
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
                os: {
                    isFetching: true,
                    data: [],
                },
                paypers: [
                    { key: 3, value: 'クリック報酬' },
                    { key: 4, value: '成果報酬' },
                    { key: 5, value: 'クリック＆成果報酬' },
                ],
                hasIncentiveAllowance: [
                    { text: '有', value: Constants.Status.On },
                    { text: '無', value: Constants.Status.Off },
                ],
                priceFixed: [
                    { text: '定額', value: Constants.PriceFixed.Amount },
                    { text: '定率', value: Constants.PriceFixed.Percentage },
                ],
                creativeTypes: [

                ],
            },
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSelectAdvertiser = this.handleOnSelectAdvertiser.bind(this);
        this.handleOnSelectAdCategory = this.handleOnSelectAdCategory.bind(this);
        this.handleSelectIsTesting = this.handleSelectIsTesting.bind(this);
        this.handleSelectOptionApp = this.handleSelectOptionApp.bind(this);
        this.handleSelectIncentiveAllowance = this.handleSelectIncentiveAllowance.bind(this);
        this.handleSelectPriceFixed = this.handleSelectPriceFixed.bind(this);
        this.handleSelectAllOs = this.handleSelectAllOs.bind(this);
        this.handleSelectOs = this.handleSelectOs.bind(this);
        this.handleSelectPayper = this.handleSelectPayper.bind(this);
        this.setForm = this.setForm.bind(this);
        this.setData = this.setData.bind(this);

        this.source = AxiosFactory.createCancelToken().source();
    }

    /* ---------------------------------------------------------
        コンポーネントのライフサイクル関数
    ------------------------------------------------------------ */

    componentDidMount() {
        getAdvertiserList(this.source.token)
            .then((res: AxiosResponse) => {
                this.setForm({
                    advertisers: {
                        isFetching: false,
                        data: this.transformResponse(res.data),
                    },
                });
            });
        getMediaCategoryList(this.source.token)
            .then((res: AxiosResponse) => this.setForm({
                mediaCategories: {
                    isFetching: false,
                    data: this.transformResponse(res.data),
                },
            }));
        getAdCategoryList(this.source.token)
            .then((res: AxiosResponse) => this.setForm({
                adCategories: {
                    isFetching: false,
                    data: this.transformResponse(res.data),
                },
            }));

        getOsList(this.source.token)
            .then((res: AxiosResponse) => this.setForm({
                os: {
                    isFetching: false,
                    data: res.data.map((datum: any) => {
                        const option: ICheckboxOption = {
                            text: `[${datum.id}] ${datum.name}`,
                            value: datum.id,
                        };
                        return option;
                    }),
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
        this.setData({
            [camelCase(target.name)]: target.value,
        });
    }

    handleOnSelectAdvertiser(option: ISelectOption) {
        this.setData({
            advertiserId: option.key as number,
        });
    }

    handleOnSelectAdCategory(option: ISelectOption) {
        this.setData({
            adCategoryId: option.key as number,
        });
    }

    handleSelectIsTesting(option: ICheckboxOption) {
        const isTesting = (this.state.data.isTesting === option.value) ?
            Constants.Status.Off :
            Constants.Status.On;
        this.setData({
            isTesting,
        });
    }
    handleSelectOptionApp(option: ICheckboxOption) {
        const { data } = this.state;
        const optionApp = (data.optionApp === option.value) ?
            Constants.Status.Off :
            Constants.Status.On;
        this.setData({
            optionApp,
        });
    }
    handleSelectOs(option: ICheckboxOption) {
        const { data } = this.state;
        let os: number[] = this.state.data.os;
        const index = data.os.indexOf(option.value as number);
        if (index > -1) {
            os = update(os, { $splice: [[index, 1]] });
        } else {
            os = update(os, { $push: [option.value] });
        }
        this.setData({
            os,
        });
    }

    handleSelectAllOs() {
        const { data, form } = this.state;
        let os: Array<string | number> = [];
        if (data.os.length !== form.os.data.length) {
            os = form.os.data.map(datum => datum.value);
        }
        this.setData({
            os,
        });
    }

    handleSelectPayper(option: ISelectOption) {
        this.setData({
            payper: option.key as number,
        });
    }

    handleSelectIncentiveAllowance(option: IRadioOption) {
        this.setData({
            hasIncentiveAllowance: option.value as number,
        });
    }
    handleSelectPriceFixed(option: IRadioOption) {
        if (option.value !== this.state.data.priceFixed) {
            this.setData({
                priceFixed: option.value as number,
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

    setForm(change: any) {
        this.setState({
            form: Object.assign({}, this.state.form, change),
        });
    }

    setData(change: any) {
        this.setState({
            data: Object.assign({}, this.state.data, change),
        });
    }
    /* ---------------------------------------------------------
        コンポーネント描画する
    ------------------------------------------------------------ */
    render() {
        console.log(this.state);
        const { data, form } = this.state;
        return (
            <Form>
                <Checkbox
                    option={form.isTesting}
                    name='is_testing'
                    checked={data.isTesting === Constants.Status.On}
                    onSelect={this.handleSelectIsTesting}
                    single={true}
                />
                <Text label='広告名' name='name' value={data.name} onChange={this.handleOnChange} />
                <Select
                    defaultValue='広告主を選択する'
                    options={form.advertisers.data}
                    label='広告主'
                    onSelectFn={this.handleOnSelectAdvertiser}
                />
                <Select
                    defaultValue='広告カテゴリーを選択する'
                    options={form.adCategories.data}
                    label='広告カテゴリー'
                    onSelectFn={this.handleOnSelectAdCategory}
                />
                <Datetime />
                <CheckboxGroup
                    name='os'
                    options={form.os.data}
                    onSelect={this.handleSelectOs}
                    onSelectAll={this.handleSelectAllOs}
                    currentValue={data.os}
                />
                <Checkbox
                    option={form.optionApp}
                    name='option_app'
                    checked={data.optionApp === Constants.Status.On}
                    onSelect={this.handleSelectOptionApp}
                    single={true}
                />
                <Select
                    defaultValue='成果報酬'
                    options={form.paypers}
                    label='報酬タイプ'
                    onSelectFn={this.handleSelectPayper}
                />
                <Radio
                    name='incentive'
                    label='キックバック通知'
                    options={form.hasIncentiveAllowance}
                    onClick={this.handleSelectIncentiveAllowance}
                    currentValue={data.hasIncentiveAllowance}
                    vertical={false}
                />
                <Text label='成果発生条件' name='cv_condition' value={data.cvCondition} onChange={this.handleOnChange} />
                <Radio
                    name='priceFixed'
                    label='定額/定率（成果）'
                    options={form.priceFixed}
                    onClick={this.handleSelectPriceFixed}
                    currentValue={data.priceFixed}
                    vertical={false}
                />
                <Textarea name='note' value={data.note} label='備考' onChange={this.handleOnChange} />
                <Textarea name='admin_note' value={data.adminNote} label='経営者参考' onChange={this.handleOnChange}/>
            </Form>
        );
    }
}

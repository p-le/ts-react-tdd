import * as React from 'react';
import { Form } from '../../../components/Forms/Form';
import { Text } from '../../../components/Forms/Text';
import { Textarea } from '../../../components/Forms/Textarea';

interface IAdCategoryCreateState {
    name: string;
    note: string;
    [key: string]: string;
}

export class AdCategoryCreate extends React.Component<{}, IAdCategoryCreateState> {
    constructor() {
        super();
        this.state = {
            name: '',
            note: '',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event: React.ChangeEvent<any>) {
        const target: HTMLInputElement = event.target;

        this.setState({
            [target.name]: target.value,
        });
    }

    render() {
        return (
            <Form>
                <Text label='カテゴリ名' name='name' value={this.state.name} onChange={this.handleOnChange} />
                <Textarea />
            </Form>
        );
    }
}

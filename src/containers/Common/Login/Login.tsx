import * as React from 'react';
import { AxiosResponse } from 'axios';
import { Redirect } from 'react-router-dom';
import { LoginWrapper } from './LoginWrapper';
import { Text, Password } from '../../../components/Forms/Text';
import { Button } from '../../../components/Forms/Button';
import { login } from '../../../services/auth';

interface ILoginState {
    email: string;
    password: string;
    isRedirect: boolean;
    [key: string]: string | boolean;
}

export class Login extends React.Component<{}, ILoginState> {

    constructor() {
        super();
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            email: '',
            password: '',
            isRedirect: false,
        };
    }

    handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        login(this.state.email, this.state.password)
            .then((res: AxiosResponse) => {
                this.setState({ isRedirect: true });
            })
            .catch(() => {});
    }

    handleOnChange({ target }: { target: HTMLInputElement}) {
        this.setState({
            [target.name]: target.value,
        });
    }

    render() {
        const { email, password, isRedirect } = this.state;
        return (
            <LoginWrapper>
                <form name='loginForm' role='login-form' onSubmit={this.handleOnSubmit} >
                    <Text label='メール' name='email' value={email} onChange={this.handleOnChange} />
                    <Password label='パスワード' name='password' value={password} onChange={this.handleOnChange} />
                    <Button modifier='primary' type='submit' value='ログイン' />
                </form>
                { isRedirect && <Redirect to='/manage' /> }
            </LoginWrapper>
        );
    }
}

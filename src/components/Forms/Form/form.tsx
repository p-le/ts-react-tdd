import * as React from 'react';
import styled from '../../../utils/styled-components';
import { Button } from '../Button';

const StyledForm = styled.form`
    overflow: hidden;
    width: 23rem;
`;

type HTMLFormProps = React.HTMLProps<HTMLFormElement>;

export class Form extends React.Component<HTMLFormProps, {}> {
    render() {
        return (
            <StyledForm onSubmit={this.props.onSubmit}>
                {this.props.children}
                <Button value='登録' modifier='primary' />
                <Button value='キャンセル' modifier='danger' />
            </StyledForm>
        );
    }
}

import * as React from 'react';

import { storiesOf, addDecorator  } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { Text } from './text';
import { Password } from './password';

addDecorator(withKnobs);

storiesOf('<Text />', module)
  .add('Single', () => {
    const label = text('Label', '広告名');
    const name = text('Name', 'ad');
    const value = '';
    return (
      <div>
        <Text label={label} name={name}/>
      </div>
    );
  })
  .add('Password', () => {
    const value = '';
    return (
      <div>
        <Password label='パスワード' name='password' />
      </div>
    );
  });

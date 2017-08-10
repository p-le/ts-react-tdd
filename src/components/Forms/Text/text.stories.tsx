import * as React from 'react';

import { storiesOf, addDecorator  } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { Text } from './index';
import { Password } from './password';

addDecorator(withKnobs);

storiesOf('<Text />', module)
  .add('Single', () => {
    const label = text('Label', '広告名');
    const name = text('Name', 'ad');

    return (
      <Text label={label} name={name} />
    );
  })
  .add('Password', () => {
    return (
      <Password label='パスワード' name='password' />
    );
  });

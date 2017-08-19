import * as React from 'react';

import { storiesOf, addDecorator  } from '@storybook/react';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { Radio, IRadioOption } from './Radio';

storiesOf('<Radio />', module)
  .add('Simple', () => {
    const options: IRadioOption[] = [
      { text: 'A', value: 1 },
      { text: 'B', value: 2 },
      { text: 'C', value: 3 },
    ];
    const onClick = (option: IRadioOption) => console.log(option);

    const currentValue = 1;

    return (
      <Radio name='test' options={options} currentValue={currentValue} onClick={onClick} />
    );
  });

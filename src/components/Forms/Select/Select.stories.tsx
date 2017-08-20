import * as React from 'react';

import { storiesOf, addDecorator  } from '@storybook/react';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { Select, ISelectOption } from './Select';

storiesOf('<Select />', module)
  .add('Single', () => {
    const label = text('Label', 'キャンペーン');
    const defaultValue = text('Default Value', 'キャンペーンを選択する');
    const options: ISelectOption[] = [
      {
        text: 'A',
        value: 'a',
      },
      {
        text: 'B',
        value: 'B',
      },
      {
        text: 'C',
        value: 'C',
      },
    ];

    return (
      <Select label={label} defaultValue={defaultValue} options={options}/>
    );
  });

import * as React from 'react';

import { storiesOf, addDecorator  } from '@storybook/react';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { Select } from './select';

storiesOf('<Select />', module)
  .add('Single', () => {
    const label = text('Label', 'キャンペーン');
    const defaultValue = text('Default Value', 'キャンペーンを選択する');
    const options = [
      {
        key: 'A',
        value: 'a',
      },
      {
        key: 'B',
        value: 'B',
      },
      {
        key: 'C',
        value: 'C',
      },
    ];

    return (
      <Select label={label} defaultValue={defaultValue} options={options}/>
    );
  });

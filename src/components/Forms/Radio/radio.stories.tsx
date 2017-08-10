import * as React from 'react';

import { storiesOf, addDecorator  } from '@storybook/react';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { Radio } from './radio';

storiesOf('<Radio />', module)
  .add('Simple', () => {

    return (
      <Radio />
    );
  });

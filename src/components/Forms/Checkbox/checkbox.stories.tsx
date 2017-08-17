import * as React from 'react';

import { storiesOf, addDecorator  } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

const CssDecorator = (storyFn: any) => {
  const globalCss = injectGlobal`
    html {
        box-sizing: border-box;
        font-size: 100%;
        min-width: 320px;
        font-family: Arial;
        line-height: 1.5;
    }
    body {
        margin: 0;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
  `;

  const styles = {
    margin: '1rem',
  };

  return (
    <section style={styles} >
      { storyFn() }
    </section>
  );
};

addDecorator(CssDecorator);
addDecorator(withKnobs);

storiesOf('<Checkbox />', module)
  .add('Single', () => {
    const label = text('Label', 'Hello World');
    const name = text('Name', 'test');

    return (
      <Checkbox label={label} name={name} />
    );
  })
  .add('Group', () => {
    return (
      <CheckboxGroup />
    );
  });

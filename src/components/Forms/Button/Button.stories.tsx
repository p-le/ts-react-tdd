import * as React from 'react';

import { storiesOf, addDecorator  } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';

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

const Button = styled.button`
  color: ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  font-size: 1em;
  appearance: none;
  outline: none;
  margin: 1em;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  border: 2px solid ${props => props.theme.fg};
  cursor: pointer;
`;

const theme = {
  fg: 'palevioletred',
  bg: 'white',
};

const invertTheme = ({ fg, bg }: { fg: string, bg: string}) => ({
  fg: bg,
  bg: fg,
});

storiesOf('<Styled Components />', module)
  .add('Theme Provider', () => {
    const content = text('Content', 'Hello World');
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Button>Default Theme</Button>

          <ThemeProvider theme={invertTheme}>
            <Button>Inverted Theme</Button>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    );
  });

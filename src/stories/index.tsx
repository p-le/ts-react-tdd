import * as React from 'react';
import { storiesOf, addDecorator  } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { BasicMenu } from '../components/Navigation/BasicMenu';
import { Dropdown } from '../components/Shared/Dropdown';

import { Button } from '../components/Forms/Button/button';
import { Textarea } from '../components/Forms/Textarea';

import { Hr } from '../components/Shared/Hr';

import { injectGlobal } from 'styled-components';
import './styles.css';

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

storiesOf('<BasicMenu />', module)
  .add('Normal', () => <BasicMenu />);

storiesOf('<Dropdown />', module)
  .add('Normal', () => (
    <div>
      <h3>{text('Label', 'Hello Button')}</h3>
      <Dropdown triggerFn={action('click')} />
    </div>)
  );
storiesOf('<Grid />', module)
  .add('Display grid', () => (
    <div className='app-layout'>
      <div className='tweets'>Tweets</div>
      <div className='replies'>Replies</div>
      <div className='search'>Search</div>
      <div className='messages'>Messages</div>
    </div>
  ));

storiesOf('Form Components', module)
  .add('<Button />', () => {
    const modifiers =  ['default', 'primary', 'success', 'info', 'warning', 'danger'];
    const buttons = modifiers.map(modifier => {
      return (
        <div style={{ margin: '1rem' }} key={modifier}>
          <Button value='Button' modifier={modifier} />
        </div>
      );
    });

    return (
      <div>
        <h2>{text('head', 'Hello Button')}</h2>
        {  buttons }
      </div>
    );
  })
  .add('<Textarea />', () => {
    return (
      <section>
        <div>
          <header>
            <h4>Default Textarea</h4>
            <code>{`<Textarea />`}</code>
          </header>
          <Textarea />
        </div>
        <div>
          <header>
            <h4>Fullwidth Textarea</h4>
            <code><strong>{`<Textarea fullwidth={true} />`}</strong></code>
          </header>
          <Textarea fullWidth={true} />
        </div>
      </section>
    );
  })

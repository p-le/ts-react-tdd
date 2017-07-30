import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BasicMenu } from '../components/Navigation/BasicMenu';
import { Dropdown } from '../components/Shared/Dropdown';
import { StyledButton as Button } from '../components/Shared/Button';
const styles = {
  textAlign: 'center',
};

const CenterDecorator = (storyFn: any) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

storiesOf('<BasicMenu />', module)
  .addDecorator(CenterDecorator)
  .add('Normal', () => <BasicMenu />);

storiesOf('<Dropdown />', module)
  .add('Normal', () => (
    <div>
      <h3>Click outside to close Dropdown</h3>
      <Dropdown triggerFn={action('click')} />
    </div>)
  );

storiesOf('Form Component', module)
  .add('Normal', () => {
    const modifiers =  ['default', 'primary', 'success', 'info', 'warning', 'danger'];

    const buttons = modifiers.map((modifier) => {
      return (
        <div style={{ margin: '1rem' }}>
          <Button value='Button' modifier={modifier} />
        </div>
      );
    });

    return (
      <div>
        <h2>Button Component</h2>
        {  buttons }
      </div>
    );
  });

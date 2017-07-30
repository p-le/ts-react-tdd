import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { BasicMenu } from '../components/Navigation/BasicMenu';

const styles = {
  textAlign: 'center',
};
const CenterDecorator = (storyFn: any) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

storiesOf('Basic Menu', module)
  .addDecorator(CenterDecorator)
  .add('with text', () => <BasicMenu />);

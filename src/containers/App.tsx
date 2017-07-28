import * as React from 'react';
import { Hello } from '../components/Hello';
import Grid from '../components/Grid/Grid';
import { BarChart } from '../components/BarChart';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Grid fluid={true}>
        <Hello compiler='Typescript' framework='React' />
        <BarChart data={[5, 10, 1, 3]} size={[500, 500]} />
      </Grid>
    );
  }
}

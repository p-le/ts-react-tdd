import * as React from 'react';
import { Hello } from '../components/Shared/Hello';
import Grid from '../components/Grid/Grid';
import { BarChart } from '../components/Charts/BarChart';
import { LineChart } from '../components/Charts/LineChart';
import { timeParse } from 'd3';
export class App extends React.Component<{}, {}> {
  render() {
    const parseTime = timeParse('%d-%b-%y');

    const data = [
      {
        date: parseTime('24-Apr-07'),
        close: 93.24,
      },
      {
        date: parseTime('25-Apr-07'),
        close: 95.35,
      },
    ];

    return (
      <Grid fluid={true}>
        <Hello compiler='Typescript' framework='React' />
        <BarChart data={[5, 10, 1, 3]} size={[500, 500]} />
        <LineChart data={data} />
      </Grid>
    );
  }
}

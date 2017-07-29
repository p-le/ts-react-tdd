import * as React from 'react';
import Grid from '../components/Grid/Grid';
import { BarChart } from '../components/Charts/BarChart';
import { LineChart } from '../components/Charts/LineChart';
import { Alphabet } from '../components/Shared/Alphabet';
import { PushMenu } from '../components/Shared/PushMenu';
import { timeParse } from 'd3';

interface IAppState {
  openMenu: boolean;
}

export class App extends React.Component<{}, IAppState> {
  constructor() {
    super();
    this.state = {
      openMenu: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  componentDidMount() {
    const data = [10, 15, 30, 50, 80, 65, 55, 30, 20, 10, 8];
  }

  handleMenu() {
    console.log(this.refs);
    this.setState({
      openMenu: !this.state.openMenu,
    });
  }

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
        <PushMenu open={this.state.openMenu} handleMenu={this.handleMenu} />
        <svg width={500} height={500} >
          <Alphabet />
        </svg>
        <BarChart data={[5, 10, 1, 3]} size={[500, 500]} />
        <LineChart data={data} />
        <button onClick={this.handleMenu}>Open Menu</button>
      </Grid>
    );
  }
}

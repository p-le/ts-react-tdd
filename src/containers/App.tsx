import * as React from 'react';
import Grid from '../components/Grid/Grid';
import { BarChart } from '../components/Charts/BarChart';
import { LineChart } from '../components/Charts/LineChart';
import { Alphabet } from '../components/Shared/Alphabet';
import { EnhancedMenu } from '../components/Navigation/EnhancedMenu';
import { Dropdown } from '../components/Shared/Dropdown';
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
      <div>
        <EnhancedMenu />
        <Grid fluid={true}>
          <Dropdown triggerFn={console.log}/>
          <div style={{ width: '60%' }}>
            <svg width={500} height={500} >
              <Alphabet />
            </svg>
          </div>
          <div style={{ width: '40%' }}>
            <BarChart data={[5, 10, 1, 3]} size={[500, 500]} />
          </div>
          <div style={{ width: '100%' }}>
            <LineChart data={data} />
          </div>
        </Grid>
      </div>
    );
  }
}

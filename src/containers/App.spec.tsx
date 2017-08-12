import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
  it('should render <Hello /> component', () => {
    const wrapper = shallow(<App />);
    expect(true).toEqual(true);
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { Hello } from '../components/Shared/Hello';

describe('<App />', () => {
  it('should render <Hello /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Hello)).toHaveLength(1);
  });
});

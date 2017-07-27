import * as React from 'react';
import { Hello } from '../src/components/Hello';
import { shallow } from 'enzyme';

describe('<Hello />', () => {
  it('should renders properly', () => {
    const wrapper = shallow(<Hello compiler='Typescript' framework='React' />);
    expect(wrapper.text()).toEqual('Hello from Typescript and React');
  });
});

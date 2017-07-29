import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Alphabet } from './Alphabet';
import { interval } from 'd3-timer';

jest.useFakeTimers();

describe('<Alphabet />', () => {
    it('should render properly', () => {
        const wrapper = shallow(<Alphabet />);
        expect(wrapper.find('g')).toHaveLength(1);
    });

    it('should change text on interval', () => {
        const spy = jest.spyOn(Alphabet.prototype, 'updateAlphabet');
        const wrapper = mount(<Alphabet />);
        expect(spy).not.toBeCalled();
        jest.runTimersToTime(1500);
        const alphabet: string[] = wrapper.state('alphabet');
        expect(spy).toBeCalled();
        expect(wrapper.find('g').children().first().text()).toBe(alphabet[0]);
        wrapper.unmount();
        expect((clearInterval as any).mock.calls.length).toBe(1);
    });
});

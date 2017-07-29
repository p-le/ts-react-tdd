import * as React from 'react';
import { render, mount } from 'enzyme';
import { Letter, ILetterProps } from './Letter';

describe('<Letter />', () => {
    let props: ILetterProps;

    beforeEach (() => {
        props = {
            datum: 'a',
            index: 1,
            animateDuration: 1500,
        };
    });
    it('should render properly', () => {
        const wrapper = render(<Letter {...props} />);
        expect(wrapper.find('text')).toHaveLength(1);
        expect(wrapper.find('text').text()).toBe(props.datum);
    });

    it('shoulder transition properly', () => {
        const spyEnter = jest.spyOn(Letter.prototype, 'handleEnter');
        const wrapper = mount(<Letter {...props} />);
        expect(spyEnter).toHaveBeenCalled();
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const wrapper = shallow(<App />);

    it('renders the component', () => {
        expect(wrapper.find('.main-container').exists()).toBe(true);
    });
});
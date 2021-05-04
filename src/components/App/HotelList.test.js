import React from 'react';
import HotelList from './HotelList';
import { shallow } from 'enzyme';

describe('HotelList', () => {
  const wrapper = shallow(<HotelList />);

  it('renders the component', () => {
      expect(wrapper.find('.app-container').exists()).toBe(true);
  });
});

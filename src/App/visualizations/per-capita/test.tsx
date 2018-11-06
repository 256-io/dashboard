import React from 'react';
import GDPPerCapita from '.';
import { ShallowWrapper, shallow } from 'enzyme';

describe('GDPPerCapita', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<GDPPerCapita/>);
  });
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

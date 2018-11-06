import React from 'react';
import GDPGrowth from '.';
import { ShallowWrapper, shallow } from 'enzyme';

describe('GDPGrowth', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<GDPGrowth/>);
  });
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

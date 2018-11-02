import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Dials from '.';

const value = {};
describe('Dials', () => {
  let wrapper:ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Dials value={value} onChange={jest.fn()} />);
  });
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

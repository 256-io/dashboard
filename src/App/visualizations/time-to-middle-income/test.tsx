import React from 'react';
import TimeToMiddleIncome from '.';
import { ShallowWrapper, shallow } from 'enzyme';

describe('TimeToMiddleIncome', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<TimeToMiddleIncome/>);
  });
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

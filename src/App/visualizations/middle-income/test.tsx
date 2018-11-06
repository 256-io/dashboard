import React from 'react';
import MiddleIncomeNeed from '.';
import { ShallowWrapper, shallow } from 'enzyme';

describe('GDP', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<MiddleIncomeNeed/>);
  });
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

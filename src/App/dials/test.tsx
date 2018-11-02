import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Dials from '.';

describe('Dials', () => {
  let wrapper:ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Dials/>);
  });
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

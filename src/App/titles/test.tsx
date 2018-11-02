import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Home from '.';

describe('Home', () => {
  let wrapper:ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Home/>);
  });
  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

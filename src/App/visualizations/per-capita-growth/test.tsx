import React from 'react';
import PerCapitaGrowth from '.';
import { ShallowWrapper, shallow } from 'enzyme';

describe('PerCapitaGrowth', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<PerCapitaGrowth/>);
  });
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

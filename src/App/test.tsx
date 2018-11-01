import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('App', () => {
  let wrapper = mount(<App/>);
  beforeEach(() => {
    wrapper = mount(<App/>);
  });
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

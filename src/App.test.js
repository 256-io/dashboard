import React from 'react';
import mount from 'enzyme/mount'
import App from './App';

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<App></App>)
  });
  it('renders without crashing', () => {
   expect(wrapper.exists()).toBe(true)
  });
});


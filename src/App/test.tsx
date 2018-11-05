import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Titles from './titles';
import Visualizations from './visualizations';
import App from '.';

const data = { sample:'data' };

describe('App', () => {
  let wrapper : ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<App data={data}/>);
  });
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should render Titles', () => {
    expect(wrapper.find(Titles).exists()).toBeTruthy();
  });
  it('should render Visualizations', () => {
    expect(wrapper.find(Visualizations).exists()).toBeTruthy();
  });
});

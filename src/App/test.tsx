import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Titles from './titles';
import Dials from './dials';
import Visualizations from './visualizations';
import App from '../App';

describe('App', () => {
  let wrapper : ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
  });
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should render Titles', () => {
    expect(wrapper.find(Titles).exists()).toBeTruthy();
  });
  it('should render Dials', () => {
    expect(wrapper.find(Dials).exists()).toBeTruthy();
  });
  it('should render Visualizations', () => {
    expect(wrapper.find(Visualizations).exists()).toBeTruthy();
  });
});

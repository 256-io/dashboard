import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Titles from './titles';
import Visualizations from './visualizations';
import { Provider, defaultContext } from './context';
import App from '.';

jest.mock('./context', () => ({
  Provider:({ children }:{children:any}) => <div>{children}</div>,
}));
jest.mock('./visualizations', () => () => <div></div>);

describe('App', () => {
  let wrapper : ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should render Titles', () => {
    expect(wrapper.find(Titles).exists()).toBeTruthy();
  });
  describe('ContextProvider', () => {
    let contextProvider:ReactWrapper;
    beforeEach(() => {
      contextProvider = wrapper.find(Provider);
    });
    it('should render contex provider', () => {
      expect(contextProvider).toHaveLength(1);
    });
    it('should have the App data prop as its value prop', () => {
      expect(contextProvider.prop('value')).toBe(wrapper.prop('data'));
    });
    describe('Visualizations', () => {
      let viz :ReactWrapper;
      beforeEach(() => {
        viz = contextProvider.find(Visualizations);
      });
      it('should be rendered in the contextProvider', () => {
        expect(viz.exists()).toBeTruthy();
      });
    });
  });
});

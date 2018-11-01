import ReactDOM from 'react-dom';
import '.'
import {register} from './serviceWorker'


jest.mock('react-dom',()=>({
  render:jest.fn()
}))

jest.mock('./serviceWorker.js',()=>({register:jest.fn()}))

describe('entry point', () => {
  it('should call ReactDOm.render', () => {
    expect(ReactDOM.render).toHaveBeenCalled();
  });
  it('should register the service worker', () => {
    expect(register).toHaveBeenCalled();
  });
});